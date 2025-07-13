"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormControl, FormItem, FormLabel, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from 'uuid';
import { supabase } from "@/lib/supabaseClient";
import { Paper } from "@/types/paper";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { toast } from "sonner";
import { useState } from "react";
import Spinner from "@/custom_components/Spinner";

export default function UploadPaper() {

  const currentYear: number = new Date().getFullYear();
  const [uploadingPaper, setUploadingPaper] = useState<boolean>(false);

  // Schema for new paper input form
  const newPaperSchema = z.object({
    school: z.string()
      .min(3, "School name must be at least three characters long.")
      .max(255, "School name must not exceed 255 characters"),

    subject: z.string()
      .min(3, "Subject name must be at least three characters long.")
      .max(255, "Subject name must not exceed 255 characters"),

    year: z.number()
      .min(1980, { message: `Years must be between 1980 and ${currentYear}.` })
      .max(currentYear, { message: `Years must be between 1980 and ${currentYear}.` }),

    courseCode: z.string()
      .refine((courseCode) => (courseCode && courseCode.length >= 3, "Course Code must be at least three characters long."))
      .optional(),

    semester: z.string()
      .optional(),

    professor: z.string()
      .refine((professor) => (professor && professor.length >= 3, "Professor must be at least three characters long."))
      .optional(),

    pdfFile: z.custom<FileList>()
      // either we have no files, or the uploaded file type is a pdf object
      .refine((files) => (files.length === 0 || (files.length === 1 && files[0]?.type == "application/pdf")))
      // Only for development, in prod, papers must have pdfs associated with them .
      .optional(),
  })

  const newPaperForm = useForm<z.infer<typeof newPaperSchema>>({
    resolver: zodResolver(newPaperSchema),
    defaultValues: {
      school: "",
      subject: "",
      year: currentYear,
      courseCode: "",
      semester: "",
      professor: "",
      pdfFile: undefined
    }
  })

  // Uploads paper pdfs to the storage bucket
  async function uploadNewPaperPdf(values: z.infer<typeof newPaperSchema>): Promise<string> {
    // if we have a file uploaded, and it is a single value of type pdf, attempt to upload it
    if (values.pdfFile && values.pdfFile.length === 1 && values.pdfFile[0].type == "application/json") {
      const filename = `${uuidv4()}.pdf`
      const { error } = await supabase.storage
        .from("papers")
        .upload(filename, values.pdfFile[0])

      if (error) {
        throw new Error("Failed to upload PDF to the server.")
      }

      // If there is no error, get the publicUrl of the uploaded pdf
      const { data } = await supabase.storage
        .from("papers")
        .getPublicUrl(filename)

      if (data.publicUrl) {
        return data.publicUrl;
      }

    }
    return "";
  }

  async function newPaperFormHandler(values: z.infer<typeof newPaperSchema>) {
    setUploadingPaper(true)
    // Check if the Paper has an assocaied pdf, if so, upload it and retrieve its publicUrl
    let pdfUrl = ""
    if (values.pdfFile && values.pdfFile.length === 1) {
      pdfUrl = await uploadNewPaperPdf(values);
    }

    // New paper Object
    let newPaper: Paper = {
      school: values.school,
      subject: values.subject,
      year: values.year,
      courseCode: values.courseCode ? values.courseCode : undefined,
      semester: values.semester ? values.semester : undefined,
      professor: values.professor ? values.professor : undefined,
      // Only for development, in prod, papers must have pdfs associated with them .
      pdfFile: pdfUrl ? pdfUrl : undefined
    }

    // insert the new paper into the database
    try {
      const { data, error }: PostgrestSingleResponse<null> = await supabase
        .from("paper")
        .insert(newPaper)
      if (error) {
        toast.error("Internal Server Error", {
          description: "Failed to upload the paper because of an internal server error. Please try again later."
        })
      }
    }
    catch (error) {
      toast.error("Internal Server Error", {
        description: "Failed to upload the paper because of an internal server error. Please try again later."
      })
    }
    setUploadingPaper(false)

  }

  return (
    <div className="py-3 min-h-dvh">
      <header className="w-2/5 text-6xl font-medium m-auto text-center">
        Upload Paper
      </header>

      <div>
        {uploadingPaper && <Spinner />}
        <div className="mt-6">
          <Form {...newPaperForm}>
            <form className="w-xl m-auto" onSubmit={newPaperForm.handleSubmit(newPaperFormHandler)}>

              {/* PDF File */}
              <FormField
                control={newPaperForm.control}
                name="pdfFile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700">
                      Upload PDF File
                    </FormLabel>
                    <FormControl>
                      <label
                        htmlFor="pdf-upload"
                        className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg px-6 py-4 text-center cursor-pointer hover:border-blue-500 transition"
                      >
                        <p className="text-sm text-gray-600 mb-4">
                          Drag and drop a file here, <br /> or click the button.
                        </p>
                        <span className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition">
                          Choose File
                        </span>
                        <Input
                          {...newPaperForm.register("pdfFile")}
                          id="pdf-upload"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* School */}
              <FormField
                control={newPaperForm.control}
                name="school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700 mt-2">
                      School
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-lg rounded px-3 py-2 hover:border-2 hover:border-blue-500 hover:shadow-lg transition"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Subject */}
              <FormField
                control={newPaperForm.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700 mt-2">
                      Subject
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-lg rounded px-3 py-2 hover:border-2 hover:border-blue-500 hover:shadow-lg transition"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Year */}
              <FormField
                control={newPaperForm.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700 mt-2">
                      Year
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        className="text-lg rounded px-3 py-2 hover:border-2 hover:border-blue-500 hover:shadow-lg transition"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Course Code */}
              <FormField
                control={newPaperForm.control}
                name="courseCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700 mt-2">
                      Course Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-lg rounded px-3 py-2 hover:border-2 hover:border-blue-500 hover:shadow-lg transition"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Semester */}
              <FormField
                control={newPaperForm.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700 mt-2">
                      Semester
                    </FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="text-lg rounded px-3 py-2 border-2 h-10 hover:border-blue-500 transition"
                      >
                        <option>Spring</option>
                        <option>Fall</option>
                        <option>Summer</option>
                        <option>Winter</option>
                        <option></option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />


              {/* Professor */}
              <FormField
                control={newPaperForm.control}
                name="professor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700 mt-2">
                      Professor
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-lg rounded px-3 py-2 hover:border-2 hover:border-blue-500 hover:shadow-lg transition"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="block m-auto mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition cursor-pointer">
                Upload
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

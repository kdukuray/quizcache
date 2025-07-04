"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormControl, FormItem, FormLabel, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UploadPaper() {

  const newPaperSchema = z.object({
    school: z.string().min(3),
    year: z.number().min(2000).max(2025),
    semester: z.string().min(4),
    subject: z.string().min(3),
    courseCode: z.string(),
    professor: z.string().min(3),
    pdfFile: z.custom<FileList>()
      .refine((files) => files && files.length === 1, "Upload one PDF")
      .refine(
        (files) => files && files[0]?.type === "application/pdf",
        "File must be a PDF",
      )
  })

  const newPaperForm = useForm<z.infer<typeof newPaperSchema>>({
    resolver: zodResolver(newPaperSchema),
    defaultValues: {
      school: "",
      year: 2025,
      semester: "",
      subject: "",
      courseCode: "",
      professor: "",
      pdfFile: undefined
    }
  })

  function newPaperFormHandler(form: z.infer<typeof newPaperSchema>) {
    console.log(form)
  }

  return (
    <div className="py-3 min-h-dvh">
      <header className="w-2/5 text-6xl font-medium m-auto text-center">
        Upload Paper
      </header>

      <div>
        <div className="mt-6">
          <Form {...newPaperForm}>
            <form className="w-xl m-auto" onSubmit={newPaperForm.handleSubmit(newPaperFormHandler)}>
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

              {/* School input */}
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

              {/* Year input */}
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

              {/* Semester input */}
              <FormField
                control={newPaperForm.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium text-gray-700 mt-2">
                      Semester
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

              {/* Subject input */}
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

              {/* Course Code input */}
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

              {/* Professor input */}
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
                className="block m-auto mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Paper, PaperDetailsPageParams } from "@/types/paper";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export default function PaperDetails({ params }: {params: Promise<{paperId: string}>}) {
  const [paper, setPaper] = useState<Paper>();

  async function getPaper() {
    const {paperId} = await params;
    const { data, error }: PostgrestSingleResponse<Paper> = await supabase
      .from("paper")
      .select("*")
      .eq("id", paperId)
      .limit(1)
      .single()
      ;

    if (error) {
      console.error("Error fetching paper:", error);
    } else if (data) {
      setPaper(data);
    }
  }

  useEffect(() => {
    getPaper();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {paper ? (
        <>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Paper Details
            </h2>
            <div className="grid grid-cols-2 gap-4 text-blue-900">
              <div><span className="font-semibold">School:</span> {paper.school}</div>
              <div><span className="font-semibold">Subject:</span> {paper.subject}</div>
              <div><span className="font-semibold">Course Code:</span> {paper.courseCode || "N/A"}</div>
              <div><span className="font-semibold">Year:</span> {paper.year}</div>
              <div><span className="font-semibold">Semester:</span> {paper.semester || "N/A"}</div>
              <div><span className="font-semibold">Professor:</span> {paper.professor || "N/A"}</div>
            </div>
          </div>

          {paper.pdfFile ? (
            <div className="relative w-full pt-[86%] min-h-[500px] rounded-xl overflow-hidden border border-blue-300 shadow">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={paper.pdfFile}
                title="Public PDF Viewer"
              ></iframe>
            </div>
          ) : (
            <div className="w-full aspect-video flex items-center justify-center bg-blue-50 text-blue-600 border-2 border-dashed border-blue-300 rounded-xl">
              PDF resource not available
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-blue-600 text-lg">Loading paper details...</div>
      )}
    </div>
  );
}

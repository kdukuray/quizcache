"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import PapersTable from "@/custom_components/PapersTables";

interface TrendingPaper {
  id: number;
  school: string;
  subject: string;
  courseCode: string;
  year: string;
  semester: string;
}

export default function Trending() {
  const router = useRouter();

  const trendingPapers: TrendingPaper[] = [
    {
      id: 1,
      school: "NYU",
      subject: "Calculus",
      courseCode: "MATH201",
      year: "2024",
      semester: "Fall",
    },
    {
      id: 2,
      school: "CCNY",
      subject: "Physics",
      courseCode: "PHYS101",
      year: "2025",
      semester: "Spring",
    },
    {
      id: 3,
      school: "Columbia",
      subject: "Data Science",
      courseCode: "DS300",
      year: "2024",
      semester: "Fall",
    },
    {
      id: 4,
      school: "Hunter",
      subject: "Biology",
      courseCode: "BIO110",
      year: "2025",
      semester: "Spring",
    },
    {
      id: 5,
      school: "Fordham",
      subject: "Macroeconomics",
      courseCode: "ECON202",
      year: "2024",
      semester: "Summer",
    },
  ];

  return (
    <div>
      <header className="w-2/5 text-6xl font-medium m-auto text-center">
        Trending Papers
      </header>

      <div className="max-w-4xl mx-auto mt-14">
        <PapersTable papers={trendingPapers} title="Trending Papers"></PapersTable>
      </div>
    </div>
  );
}

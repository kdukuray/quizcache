"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Popular Right Now
        </h3>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-blue-50">
              <tr>
                {["School", "Subject", "Course Code", "Year", "Semester"].map((col) => (
                  <th
                    key={col}
                    className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {trendingPapers.map((paper) => (
                <tr key={paper.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {paper.school}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {paper.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {paper.courseCode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {paper.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {paper.semester}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
      </div>
    </div>
  );
}

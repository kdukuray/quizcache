"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Paper {
  school: string,
  year: string,
  semester: string,
  subject: string,
  courseCode: string,
  professor: string
}

export default function Home() {

  const router = useRouter()

  const singlePaper: Paper = {
    school: "CCNY",
    year: "2025",
    semester: "spring",
    subject: "physics",
    courseCode: "phy20800",
    professor: "Mr.Pikeman"
  }

  const recentPapers: Paper[] = [singlePaper]

  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1)
    );
  }

  function navigateTo(link: string){
    router.push(link)
  }

  return (
    <div className="">
      <header className="w-2/5 text-6xl font-medium m-auto text-center">
        Find Past Exams
        <br/>
        Upload Yours
        <br/>
        Let's Help Each Other
        <br/>
        <span className="text-blue-700">Succeed!</span>
      </header>

      <div className="w-2/5 m-auto flex flex-row justify-center mt-14">
        <Button
          className="w-44 h-13 text-lg bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all mx-2"
          onClick={() => navigateTo("/upload-paper")}
        >
          Upload a Paper
        </Button>
        <Button
          className="w-44 h-13 text-lg bg-white text-blue-700 border-blue-600 border-2 hover:border-blue-700 hover:bg-white hover:shadow-lg transition-all mx-2"
        >
          Browse Papers
        </Button>
      </div>

      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Recent Papers
        </h3>
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-blue-50">
              <tr>
                {["School", "Year", "Semester", "Subject", "Course Code", "Professor"].map((col) => (
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
              {recentPapers.map((paper, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{toTitleCase(paper.school)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{paper.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{toTitleCase(paper.semester)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{toTitleCase(paper.subject)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{paper.courseCode}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{toTitleCase(paper.professor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

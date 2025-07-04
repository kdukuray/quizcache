"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Request {
    id: number;
    school: string;
    subject: string;
    courseCode: string;
    year: string;
    semester: string;
}

export default function Requests() {
    const router = useRouter();

    const requests: Request[] = [
        {
            id: 1,
            school: "CCNY",
            subject: "Calculus",
            courseCode: "MATH201",
            year: "2024",
            semester: "Fall",
        },
        {
            id: 2,
            school: "NYU",
            subject: "Physics",
            courseCode: "PHYS101",
            year: "2025",
            semester: "Spring",
        },
        {
            id: 3,
            school: "Columbia",
            subject: "Computer Science",
            courseCode: "CS1001",
            year: "2024",
            semester: "Fall",
        },
        {
            id: 4,
            school: "CCNY",
            subject: "Chemistry",
            courseCode: "CHEM102",
            year: "2025",
            semester: "Spring",
        },
        {
            id: 5,
            school: "NYU",
            subject: "Psychology",
            courseCode: "PSYCH210",
            year: "2024",
            semester: "Summer",
        },
        {
            id: 6,
            school: "Fordham",
            subject: "Economics",
            courseCode: "ECON301",
            year: "2024",
            semester: "Fall",
        },
        {
            id: 7,
            school: "Hunter College",
            subject: "Biology",
            courseCode: "BIO110",
            year: "2025",
            semester: "Spring",
        },
        {
            id: 8,
            school: "CCNY",
            subject: "Philosophy",
            courseCode: "PHIL105",
            year: "2024",
            semester: "Winter",
        },
        {
            id: 9,
            school: "NYU",
            subject: "Statistics",
            courseCode: "STAT220",
            year: "2025",
            semester: "Fall",
        },
        {
            id: 10,
            school: "Columbia",
            subject: "Art History",
            courseCode: "ART150",
            year: "2024",
            semester: "Spring",
        },
    ];


    return (
        <div>
            <header className="w-2/5 text-6xl font-medium m-auto text-center">
                Requested Papers
            </header>

            <div className="max-w-4xl mx-auto mt-14">

                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                    Recent Requests
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
                            {requests.map((req) => (
                                <tr key={req.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {req.school}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {req.subject}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {req.courseCode}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {req.year}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {req.semester}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center mt-10">
                    <Button
                        className="w-48 h-12 text-lg bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all mx-2"
                        onClick={() => router.push("/upload-paper")}
                    >
                        Upload a Paper
                    </Button>

                    <Button
                        className="w-48 h-12 text-lg bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all mx-2"
                        onClick={() => router.push("/make-request")}
                    >
                        Make a Request
                    </Button>
                </div>
            </div>
        </div>
    );
}

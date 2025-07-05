interface Paper {
  id: number | string;
  school: string;
  subject: string;
  courseCode: string;
  year: string;
  semester: string;
}
export default function PapersTable({papers, title}: {papers: Paper[], title: string}){

    if (papers.length == 0){
        const empty_paper: Paper = {
            id: "",
            school: "",
            subject: "",
            courseCode: "",
            year: "",
            semester: ""
        }
        papers.push(empty_paper)
    }


    return (
        <div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          {title}
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
              {papers.map((paper) => (
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
    )
}
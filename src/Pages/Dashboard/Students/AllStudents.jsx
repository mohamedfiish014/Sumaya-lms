import { FaEdit, FaTrash, FaUserGraduate } from 'react-icons/fa';

const students = [
  { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Computer Science' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Electrical Engineering' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', course: 'Business Administration' },
];

const AllStudents = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaUserGraduate className="mr-2 text-green-500" />
            All Students
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{student.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{student.course}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex space-x-4">
                      <button className="text-blue-500 hover:text-blue-700 transition-colors">
                        <FaEdit className="w-5 h-5" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 transition-colors">
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
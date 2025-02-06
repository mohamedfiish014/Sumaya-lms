import { FiBook, FiUsers, FiUser, FiDollarSign, FiSettings, FiLogOut, FiBell, FiActivity, FiVideo, FiBarChart } from "react-icons/fi";
import { FaChalkboardTeacher, FaRegChartBar } from "react-icons/fa";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
            <FiBook /> Sumaya FX
          </h1>
        </div>
        
        {/* Navigation Menu */}
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 bg-indigo-50 rounded-lg">
              <FiActivity className="text-lg" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors">
              <FiUsers className="text-lg" />
              <span>Students</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors">
              <FaChalkboardTeacher className="text-lg" />
              <span>Instructors</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors">
              <FiBook className="text-lg" />
              <span>Courses</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors">
              <FiVideo className="text-lg" />
              <span>Lessons</span>
            </a>
          </div>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4">
          <button className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors">
            <FiLogOut className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
            <p className="text-gray-600">Platform Analytics Overview</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <FiBell className="text-2xl text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-indigo-600"></div>
              <span className="font-medium">Admin User</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Students</p>
                <p className="text-3xl font-bold mt-2">15,432</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FiUsers className="text-2xl text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600">↑ 12%</span> from last month
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Active Courses</p>
                <p className="text-3xl font-bold mt-2">2,345</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <FiBook className="text-2xl text-purple-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600">↑ 8%</span> new courses
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Instructors</p>
                <p className="text-3xl font-bold mt-2">623</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <FaChalkboardTeacher className="text-2xl text-orange-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600">↑ 5%</span> new instructors
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Completion Rate</p>
                <p className="text-3xl font-bold mt-2">78%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FiBarChart className="text-2xl text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600">↑ 3%</span> overall progress
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Enrollment Trends</h3>
              <FaRegChartBar className="text-xl text-gray-500" />
            </div>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Enrollment Chart</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Course Progress</h3>
              <FiBarChart className="text-xl text-gray-500" />
            </div>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Progress Chart</span>
            </div>
          </div>
        </div>

        {/* Recent Activities Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Student Activities</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3">Student</th>
                  <th className="pb-3">Course</th>
                  <th className="pb-3">Activity</th>
                  <th className="pb-3">Progress</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4">John Doe</td>
                    <td>Advanced Python Programming</td>
                    <td>Completed Chapter 5</td>
                    <td>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: `${Math.random()*100}%`}}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Courses</h3>
            <div className="space-y-4">
              {['Web Development Bootcamp', 'Data Science Fundamentals', 'UI/UX Design Masterclass'].map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <span>{course}</span>
                  <span className="text-indigo-600">1,234 enrollments</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">System Health</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Active Users</span>
                <span className="text-green-600">2,345 online</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Server Load</span>
                <span className="text-yellow-600">65% capacity</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Storage Usage</span>
                <span className="text-blue-600">1.2TB/2TB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
import React from 'react';
import { FaUser, FaTasks, FaClipboardList, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white p-5">
        <h2 className="text-3xl font-bold text-center mb-10">Admin Panel</h2>
        <ul>
          <Link to="/users"><li className="mb-6 flex items-center">
            <FaUser className="mr-3 text-xl" />
            <span>Users</span>
          </li></Link>
          <li className="mb-6 flex items-center">
           <Link to="/tasks"> <FaTasks className="mr-3 text-xl" /></Link>
            <span>Tasks</span>
          </li>
          <li className="mb-6 flex items-center">
            <FaClipboardList className="mr-3 text-xl" />
            <span>Reports</span>
          </li>
          <li className="mb-6 flex items-center">
            <FaChartBar className="mr-3 text-xl" />
            <span>Analytics</span>
          </li>
          <li className="flex items-center mt-20 cursor-pointer hover:bg-indigo-700 p-2 rounded">
            <FaSignOutAlt className="mr-3 text-xl" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl font-bold text-indigo-600">125</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Pending Tasks</h2>
            <p className="text-3xl font-bold text-orange-600">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700">Completed Reports</h2>
            <p className="text-3xl font-bold text-green-600">45</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <ul>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>User John added a task</span>
                <span className="text-sm text-gray-500">2 mins ago</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>Report #45 submitted</span>
                <span className="text-sm text-gray-500">5 mins ago</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>User Sarah completed a task</span>
                <span className="text-sm text-gray-500">10 mins ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

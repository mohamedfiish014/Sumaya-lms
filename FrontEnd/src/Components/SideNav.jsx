import React from 'react';
import { FaTachometerAlt, FaBook, FaUserGraduate, FaChalkboardTeacher, FaUsersCog, FaUserShield, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 fixed">
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-center p-6 bg-gray-900 text-white">
          <h2 className="text-2xl font-bold">EduDashboard</h2>
        </div>
        
        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 p-4">
          {/* Dashboard */}
          <Link to="/dashboard" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
            <FaTachometerAlt className="mr-4 text-xl" />
            Dashboard
          </Link>

          {/* Courses */}
          <div>
            <p className="text-sm text-gray-500 font-semibold">Courses</p>
            <Link to="/courses/add" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaBook className="mr-4 text-xl" />
              Add Course
            </Link>
            <Link to="/courses/all" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaBook className="mr-4 text-xl" />
              All Courses
            </Link>
          </div>

          {/* Students */}
          <div>
            <p className="text-sm text-gray-500 font-semibold">Students</p>
            <Link to="/students/add" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserGraduate className="mr-4 text-xl" />
              Add Student
            </Link>
            <Link to="/students/all" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserGraduate className="mr-4 text-xl" />
              All Students
            </Link>
          </div>

          {/* Teachers */}
          <div>
            <p className="text-sm text-gray-500 font-semibold">Teachers</p>
            <Link to="/teachers/add" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaChalkboardTeacher className="mr-4 text-xl" />
              Add Teacher
            </Link>
            <Link to="/teachers/all" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaChalkboardTeacher className="mr-4 text-xl" />
              All Teachers
            </Link>
          </div>

          {/* Users */}
          <div>
            <p className="text-sm text-gray-500 font-semibold">Users</p>
            <Link to="/users/admin" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserShield className="mr-4 text-xl" />
              Admin
            </Link>
            <Link to="/users" className="flex items-center text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserAlt className="mr-4 text-xl" />
              User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

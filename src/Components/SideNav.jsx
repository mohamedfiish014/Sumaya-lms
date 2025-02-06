import React from 'react';
import { FaTachometerAlt, FaBook, FaUserGraduate, FaChalkboardTeacher, FaUsersCog, FaUserShield, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="h-[1000px] bg-[#164da8] rounded-tr-[20px] text-white fixed">
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        
        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 p-4 ">
          {/* Dashboard */}
          <Link to="/dashboard" className="flex items-center text-lg border-b-2 border-white text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
            <FaTachometerAlt className="mr-4 text-xl font-bold" />
            Dashboard
          </Link>

          {/* Courses */}
          <div className='border-b border-white'>
            <p className="text-2xl text-white font-bold">Courses</p>
            <Link to="/courses" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaBook className="mr-4 text-xl" />
              Add Course
            </Link>
            <Link to="/courses/all" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaBook className="mr-4 text-xl" />
              All Courses
            </Link>
          </div>

          {/* Students */}
          <div className='border-b border-white'>
            <p className="text-2xl text-white font-bold">Students</p>
            <Link to="/add" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserGraduate className="mr-4 text-xl" />
              Add Student
            </Link>
            <Link to="/all" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserGraduate className="mr-4 text-xl" />
              All Students
            </Link>
          </div>

          {/* Teachers */}
          <div className='border-b border-white'>
            <p className="text-xl text-white font-bold">Teachers</p>
            <Link to="/addteacher" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaChalkboardTeacher className="mr-4 text-xl" />
              Add Teacher
            </Link>
            <Link to="/allteachers" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaChalkboardTeacher className="mr-4 text-xl" />
              All Teachers
            </Link>
          </div>

          {/* Users */}
          <div className='border-b border-white'>
            <p className="text-sm text-white font-semibold">Users</p>
            <Link to="/admin" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserShield className="mr-4 text-xl" />
              Admin
            </Link>
            <Link to="/users" className="flex items-center text-lg text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg p-3">
              <FaUserAlt className="mr-4 text-2xl" />
              User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

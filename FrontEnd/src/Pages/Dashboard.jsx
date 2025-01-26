import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaDollarSign, FaUniversity } from 'react-icons/fa';
import { IoMdCash } from 'react-icons/io';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import SideNav from '../Components/SideNav';

const Dashboard = () => {
  return (
    <div>
      <SideNav/>

    <div className="min-h-screen bg-gray-100 ml-[20%]">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Courses Enrolled */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Courses Enrolled</h3>
              <p className="text-2xl text-blue-600 font-bold">120</p>
            </div>
            <FaChalkboardTeacher className="text-blue-600 text-4xl" />
          </div>
          
          {/* Students */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Students</h3>
              <p className="text-2xl text-green-600 font-bold">500</p>
            </div>
            <FaUsers className="text-green-600 text-4xl" />
          </div>
          
          {/* Teachers */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Teachers</h3>
              <p className="text-2xl text-purple-600 font-bold">50</p>
            </div>
            <FaUniversity className="text-purple-600 text-4xl" />
          </div>
          
          {/* Expenses */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Expenses</h3>
              <p className="text-2xl text-red-600 font-bold">$2,500</p>
            </div>
            <IoMdCash className="text-red-600 text-4xl" />
          </div>
          
          {/* Income */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Income</h3>
              <p className="text-2xl text-green-600 font-bold">$10,000</p>
            </div>
            <HiOutlineAcademicCap className="text-green-600 text-4xl" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

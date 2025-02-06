import { useState } from 'react';
import { FaUser, FaBook, FaCalendarAlt, FaInfoCircle, FaChalkboardTeacher, FaPlus } from 'react-icons/fa';

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    exp: '',
    bio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <FaChalkboardTeacher className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Add New Teacher</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <FaUser className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  />
                </div>
              </div>

              {/* Course Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                <div className="relative">
                  <FaBook className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="Enter course name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  />
                </div>
              </div>

              {/* Experience Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience (years)</label>
                <div className="relative">
                  <FaCalendarAlt className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="number"
                    name="exp"
                    value={formData.exp}
                    onChange={handleChange}
                    placeholder="Years of experience"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Bio Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <div className="relative">
                <FaInfoCircle className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Write a short bio..."
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <FaPlus className="w-5 h-5 mr-2" />
                Add Teacher
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
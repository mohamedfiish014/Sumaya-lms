import { useState } from 'react';
import { FaBook, FaInfoCircle, FaImage, FaDollarSign, FaClock, FaTag, FaSave } from 'react-icons/fa';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cover: '',
    originalPrice: '',
    discountedPrice: '',
    duration: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <FaBook className="mr-3 text-purple-600" />
          Add New Course
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Course Name */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">Course Name</label>
            <div className="relative">
              <FaBook className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                placeholder="Advanced React Development"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          {/* Course Description */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
            <div className="relative">
              <FaInfoCircle className="absolute left-4 top-4 text-gray-400 text-xl" />
              <textarea
                required
                rows="4"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                placeholder="Course overview and learning objectives..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>

          {/* Course Cover Image */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">Cover Image URL</label>
            <div className="relative">
              <FaImage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="url"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                placeholder="https://example.com/course-image.jpg"
                value={formData.cover}
                onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
              />
            </div>
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Original Price */}
            <div className="relative">
              <label className="block text-lg font-medium text-gray-700 mb-2">Original Price</label>
              <div className="relative">
                <FaDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="number"
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  placeholder="00.00"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                />
              </div>
            </div>

            {/* Discounted Price */}
            <div className="relative">
              <label className="block text-lg font-medium text-gray-700 mb-2">Discounted Price</label>
              <div className="relative">
                <FaTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="number"
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  placeholder="00.00"
                  value={formData.discountedPrice}
                  onChange={(e) => setFormData({ ...formData, discountedPrice: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Price Display */}
          <div className="flex items-center space-x-4 bg-purple-50 p-4 rounded-xl">
            <span className="text-2xl line-through text-gray-500">
              ${formData.originalPrice || '00.00'}
            </span>
            <span className="text-3xl font-bold text-purple-600">
              ${formData.discountedPrice || '00.00'}
            </span>
          </div>

          {/* Course Duration */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">Duration</label>
            <div className="relative">
              <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                required
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                placeholder="3 Months / 12 Weeks"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-5 px-8 rounded-xl text-xl font-semibold transition-all duration-300 flex items-center justify-center"
          >
            <FaSave className="mr-3 text-xl" />
            Publish Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
import { useState } from 'react';
import { FaBook, FaInfoCircle, FaImage, FaFolderPlus, FaPlus, FaClock, FaFileAlt, FaDollarSign, FaUpload } from 'react-icons/fa';

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    cover: '',
    isFree: false,
    chapters: []
  });

  const addChapter = () => {
    setCourse({
      ...course,
      chapters: [...course.chapters, {
        title: '',
        lectures: [],
        time: ''
      }]
    });
  };

  const addLecture = (chapterIndex) => {
    const updatedChapters = [...course.chapters];
    updatedChapters[chapterIndex].lectures.push({
      title: '',
      time: ''
    });
    setCourse({ ...course, chapters: updatedChapters });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourse({
      ...course,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleChapterChange = (chapterIndex, e) => {
    const { name, value } = e.target;
    const updatedChapters = [...course.chapters];
    updatedChapters[chapterIndex][name] = value;
    setCourse({ ...course, chapters: updatedChapters });
  };

  const handleLectureChange = (chapterIndex, lectureIndex, e) => {
    const { name, value } = e.target;
    const updatedChapters = [...course.chapters];
    updatedChapters[chapterIndex].lectures[lectureIndex][name] = value;
    setCourse({ ...course, chapters: updatedChapters });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-8">
            <FaBook className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Create New Course</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Course Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Title <span className="text-red-500">*</span></label>
                <div className="relative">
                  <FaBook className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="title"
                    value={course.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter course title"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300"
                  />
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                <div className="relative">
                  <FaImage className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="file"
                    name="cover"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 opacity-0 cursor-pointer"
                  />
                  <div className="absolute inset-0 flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-white">
                    <FaUpload className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-500">{course.cover || 'Upload cover image'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-red-500">*</span></label>
              <div className="relative">
                <FaInfoCircle className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                <textarea
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                  required
                  placeholder="Write course description..."
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-4">
              <FaDollarSign className="w-5 h-5 text-gray-400" />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="isFree"
                  checked={course.isFree}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Mark as free course</span>
              </label>
            </div>

            {/* Chapters */}
            <div className="space-y-6">
              {course.chapters.map((chapter, chapterIndex) => (
                <div key={chapterIndex} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <FaFolderPlus className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Chapter {chapterIndex + 1}</h3>
                  </div>

                  {/* Chapter Title */}
                  <div className="relative mb-4">
                    <input
                      type="text"
                      name="title"
                      value={chapter.title}
                      onChange={(e) => handleChapterChange(chapterIndex, e)}
                      placeholder="Chapter title"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300"
                    />
                    <FaFileAlt className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>

                  {/* Lectures */}
                  <div className="space-y-4 ml-6">
                    {chapter.lectures.map((lecture, lectureIndex) => (
                      <div key={lectureIndex} className="bg-white p-4 rounded-lg shadow-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <input
                              type="text"
                              name="title"
                              value={lecture.title}
                              onChange={(e) => handleLectureChange(chapterIndex, lectureIndex, e)}
                              placeholder="Lecture title"
                              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300"
                            />
                            <FaFileAlt className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              name="time"
                              value={lecture.time}
                              onChange={(e) => handleLectureChange(chapterIndex, lectureIndex, e)}
                              placeholder="Duration (e.g., 30 mins)"
                              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300"
                            />
                            <FaClock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => addLecture(chapterIndex)}
                    className="mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center"
                  >
                    <FaPlus className="w-4 h-4 mr-1" />
                    Add Lecture
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={addChapter}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 flex items-center"
              >
                <FaFolderPlus className="w-5 h-5 mr-2" />
                Add Chapter
              </button>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center"
              >
                <FaPlus className="w-5 h-5 mr-2" />
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
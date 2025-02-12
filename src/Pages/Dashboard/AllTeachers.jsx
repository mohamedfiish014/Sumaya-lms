import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineIdcard, AiOutlineUser } from "react-icons/ai";
import { MdLocationCity } from "react-icons/md";
import { useState } from "react";
import SideNav from "../../Components/SideNav";

const AllTeacher = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "John Doe", age: 35, city: "New York" },
    { id: 2, name: "Jane Smith", age: 40, city: "Los Angeles" },
    { id: 3, name: "Robert Brown", age: 45, city: "Chicago" },
  ]);

  return (
    <div>
<SideNav/>
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-700 flex items-center gap-2 mb-6">
        <FaChalkboardTeacher className="text-blue-500" /> All Teachers
      </h2>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left"> <AiOutlineIdcard className="inline" /> ID</th>
              <th className="p-3 text-left"> <AiOutlineUser className="inline" /> Name</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left"> <MdLocationCity className="inline" /> City</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={teacher.id} className={`border-b text-left ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="p-3">{teacher.id}</td>
                <td className="p-3">{teacher.name}</td>
                <td className="p-3">{teacher.age}</td>
                <td className="p-3">{teacher.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AllTeacher;

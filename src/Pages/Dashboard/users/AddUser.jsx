import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import SideNav from "../../../Components/SideNav";

const AddUser = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Added:", user);
    setUser({ name: "", email: "", password: "", role: "" });
  };

  return (
    <div>
<SideNav/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 flex items-center justify-center gap-2">
          <IoMdPersonAdd className="text-blue-500" /> Add User
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="relative">
            <AiOutlineUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <MdLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <RiAdminFill className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="role"
              placeholder="Enter Role (e.g., Admin, User)"
              value={user.role}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <FaUserPlus /> Add User
          </button>
        </form>
      </div>
    </div>
              </div>
  );
};

export default AddUser;
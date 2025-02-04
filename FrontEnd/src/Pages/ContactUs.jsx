import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import HeaderLogo from "../images/HeaderLogo.svg"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className=" w-[800px] p-10 bg-white rounded-2xl shadow-lg my-4 border-l border-[#164da8] border-r ">
      <img src={HeaderLogo} alt="" className="w-[50px] h-[50px] ml-[340px] " />
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="  w-full pl-10 p-3 border-b  outline-none"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 p-3 border-b  outline-none"
              required
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-b w-full pl-10 p-3  outline-none"
              required
            />
          </div>
          <div className="relative">
            <FaRegCommentDots className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="resize-none outline-none w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#164da8] cursor-pointer text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

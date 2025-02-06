import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Faq= () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  const questions = [
    {
      question: "What is Sumaya FX?",
      answer: "Sumaya FX is an e-learning platform that offers a wide range of courses to help you expand your knowledge and skills."
    },
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and follow the enrollment instructions."
    },
    {
      question: "Are there any free courses available?",
      answer: "Yes, we offer a variety of free courses that you can enroll in to start learning without any cost."
    },
    {
      question: "Can I get a certificate after completing a course?",
      answer: "Yes, upon successful completion of a course, you will receive a certificate that you can share with potential employers or add to your resume."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team by filling out the contact form on our website or by sending an email to support@learnify.com."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleQuestion(index)}>
                <h3 className="text-2xl font-bold mb-2">{item.question}</h3>
                <FaChevronDown className={`text-blue-600 text-2xl transition-transform ${openQuestion === index ? 'transform rotate-180' : ''}`} />
              </div>
              {openQuestion === index && <p className="text-gray-700 mt-4">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

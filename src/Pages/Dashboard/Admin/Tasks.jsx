import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete project report', completed: false },
    { id: 2, text: 'Attend meeting at 2 PM', completed: true },
    { id: 3, text: 'Prepare presentation slides', completed: false },
  ]);

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAddTask = () => {
    const newTask = { id: tasks.length + 1, text: 'New Task', completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-8 bg-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Your Tasks</h1>
        <button
          onClick={handleAddTask}
          className="bg-indigo-600 text-white py-2 px-4 rounded-full flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Task
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between py-4 px-6 border-b border-gray-200 ${
                task.completed ? 'bg-green-50' : ''
              }`}
            >
              <div className="flex items-center">
                <button
                  onClick={() => handleToggleComplete(task.id)}
                  className="mr-4"
                >
                  {task.completed ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <FaRegCircle className="text-gray-500" />
                  )}
                </button>
                <span
                  className={`text-lg font-semibold ${
                    task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-indigo-600 hover:text-indigo-800">
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;

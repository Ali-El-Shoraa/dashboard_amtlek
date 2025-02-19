import { memo, useState } from "react";
import { FaCircle } from "react-icons/fa";

const tasks = [
  {
    id: 1,
    title: "Patient appointment booking",
    status: "Onhold",
    statusColor: "text-pink-500",
    avatars: [
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: 2,
    title: "Appointment booking with payment",
    status: "Inprogress",
    statusColor: "text-purple-500",
    avatars: [
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: 3,
    title: "Patient and Doctor video conferencing",
    status: "Completed",
    statusColor: "text-green-500",
    avatars: [
      "https://images.pexels.com/photos/7683/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    id: 4,
    title: "Private chat module",
    status: "Pending",
    statusColor: "text-gray-500",
    avatars: [
      "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

const TasksCard = () => {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleCheckboxChange = (taskId) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <div className="w-full flex h-full">
      <div className="flex flex-col w-full bg-white rounded-lg shadow p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h5 className="text-xl font-semibold">Tasks</h5>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="bg-white border border-gray-300 text-sm px-3 py-1 flex items-center"
            >
              {selectedProject}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow">
                <li>
                  <button
                    onClick={() => {
                      setSelectedProject("All Projects");
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    All Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedProject("Ongoing Projects");
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Ongoing Projects
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* Card Body */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="border rounded p-2">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="ti ti-grid-dots text-xl"></i>
                  </span>
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={checkedTasks[task.id] || false}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  <span
                    className={`text-sm font-medium ${
                      checkedTasks[task.id] ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center space-x-3 mt-2 md:mt-0">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${task.statusColor} bg-opacity-20`}
                  >
                    <FaCircle className="mr-1 text-xs" />
                    {task.status}
                  </span>
                  <div className="flex -space-x-2">
                    {task.avatars.map((avatar, index) => (
                      <img
                        key={index}
                        className="w-8 h-8 border-2 border-white rounded-full hover:scale-105 transition-transform duration-300"
                        src={avatar}
                        alt="avatar"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TasksCard);

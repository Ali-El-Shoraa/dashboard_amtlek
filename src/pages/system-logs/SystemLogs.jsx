import React from "react";
import BarChart from "./components/Chart";

const SystemLogs = () => {
  const notifications = [
    {
      id: 1,
      date: "01/01/2023",
      employeeName: {
        name: "Hussein elged",
        sector: "CEO",
      },
      image: "/public/images/notification/pexels-fauxels-3184296 (1).jpg",
      type: "	Login",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      id: 2,
      date: "01/01/2023",
      employeeName: {
        name: "Hussein elged",
        sector: "Manager",
      },
      image: "/public/images/notification/pexels-fauxels-3184296 (1).jpg",
      type: "	Login",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      id: 3,
      date: "01/01/2023",
      employeeName: {
        name: "Hussein elged",
        sector: "Director",
      },
      image: "/public/images/notification/pexels-fauxels-3184296 (1).jpg",
      type: "	Login",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
    {
      id: 4,
      date: "01/01/2023",
      employeeName: {
        name: "Hussein elged",
        sector: "CEO",
      },
      image: "/public/images/notification/pexels-fauxels-3184296 (1).jpg",
      type: "	Login",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
    },
  ];

  const headers = [
    "#",
    "Created at",
    "Employee Name",
    "log type",
    "Description",
    "actton",
  ];

  return (
    <>
      {/* top header section notifications */}
      <section className=" bg-[var(--color-custome-gray-secundry)] p-5">
        <div className="container mx-auto  flex items-center justify-between capitalize ">
          <div className="p-2">
            <h1 className="title">System logs</h1>

            <nav className="py-2">
              <ul className="flex items-center gap-2">
                <li>
                  <i className="bx bx-home-alt text-xl"></i>
                </li>

                <li className="breadcrumb-item">System logs</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* chart section */}
      <section className="container mx-auto capitalize px-5 pt-5">
        <div className="w-[80%] mx-auto ">
          <BarChart />
        </div>
      </section>

      {/* table section notifications */}
      <section className="container mx-auto capitalize p-5">
        <div className="my-10 p-4 mx-auto border rounded-md">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="">
              <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
            </div>
            <div className="relative flex items-center mt-4 md:mt-0">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  {/* Table */}
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                    {/* Table header */}
                    <thead className=" bg-[#01425a] text-white">
                      <tr>
                        <th>#</th>

                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right "
                        >
                          Created at
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          Employee Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          log type
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          actton
                        </th>
                      </tr>
                    </thead>

                    {/* Table body */}
                    <tbody className=" bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {notifications.map((notification, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="text-center px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            {index + 1}
                          </td>

                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            {notification.date}
                          </td>

                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                  className="object-cover w-10 h-10 rounded-full"
                                  alt=""
                                />
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {notification.employeeName.name}
                                  </h2>
                                  <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                    {notification.employeeName.sector}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* type */}
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            {notification.type}
                          </td>

                          {/* description */}
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            {notification.description.length > 50
                              ? notification.description.slice(0, 50) + "..."
                              : notification.description}
                          </td>

                          <td className="px-4 py-4 font-medium text-center space-x-2 text-xs text-gray-700 dark:text-gray-200">
                            <i className="bx bx-show-alt text-xl cursor-pointer transition p-1.5 hover:bg-gray-200 rounded-md hover:text-amber-400"></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div className="text-sm ">
              Page{" "}
              <span className="font-medium text-gray-700 dark:text-gray-100">
                1 of 10
              </span>
            </div>

            <div className="flex">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              >
                1
              </a>
              <a
                href="#"
                className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              >
                2
              </a>
              <a
                href="#"
                className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              >
                ...
              </a>
              <a
                href="#"
                className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              >
                9
              </a>
              <a
                href="#"
                className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              >
                10
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemLogs;

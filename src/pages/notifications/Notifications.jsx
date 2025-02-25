import React, { useState } from "react";
import GeneralStatistics from "../../components/ui/GeneralStatistics";
import Popup from "../../components/ui/Popup";

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // notifications data array
  const notifications = [
    {
      id: 1,
      title: "New message from customer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
      receviers: "290",
      image: "/public/images/notification/pexels-fauxels-3184296 (1).jpg",
      seen: {
        seen: "20",
        not: "140",
      },
    },
    {
      id: 2,
      title: "New message from customer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
      receviers: "120",
      image: "/public/images/notification/pexels-fauxels-3184296 (1).jpg",
      seen: {
        seen: "20",
        not: "140",
      },
    },
    {
      id: 3,
      title: "New message from customer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
      receviers: "278",
      image: "/public/images/notification/pexels-pixabay-265125.jpg",
      seen: {
        seen: "20",
        not: "140",
      },
    },
    {
      id: 4,
      title: "New message from customer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
      receviers: "488",
      image: "/public/images/notification/pexels-pixabay-265125.jpg",
      seen: {
        seen: "20",
        not: "140",
      },
    },
  ];

  const handleShowPopup = (notification) => {
    setSelectedNotification(notification);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedNotification(null);
  };
  return (
    <>
      {/* top header section notifications */}
      <section className=" bg-[var(--color-custome-gray-secundry)] p-5">
        <div className="container mx-auto  flex items-center justify-between capitalize ">
          <div className="p-2">
            <h1 className="title">All sent notifications</h1>

            <nav className="py-2">
              <ul className="flex items-center gap-2">
                <li>
                  <i className="bx bx-home-alt text-xl"></i>
                </li>

                <li className="breadcrumb-item">notifications</li>
              </ul>
            </nav>
          </div>

          <button className=" text-lg flex items-center gap-2 py-3 px-3 bg-[var(--bs-btn-bg)] hover:bg-[var(--bs-btn-hover-bg)] cursor-pointer text-white rounded-md">
            <i className="bx bxs-trash bx-tada text-2xl"></i>
            Delete all notifications
          </button>
        </div>
      </section>

      <section className="container mx-auto capitalize p-5">
        {/* total users */}
        <div className="w-full px-4 gap-3 rounded-md font-semibold text-center grid grid-cols-1 lg:grid-cols-2   p-2  mx-auto">
          {/* <div className=" py-5 px-5 text-xl rounded-s-md bg-[var(--color-custom-blue-secundry)] text-white">
            <p className="text-2xl">( 153 )</p>

            <h1 className="flex items-center justify-center mt-3 gap-2 ">
              <i className="bx bx-group text-4xl"></i> Verified users
            </h1>
          </div>
          <div className=" py-5 px-5 text-xl rounded-e-md bg-[var(--bs-btn-hover-bg)] text-white ">
            <p className="text-2xl">( 170 )</p>

            <h1 className="flex items-center justify-center mt-3 gap-2 ">
              <i className="bx bx-group text-4xl"></i> Guests
            </h1>
          </div> */}
          <GeneralStatistics
            title={"Notifications"}
            icon={<i className="bx bx-group text-4xl"></i>}
            count={"153"}
          />

          <GeneralStatistics
            title={"Notifications"}
            icon={<i className="bx bx-group text-4xl"></i>}
            count={"153"}
          />
        </div>

        {/* table section notifications */}
        <section className=" my-10 px-4 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
              <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                View all
              </button>
              <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Monitored
              </button>
              <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Unmonitored
              </button>
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
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    {/* Table header */}
                    <thead className=" bg-[#01425a] text-white">
                      <tr>
                        <th>#</th>

                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right "
                        >
                          Image
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          send notification
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          notification description
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          Receviers count
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          seen/not seen
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                        >
                          Show
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
                            <img
                              src={notification.image}
                              alt=""
                              className="w-20 rounded-md"
                            />
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            {notification.title.length > 50
                              ? notification.title.slice(0, 50) + "..."
                              : notification.title}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            {notification.description.length > 50
                              ? notification.description.slice(0, 50) + "..."
                              : notification.description}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            {notification.receviers}
                          </td>
                          <td className="flex items-center px-4 py-4  font-medium   text-center space-x-2 text-xs  text-gray-700 dark:text-gray-200">
                            <span className="flex items-center gap-2 w-fit font-semibold p-1 px-2 rounded-lg text-white bg-green-700 ">
                              <i className="bx bx-show-alt text-base"></i>
                              Seen {notification.seen.seen}
                            </span>
                            <span className="flex items-center w-fit gap-2 font-semibold p-1 px-2 rounded-lg text-white bg-[var(--bs-btn-hover-bg)] ">
                              <i className="bx bx-hide text-base"></i>
                              Not Seen {notification.seen.not}
                            </span>
                          </td>

                          <td className="px-4 py-4 font-medium text-center space-x-2 text-xs text-gray-700 dark:text-gray-200">
                            <i
                              className="bx bx-show-alt text-xl cursor-pointer transition p-1.5 hover:bg-gray-200 rounded-md hover:text-amber-400"
                              onClick={() => handleShowPopup(notification)}
                            ></i>
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
            <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
              <a
                href="#"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>previous</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Popup */}
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          {selectedNotification && (
            <>
              <h2 className="text-xl font-bold mb-4">
                {selectedNotification.title}
              </h2>
              <img
                src={selectedNotification.image}
                alt="Notification"
                className="w-full rounded-md mb-4"
              />
              <div className="my-4 flex items-center">
                <span className="flex items-center w-fit gap-2 font-semibold p-1 px-2 rounded-lg text-white bg-green-700">
                  <i className="bx bx-show-alt text-xl"></i>
                  Seen {selectedNotification.seen.seen}
                </span>
                <span className="flex items-center w-fit gap-2 font-semibold p-1 px-2 rounded-lg text-white bg-[var(--bs-btn-hover-bg)] ml-2">
                  <i className="bx bx-hide text-xl"></i>
                  Not Seen {selectedNotification.seen.not}
                </span>
              </div>
              <p>{selectedNotification.description}</p>
            </>
          )}
        </Popup>
      </section>
    </>
  );
};

export default Notifications;

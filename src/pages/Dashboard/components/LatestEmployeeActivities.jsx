import { Link } from "react-router-dom";

export default function LatestEmployeeActivities() {
  // بيانات الإشعارات في مصفوفة
  const notifications = [
    {
      id: 1,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ",
      alt: "User 27",
      name: "Ali El-Shoraa",
      time: "Today at 9:42 AM",
      call: "Call Mr.Customer",
      extra: {
        actions: [
          { label: "Show employee profile", link: "#", type: "primary" },
          { label: "Show lead details", link: "#", type: "outline" },
        ],
      },
    },
    {
      id: 2,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGMQxfcroal7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724461064745?e=1745452800&v=beta&t=O_B3S4B9pYmMpz0hDunS7dTIj8ocXoRgtHlKAcHJihQ",

      alt: "User 28",
      name: "Mostafa Gamal",
      time: "Today at 10:00 AM",
      call: "Call Mr.Customer",
      extra: {
        actions: [
          { label: "Show employee profile", link: "#", type: "primary" },
          { label: "Show lead details", link: "#", type: "outline" },
        ],
      },
    },
    {
      id: 3,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGhowxC94qL4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726547899707?e=1745452800&v=beta&t=VJoFnFZ5xLDwAMca709bEtsaBy8nWUrL0TM9o6qs2HY",

      alt: "User 29",
      name: "Ali Eliwa",
      time: "Today at 10:50 AM",
      call: "Call Mr.Customer",
      extra: {
        actions: [
          { label: "Show employee profile", link: "#", type: "primary" },
          { label: "Show lead details", link: "#", type: "outline" },
        ],
      },
    },
    {
      id: 4,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGO0n3SXivoqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726058061233?e=1745452800&v=beta&t=_zssM6E55rz4m0T55v0qVVPMh2h9JD1-LImWYZwIZgk",

      alt: "User 30",
      name: "Hussein Sadiq Elged",
      time: "Today at 12:00 PM",
      call: "Call Mr.Customer",
      extra: {
        actions: [
          { label: "Show employee profile", link: "#", type: "primary" },
          { label: "Show lead details", link: "#", type: "outline" },
        ],
      },
    },
    {
      id: 5,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQF2_125chR2Tw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720724982566?e=1745452800&v=beta&t=gJSqYxcxrahL87hQyQ8zgxrVeYSP4-gPa-nlg06w7Ak",
      alt: "User 33",
      name: "Ahmed Attia",
      time: "Today at 05:00 PM",
      call: "Call Mr.Customer",
      extra: {
        actions: [
          { label: "Show employee profile", link: "#", type: "primary" },
          { label: "Show lead details", link: "#", type: "outline" },
        ],
      },
    },
  ];

  return (
    // col-xl-4 flex
    <div className="LatestEmployeeActivities h-full">
      <div className="flex-1 bg-white shadow rounded h-full">
        {/* Header */}

        <h5 className="p-4 border-b text-lg font-semibold mb-3">
          Latest Employee Activities
        </h5>

        {/* Card Body */}
        {notifications?.map((notification, index) => (
          <div className={`px-4 `} key={index}>
            <div key={notification?.id} className={`flex items-start mb-4`}>
              <div className="flex gap-4 flex-1">
                <Link to="/" className="flex-shrink-0">
                  <img
                    src={notification?.image}
                    alt={notification?.alt}
                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                  />
                </Link>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h6 className="text-sm font-medium truncate mb-1 font-bold">
                        {notification?.name}
                      </h6>

                      <p className="text-sm">{notification?.call}</p>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      {notification?.time}
                    </p>
                  </div>

                  <div className="">
                    {notification?.extra && notification?.extra.actions && (
                      <div className="flex items-center">
                        {notification?.extra.actions.map((action, index) => (
                          <Link
                            key={index}
                            to={action?.link}
                            className={
                              action.type === "primary"
                                ? "bg-custom-blue-secundry text-white text-sm px-2 py-1 rounded mr-2"
                                : "border border-custom-blue-secundry text-custom-blue-secundry text-sm px-2 py-1 rounded"
                            }
                          >
                            {action?.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

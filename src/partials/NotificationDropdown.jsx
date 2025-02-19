import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

// بيانات الإشعارات في مصفوفة
const notifications = [
  {
    id: 1,
    link: "/activities",
    avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    alt: "Profile",
    details: "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
    time: "Last Wednesday at 9:42 am",
  },
  {
    id: 2,
    link: "/activities",
    avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    alt: "Profile",
    details: "Denise Nedry replied to Anna Srzand",
    subDetails:
      "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
    time: "Last Wednesday at 9:42 am",
  },
  {
    id: 3,
    link: "/activities",
    avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    alt: "Profile",
    details:
      "John Hammond attached a file to Isla Nublar SOC2 compliance report",
    pdf: {
      icon: "ti ti-chart-pie", // تأكد من تحميل مكتبة الأيقونات المناسبة
      filename: "EY_review.pdf",
      size: "2mb",
    },
    time: "Last Wednesday at 9:42 am",
  },
];

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // تغيير حالة القائمة
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-fit">
      {/* أيقونة الإشعارات مع البادج */}
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 focus:outline-none"
      >
        <IoIosNotifications />
        <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full px-2">
          13
        </span>
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-10">
          <div className="px-4 py-3 border-b">
            <h4 className="text-lg font-semibold">Notifications</h4>
          </div>
          <div className="max-h-60 overflow-y-auto">
            <ul className="divide-y">
              {notifications.map((item) => (
                <li key={item.id} className="p-4 hover:bg-gray-100">
                  <a href={item.link} className="flex">
                    <div className="flex-shrink-0 relative">
                      <img
                        src={item.avatar}
                        alt={item.alt}
                        className="w-10 h-10 rounded-full"
                      />
                      {/* إذا أردت إضافة بادج صغير على الصورة يمكن تفعيل الكود أدناه */}
                      {/* <span className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-3 h-3"></span> */}
                    </div>
                    <div className="ml-3 flex-grow">
                      <p className="text-sm text-gray-700">{item.details}</p>
                      {item.subDetails && (
                        <p className="text-xs text-gray-500 mt-1">
                          {item.subDetails}
                        </p>
                      )}
                      {item.pdf && (
                        <div className="flex items-center mt-1">
                          <i
                            className={`${item.pdf.icon} text-blue-500 mr-1`}
                          ></i>
                          <p className="text-xs text-gray-600">
                            {item.pdf.filename} ({item.pdf.size})
                          </p>
                        </div>
                      )}
                      <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 py-3 border-t flex justify-between">
            <a href="/activities" className="text-blue-500 text-sm">
              View all
            </a>
            <button className="text-blue-500 text-sm focus:outline-none">
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;

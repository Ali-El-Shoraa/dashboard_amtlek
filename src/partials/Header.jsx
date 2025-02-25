import { memo, useState } from "react";

import UserMenu from "../components/DropdownProfile";
import NotificationDropdown from "./NotificationDropdown";
import TooltipComponent from "../pages/Dashboard/components/TooltipComponent";
import { LuMessageCircleMore } from "react-icons/lu";
import { LuListMinus } from "react-icons/lu";
import { LuMessageSquareText } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import { LuShieldAlert } from "react-icons/lu";
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";

const iconItems = [
  {
    id: 1,
    link: "https://dashboard.amtalek.com/en/amtalek/system-logs",
    icon: <LuMessageCircleMore />, // تأكد من تضمين مكتبة Font Awesome أو المكتبة التي تستخدمها
    iconSize: "text-xl", // يمكنك تعديل حجم الأيقونة باستخدام Tailwind
    text: "System logs",
  },
  {
    id: 2,
    link: "https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender",
    icon: <LuListMinus size={19} />,
    iconSize: "text-lg",
    text: "Tasks",
  },
  {
    id: 3,
    link: "#",
    icon: <LuMessageSquareText size={19} />,
    iconSize: "text-xl",
    text: "Email Subscriptions",
    badge: 20, // رقم الإشعارات إن وجد
  },
  {
    id: 4,
    link: "#",
    icon: <LuStar size={19} />,
    iconSize: "text-lg",
    text: "User Evaluations",
    badge: 0,
  },
  {
    id: 5,
    link: "#",
    icon: <LuShieldAlert size={19} />,
    iconSize: "text-xl",
    text: "Property requests",
    badge: 0,
  },
  {
    id: 6,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Addons requests",
    badge: 0,
  },
  {
    id: 7,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Packages requests",
    badge: 0,
  },
  {
    id: 8,
    link: "#",
    icon: <FaRegCommentDots size={19} />,
    iconSize: "text-xl",
    text: "Property Comments",
    badge: 0,
  },
  {
    id: 1,
    link: "https://dashboard.amtalek.com/en/amtalek/system-logs",
    icon: <LuMessageCircleMore />, // تأكد من تضمين مكتبة Font Awesome أو المكتبة التي تستخدمها
    iconSize: "text-xl", // يمكنك تعديل حجم الأيقونة باستخدام Tailwind
    text: "System logs",
  },
  {
    id: 2,
    link: "https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender",
    icon: <LuListMinus size={19} />,
    iconSize: "text-lg",
    text: "Tasks",
  },
  {
    id: 3,
    link: "#",
    icon: <LuMessageSquareText size={19} />,
    iconSize: "text-xl",
    text: "Email Subscriptions",
    badge: 20, // رقم الإشعارات إن وجد
  },
  {
    id: 4,
    link: "#",
    icon: <LuStar size={19} />,
    iconSize: "text-lg",
    text: "User Evaluations",
    badge: 0,
  },
  {
    id: 5,
    link: "#",
    icon: <LuShieldAlert size={19} />,
    iconSize: "text-xl",
    text: "Property requests",
    badge: 0,
  },
  {
    id: 6,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Addons requests",
    badge: 0,
  },
  {
    id: 7,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Packages requests",
    badge: 0,
  },
  {
    id: 8,
    link: "#",
    icon: <FaRegCommentDots size={19} />,
    iconSize: "text-xl",
    text: "Property Comments",
    badge: 0,
  },
];

function Header({ sidebarOpen, setSidebarOpen, variant = "default" }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 ${
        variant === "v2" || variant === "v3"
          ? "before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10"
          : "max-lg:shadow-xs lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90"
      } ${variant === "v2" ? "dark:before:bg-gray-800" : ""} ${
        variant === "v3" ? "dark:before:bg-gray-900" : ""
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-16 ${
            variant === "v2" || variant === "v3"
              ? ""
              : "lg:border-b border-gray-200 dark:border-gray-700/60"
          }`}
        >
          {/* Header: Left side */}
          <div className="flex">{/* Hamburger button */}</div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div className="flex gap-4">
              <TooltipComponent />
            </div>

            {/* <NotificationDropdown /> */}
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" />
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);

{
  /* <button
                className={`w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ml-3 ${
                  searchModalOpen && "bg-gray-200 dark:bg-gray-800"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                aria-controls="search-modal"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="fill-current text-gray-500/80 dark:text-gray-400/80"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z" />
                  <path d="m13.314 11.9 2.393 2.393a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414Z" />
                </svg>
              </button> */
}
{
  /* <SearchModal
                id="search-modal"
                searchId="search"
                modalOpen={searchModalOpen}
                setModalOpen={setSearchModalOpen}
              />
            </div> */
}
{
  /* // <Notifications align="right" />
            // <Help align="right" />
            // <ThemeToggle />
            // {/*  Divider */
}
{
  /*// <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" />
            // <UserMenu align="right" /> */
}

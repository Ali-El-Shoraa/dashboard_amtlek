import { memo, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { LuListMinus } from "react-icons/lu";
import { LuMessageSquareText } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import { LuShieldAlert } from "react-icons/lu";
import { MdAddchart } from "react-icons/md";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    link: "https://dashboard.amtalek.com/en/amtalek/system-logs",
    icon: <LuMessageCircleMore />, // تأكد من تضمين مكتبة Font Awesome أو المكتبة التي تستخدمها
    iconSize: "text-xl", // يمكنك تعديل حجم الأيقونة باستخدام Tailwind
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    text: "System logs",
  },
  {
    id: 2,
    link: "https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender",
    icon: <LuListMinus size={19} />,
    iconSize: "text-lg",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    text: "Tasks",
  },
  {
    id: 3,
    link: "#",
    icon: <LuMessageSquareText size={19} />,
    iconSize: "text-xl",
    text: "Email Subscriptions",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 20, // رقم الإشعارات إن وجد
  },
  {
    id: 4,
    link: "#",
    icon: <LuStar size={19} />,
    iconSize: "text-lg",
    text: "User Evaluations",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 5,
    link: "#",
    icon: <LuShieldAlert size={19} />,
    iconSize: "text-xl",
    text: "Property requests",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 6,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Addons requests",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 7,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Packages requests",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 8,
    link: "#",
    icon: <FaRegCommentDots size={19} />,
    iconSize: "text-xl",
    text: "Property Comments",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 1,
    link: "https://dashboard.amtalek.com/en/amtalek/system-logs",
    icon: <LuMessageCircleMore />, // تأكد من تضمين مكتبة Font Awesome أو المكتبة التي تستخدمها
    iconSize: "text-xl", // يمكنك تعديل حجم الأيقونة باستخدام Tailwind
    text: "System logs",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 2,
    link: "https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender",
    icon: <LuListMinus size={19} />,
    iconSize: "text-lg",
    text: "Tasks",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 3,
    link: "#",
    icon: <LuMessageSquareText size={19} />,
    iconSize: "text-xl",
    text: "Email Subscriptions",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 20, // رقم الإشعارات إن وجد
  },
  {
    id: 4,
    link: "#",
    icon: <LuStar size={19} />,
    iconSize: "text-lg",
    text: "User Evaluations",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 5,
    link: "#",
    icon: <LuShieldAlert size={19} />,
    iconSize: "text-xl",
    text: "Property requests",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 6,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Addons requests",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 7,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Packages requests",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  {
    id: 8,
    link: "#",
    icon: <FaRegCommentDots size={19} />,
    iconSize: "text-xl",
    text: "Property Comments",
    background: "#E0F5D7",
    backgroundHover: "#00918E",
    badge: 0,
  },
  // يمكنك إضافة المزيد من العناصر هنا
];

const NavItem = ({ item }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="relative">
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={item.link}
        className="block transition-colors duration-300 rounded p-4"
        style={{
          background: isHovered ? item.backgroundHover : item.background,
        }}
      >
        {item.icon}
        <span className="absolute text-[9px] bottom-1/2 -translate-y-1/2 left-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-[2px]">
          {item.badge}
        </span>
      </Link>

      {showTooltip && (
        <div className="absolute left-0 translate-x-[-46%] w-max z-10 px-3 py-2 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700 top-full mt-2">
          {item.text}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-3 h-3 bg-gray-900 rotate-45 dark:bg-gray-700"></div>
        </div>
      )}
    </li>
  );
};

export default memo(function TooltipComponent({ content, tooltip, badge }) {
  return (
    <div className="relative">
      {/* <button
        type="button"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        // bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-5
        className="text-black relative font-bold rounded-lg text-sm text-center"
      >
        {content}
        <span className="absolute text-[9px] bottom-1/2 -translate-y-1/2 left-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-[2px]">
          {badge}
        </span>
      </button> */}
      <ul className="flex space-x-2">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
});

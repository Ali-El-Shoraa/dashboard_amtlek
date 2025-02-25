import { memo, useState } from "react";
import { IoIosNotifications, IoMdAddCircle } from "react-icons/io";
import {
  FaBriefcase,
  FaComments,
  FaFingerprint,
  FaRegClock,
  FaRegCommentDots,
  FaRegNewspaper,
  FaUsers,
} from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { LuListMinus } from "react-icons/lu";
import { LuMessageSquareText } from "react-icons/lu";
import { LuStar } from "react-icons/lu";
import { LuShieldAlert } from "react-icons/lu";
import { MdAddchart, MdOutlineRealEstateAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoPackageDependents } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { FiRefreshCcw } from "react-icons/fi";
const navItems = [
  {
    id: 1,
    link: "https://dashboard.amtalek.com/en/amtalek/system-logs",
    icon: <FiRefreshCcw />, // تأكد من تضمين مكتبة Font Awesome أو المكتبة التي تستخدمها
    iconSize: "text-xl", // يمكنك تعديل حجم الأيقونة باستخدام Tailwind
    background: "bg-[#fd3995ba]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#fd3995]",
    backgroundTootlip: "bg-[#fd3995]",
    text: "Refresh",
  },

  {
    id: 10,
    link: "https://dashboard.amtalek.com/en/amtalek/system-logs",
    icon: <IoMdAddCircle />, // تأكد من تضمين مكتبة Font Awesome أو المكتبة التي تستخدمها
    iconSize: "text-xl", // يمكنك تعديل حجم الأيقونة باستخدام Tailwind
    text: "Quick Add",
    background: "bg-[#ff7f50ab]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#FF7F50]",
    backgroundTootlip: "bg-[#FF7F50]",
    // badge: 20,
  },
  {
    id: 12,
    link: "https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender",
    icon: <FaFingerprint size={19} />,
    iconSize: "text-lg",
    text: "System Logs",
    background: "bg-[#999999]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#454545]",
    backgroundTootlip: "bg-[#454545]",
    // badge: 20,
  },
  {
    id: 13,
    link: "/calender",
    icon: <SlCalender size={19} />,
    iconSize: "text-xl",
    text: "Calender",
    background: "bg-[#FF00FF]",
    //   notifications: [
    //     {
    //       id: 1,
    //       link: "/activities",
    //       avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    //       alt: "Profile",
    //       details:
    //         "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
    //       time: "Last Wednesday at 9:42 am",
    //     },
    //     {
    //       id: 2,
    //       link: "/activities",
    //       avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    //       alt: "Profile",
    //       details: "Denise Nedry replied to Anna Srzand",
    //       subDetails:
    //         "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
    //       time: "Last Wednesday at 9:42 am",
    //     },
    //     {
    //       id: 4,
    //       link: "/activities",
    //       avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    //       alt: "Profile",
    //       details: "Denise Nedry replied to Anna Srzand",
    //       subDetails:
    //         "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
    //       time: "Last Wednesday at 9:42 am",
    //     },
    //     {
    //       id: 5,
    //       link: "/activities",
    //       avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    //       alt: "Profile",
    //       details: "Denise Nedry replied to Anna Srzand",
    //       subDetails:
    //         "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
    //       time: "Last Wednesday at 9:42 am",
    //     },
    //     {
    //       id: 3,
    //       link: "/activities",
    //       avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
    //       alt: "Profile",
    //       details:
    //         "John Hammond attached a file to Isla Nublar SOC2 compliance report",
    //       pdf: {
    //         icon: "ti ti-chart-pie", // تأكد من تحميل مكتبة الأيقونات المناسبة
    //         filename: "EY_review.pdf",
    //         size: "2mb",
    //       },
    //       time: "Last Wednesday at 9:42 am",
    //     },
    //   ],
    backgroundHover: "hover:bg-[#800080]",
    backgroundTootlip: "bg-[#800080]",
    // badge: 20, // رقم الإشعارات إن وجد
  },

  {
    id: 4,
    link: "#",
    icon: <FaBriefcase size={19} />,
    iconSize: "text-lg",
    text: "Applied jobs",
    background: "bg-[#03c95ac7]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#03C95A]",
    backgroundTootlip: "bg-[#03C95A]",
    badge: 20,
  },

  {
    id: 7,
    link: "#",
    icon: <FaRegClock size={19} />,
    iconSize: "text-xl",
    text: "Appointments",
    background: "bg-[#1b84ffc7]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#1B84FF]",
    backgroundTootlip: "bg-[#1B84FF]",
    badge: 20,
  },
  {
    id: 6,
    link: "#",
    icon: <FaRegNewspaper size={19} />,
    iconSize: "text-xl",
    text: "Advertisments",
    background: "bg-[#fad7a0] !text-black",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#f9e79f]",
    backgroundTootlip: "bg-[#f9e79f] !text-black",
    badge: 20,
  },
  {
    id: 5,
    link: "#",
    icon: <FaUsers size={19} />,
    iconSize: "text-xl",
    text: "Leads",
    background: "bg-[#ab47bcc9]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#AB47BC]",
    backgroundTootlip: "bg-[#AB47BC]",
    badge: 20,
  },
  {
    id: 8,
    link: "#",
    icon: <FaRegCommentDots size={19} />,
    iconSize: "text-xl",
    text: "Property Comments",
    background: "bg-[#3b7080c9]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#3B7080]",
    backgroundTootlip: "bg-[#3B7080]",
    badge: 20,
  },
  {
    id: 17,
    link: "#",
    icon: <GoPackageDependents size={19} />,
    iconSize: "text-xl",
    text: "Packages requests",
    background: "bg-[#d4e6f1]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#a9cce3]",
    backgroundTootlip: "bg-[#a9cce3]",
    badge: 20,
  },
  {
    id: 16,
    link: "#",
    icon: <MdAddchart size={19} />,
    iconSize: "text-xl",
    text: "Addons requests",
    background: "bg-[#abebc6]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#82e0aa]",
    backgroundTootlip: "bg-[#82e0aa]",
    badge: 20,
  },
  {
    id: 15,
    link: "#",
    icon: <MdOutlineRealEstateAgent size={19} />,
    iconSize: "text-xl",
    text: "Property requests",
    background: "bg-[#2e86c1]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#2874a6]",
    backgroundTootlip: "bg-[#2874a6]",
    badge: 20,
  },
  {
    id: 14,
    link: "#",
    icon: <LuStar size={19} />,
    iconSize: "text-lg",
    text: "User Evaluations",
    background: "bg-[#900c3fcf]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#900C3F]",
    backgroundTootlip: "bg-[#900C3F]",
    badge: 20,
  },
  {
    id: 3,
    link: "#",
    icon: <LuMessageSquareText size={19} />,
    iconSize: "text-xl",
    text: "Email Subscriptions",
    background: "bg-[#3b7080ba]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#3B7080]",
    backgroundTootlip: "bg-[#3B7080]",
    badge: 20, // رقم الإشعارات إن وجد
  },
  {
    id: 2,
    link: "https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender",
    icon: <LuListMinus size={19} />,
    iconSize: "text-lg",
    background: "bg-[#fad7a0]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#f8c471]",
    backgroundTootlip: "bg-[#f8c471]",
    text: "Tasks",
  },
  {
    id: 18,
    link: "#",
    icon: <FaComments size={19} />,
    iconSize: "text-xl",
    text: "Messages",
    background: "bg-[#d7bde2]",
    notifications: [
      {
        id: 1,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details:
          "Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report",
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
        id: 4,
        link: "/activities",
        avatar: "https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg",
        alt: "Profile",
        details: "Denise Nedry replied to Anna Srzand",
        subDetails:
          "“Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty. So, some minor systems may go on and off for a while.”",
        time: "Last Wednesday at 9:42 am",
      },
      {
        id: 5,
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
    ],
    backgroundHover: "hover:bg-[#c39bd3]",
    backgroundTootlip: "bg-[#c39bd3]",
    badge: 20,
  },

  // يمكنك إضافة المزيد من العناصر هنا
];

const NavItem = ({ item, activeDropdown, setActiveDropdown }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isOpen = activeDropdown === item.id;

  const toggleDropdown = (e) => {
    e.preventDefault();
    // إذا كان العنصر مفتوحًا نقوم بإغلاقه وإلا نفتح العنصر الحالي ونغلق غيره
    setActiveDropdown(isOpen ? null : item.id);
  };

  return (
    <li className="relative">
      <div
        className=""
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={toggleDropdown}
      >
        <Link
          to={item?.link}
          className={`block transition-colors duration-300 text-white rounded p-4 ${item?.background} ${item?.backgroundHover}`}
        >
          {item?.icon}

          {Boolean(item?.badge) && (
            <span className="absolute text-[9px] bottom-1/2 -translate-y-1/2 left-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-[2px]">
              {item?.badge}
            </span>
          )}
        </Link>
      </div>

      {showTooltip && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-max z-10 px-3 py-2 text-sm text-white transition-opacity duration-300 rounded-lg shadow-xs top-full mt-2 ${item?.backgroundTootlip}`}
        >
          {item?.text}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 -top-1 w-3 h-3 rotate-45 ${item?.backgroundTootlip}`}
          ></div>
        </div>
      )}

      <div className="relative w-fit">
        {isOpen && item?.notifications && (
          <div className="absolute right-0 mt-2 p-2.5 w-[450px] h-[500px] bg-white border rounded shadow-lg z-10 transform origin-top-right transition-all duration-300">
            <div className="px-4 py-3 border-b">
              <h4 className="text-lg font-semibold">{item?.text}</h4>
            </div>
            <div className="overflow-y-auto h-4/5">
              <ul className="divide-y">
                {item?.notifications?.map((obj) => (
                  <li key={obj.id} className="p-4 hover:bg-gray-100">
                    <Link to={obj.link} className="flex">
                      <div className="flex-shrink-0 relative">
                        <img
                          src={obj.avatar}
                          alt={obj.alt}
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="ml-3 flex-grow">
                        <p className="text-sm text-gray-700">{obj.details}</p>
                        {obj.subDetails && (
                          <p className="text-xs text-gray-500 mt-1">
                            {obj.subDetails}
                          </p>
                        )}
                        {obj.pdf && (
                          <div className="flex items-center mt-1">
                            <i
                              className={`${obj.pdf.icon} text-blue-500 mr-1`}
                            ></i>
                            <p className="text-xs text-gray-600">
                              {obj.pdf.filename} ({obj.pdf.size})
                            </p>
                          </div>
                        )}
                        <p className="text-xs text-gray-400 mt-1">{obj.time}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-3 border-t flex justify-between">
              <Link to="/" className="text-blue-500 text-sm">
                View all
              </Link>
              <button className="text-blue-500 text-sm focus:outline-none">
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

//   export default NavItem;
export default memo(function TooltipComponent({ content, tooltip, badge }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <ul className="flex space-x-2">
        {/* .reverse() */}
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        ))}
      </ul>
    </div>
  );
});

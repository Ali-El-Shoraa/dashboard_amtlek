import { memo, useMemo, useState } from "react";

import Header from "../../partials/Header";

import DashboardCard01 from "../../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../../partials/dashboard/DashboardCard02";
import { FaCheck, FaRegEye, FaTimes } from "react-icons/fa";

import CardAccounting from "./components/CardAccounting";
import IncomeAndExpense from "./components/IncomeAndExpense";
import LeadsPipeLineChart from "./components/LeadsPipeLineChart";
import LeadsCurrentStatus from "./components/charts/LeadsCurrentStatus";
import Footer from "../../components/shared/Footer";
import TablesDashboard from "../../components/shared/TablesDashboard";
import EmployeeKpiChart from "../../charts/EmployeeKpiChart";
import BestCountriesChart from "../../charts/BestCountriesChart";
import EmployeeActivitiesChart from "./components/charts/EmployeeActivitiesChart";
// import VendorChart from "./components/charts/VendorChart";
import UsersFromChart from "./components/charts/UsersFromChart";
import Sidebar from "../../components/shared/Sidebar";
import ScheduledMeetingsCard from "./components/ScheduledMeetingsCard";
// import TasksCard from "./components/charts/TasksCard";
import GeneralStatistics from "./components/generalStatistics";
import GenderOfCompanies from "./components/GenderOfCompanies";
import { FaRegUser } from "react-icons/fa";
// import { FaEdit } from "react-icons/fa";

import {
  RiTicket2Line,
  RiSuitcaseLine,
  RiCheckboxCircleLine,
  RiSettings3Line,
  RiHome2Line,
  RiTeamLine,
} from "react-icons/ri";
import { GiTempleGate } from "react-icons/gi";
import { PiReadCvLogoLight } from "react-icons/pi";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import LatestEmployeeActivities from "./components/LatestEmployeeActivities";
import TableLatestEmployeesTasks from "./components/Table/TableLatestEmployeesTasks";
import TaskStatisticsCard from "./components/charts/TaskStatisticsCard";
import TaskProgressStatistics from "./components/charts/TaskProgressStatistics";
import CalenderDasboard from "./components/Calender/CalenderDasboard";
import JobsApplyedAndNotApplyed from "./components/charts/JobsApplyedAndNotApplyed";
import MostPopularJobs from "../../charts/MostPopularJobs";
// import TooltipComponent from "./components/TooltipComponent";
// import TeamScoring from "./components/Table/TeamScoring";
export default memo(function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ********************************************************************** START THIS DATA FOR TABLES **********************************************************************
  const dataOfArrayColumName = [
    {
      Header: "Lead Name",
      accessor: "leadName",
      Cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <img
            src={row.original.leadtImg}
            alt="leadtImg"
            className="w-10 h-10 rounded-full"
          />
          <a
            href={row.original.leadLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <i className="fa fa-user" />
            {row.original.leadName}
          </a>
        </div>
      ),
    },
    {
      Header: "Created at",
      accessor: "createdAt",
    },
    {
      Header: "Agent name",
      accessor: "agentName",
      Cell: ({ row }) => (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img
              src={row.original.agentImg}
              alt="Agent"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <Link
                to={row.original.agentLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {row.original.agentName}
              </Link>
              <Link className="text-sm" to={`tel:${row.original.agentPhone}`}>
                {row.original.agentPhone}
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => {
        // تغيير اللون حسب الحالة
        const bgColor =
          value === "Opened"
            ? "bg-blue-500"
            : value === "Lost"
            ? "bg-red-500"
            : "bg-gray-500";
        return (
          <span className={`${bgColor} px-3 py-1 text-white rounded`}>
            {value}
          </span>
        );
      },
    },
    {
      Header: "Deal cost",
      accessor: "dealCost",
    },
  ];

  const dataOfArrayRowsData = [
    {
      leadName: "Khamis hegazy",
      leadtImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      createdAt: "05-02-2025",
      agentName: "hossam elkholy",
      agentImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      agentPhone: "01550859246",
      status: "Opened",
      dealCost: "0.0 EGP",
      leadLink: "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/965",
      agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
    },
    {
      leadName: "Adham Mohsen",
      leadtImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      agentPhone: "01550859246",
      createdAt: "05-02-2025",
      agentName: "hossam elkholy",
      agentImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      agentPhone: "01550859246",
      status: "Opened",
      dealCost: "0.0 EGP",
      leadLink: "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/962",
      agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
    },
    {
      leadName: "Dina Abdulaah",
      leadtImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      createdAt: "05-02-2025",
      agentName: "hossam elkholy",
      agentImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      agentPhone: "01550859246",
      status: "Lost",
      dealCost: "0.0 EGP",
      leadLink: "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/960",
      agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
    },
    {
      leadName: "Doda Fouad",
      leadtImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      createdAt: "02-02-2025",
      agentName: "hossam elkholy",
      agentImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      agentPhone: "01550859246",
      status: "Opened",
      dealCost: "0.0 EGP",
      leadLink: "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/877",
      agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
    },
    {
      leadName: "Mahmoud Saber",
      leadtImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      createdAt: "02-02-2025",
      agentName: "hossam elkholy",
      agentImg:
        "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
      agentPhone: "01550859246",
      status: "Opened",
      dealCost: "0.0 EGP",
      leadLink: "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/876",
      agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
    },
  ];

  const GeneralStatisticsData = [
    {
      id: 1,
      title: "Amtalek employees",
      count: 98,
      icon: <FaRegUser size={34} />,
    },
    {
      id: 2,
      title: "Leads Expected Won",
      count: "120,000 EGP",
      icon: <RiHome2Line size={34} />,
    },
    {
      id: 3,
      title: "Leads already Won",
      count: "50",
      icon: <RiSettings3Line size={34} />,
    },
    {
      id: 12,
      title: "Leads already lost",
      count: 98,
      icon: <FaRegUser size={34} />,
    },
    {
      id: 4,
      title: "Leads Amtalek",
      count: 566,
      icon: <RiCheckboxCircleLine size={34} />,
    },
    {
      id: 5,
      title: "Featured Properties",
      count: 30,
      icon: <RiTeamLine size={34} />,
    },
    {
      id: 6,
      title: "Normal Properties",
      count: 5,
      icon: <GiTempleGate size={34} />,
    },
    {
      id: 7,
      title: "Users",
      count: 231,
      icon: <RiSuitcaseLine size={34} />,
    },
    {
      id: 8,
      title: "Vendors",
      count: 120,
      icon: <RiTicket2Line size={34} />,
    },
    {
      id: 9,
      title: "Jobs",
      count: 98,
      icon: <PiReadCvLogoLight size={34} />,
    },
    {
      id: 10,
      title: "Applied CV's",
      count: 18,
      icon: <FaFileAlt size={34} />,
    },
    {
      id: 11,
      title: "Total CV's",
      count: 98,
      icon: <FaRegUser size={34} />,
    },
  ];

  // **********************************************************************
  // بيانات الجدول كمصفوفة من الكائنات
  const dataTeamScoring = useMemo(
    () => [
      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },
      // يمكنك إضافة المزيد من الكائنات (الصفوف) هنا

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },

      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        calls: "---",
        meetings: "---",
        newLeads: "---",
        kpiScore: <span className="text-green-500 text-xl">30.00 %</span>,
        commissions: "0.00 EGP",
        penalities: <span className="text-red-500 text-xl">0</span>,
        bonus: <span className="text-red-500 text-xl">0</span>,
        doneTasks: <span className="text-red-500 text-xl">0</span>,
        delayedTasks: <span className="text-red-500 text-xl">0</span>,
        properties: <span className="text-red-500 text-xl">0</span>,
        actions: (
          <Link
            to="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
          >
            <FaRegEye color="white" />
            Show All
          </Link>
        ),
      },
    ],
    []
  );

  // تعريف أعمدة الجدول كمصفوفة من الكائنات
  const columnsTeamScoring = useMemo(
    () => [
      {
        Header: "Agent Name",
        accessor: "agentName",
      },
      {
        Header: "Calls",
        accessor: "calls",
      },
      {
        Header: "Meetings",
        accessor: "meetings",
      },
      {
        Header: "New Leads",
        accessor: "newLeads",
      },
      {
        Header: "KPI Score",
        accessor: "kpiScore",
      },
      {
        Header: "All Commissions",
        accessor: "commissions",
      },
      {
        Header: "Penalities",
        accessor: "penalities",
      },
      {
        Header: "Bonus",
        accessor: "bonus",
      },
      {
        Header: "Done Tasks",
        accessor: "doneTasks",
      },
      {
        Header: "Delayed Tasks",
        accessor: "delayedTasks",
      },
      {
        Header: "Properties",
        accessor: "properties",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );

  // *********************************************************************

  const dataLatestVendors = useMemo(
    () => [
      {
        agentName: (
          <a
            href="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            className="flex items-center"
          >
            <img
              src="https://dmlygcfpc782j.cloudfront.net/media/admins/1719312510.png"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full mr-2"
            />
            Marriot Residences
          </a>
        ),
        manager: "Mohamed Nabih",
        phone: "01550859246",
        added_by: (
          <a
            href="https://dashboard.amtalek.com/en/amtalek/admins/235"
            target="_blank"
            className="flex items-center"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full mr-2"
            />
            Ali El-Shoraa
          </a>
        ),
        created_at: "2-2-2025",

        actions: (
          <div className="flex items-center gap-1">
            <Link
              to="https://dashboard.amtalek.com/en/amtalek/admins/235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
            >
              <FaRegEye color="white" />
              Show All
            </Link>
            {/* 
            <Link
              to="https://dashboard.amtalek.com/en/amtalek/admins/235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center gap-1 bg-custom-blue hover:bg-custom-blue-secundry: text-white px-2 py-1 rounded"
            >
              <FaEdit color="white" />
              Edit
            </Link> */}
          </div>
        ),
      },
      // يمكنك إضافة المزيد من الكائنات (الصفوف) هنا
    ],
    []
  );

  // تعريف أعمدة الجدول كمصفوفة من الكائنات
  const columnsLatestVendors = useMemo(
    () => [
      {
        Header: "Agent Name",
        accessor: "agentName",
      },
      {
        Header: "Manager",
        accessor: "manager",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Added By",
        accessor: "added_by",
      },
      {
        Header: "Created At",
        accessor: "created_at",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );
  // **********************************************************************

  const dataRecentActivities = useMemo(
    () => [
      {
        agentName: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
        manager: "22-2-2025",
        activity:
          "Ali l-Shoraa make Login at date 18-02-2025 at time 10:21:20 AM",
        sector: (
          <h3 className="bg-custom-blue-secundry rounded text-sm text-white p-1 text-center">
            Front-End
          </h3>
        ),
        // actions: "---",
      },
      // يمكنك إضافة المزيد من الكائنات (الصفوف) هنا
    ],
    []
  );

  // تعريف أعمدة الجدول كمصفوفة من الكائنات
  const columnsRecentActivities = useMemo(
    () => [
      {
        Header: "Employee Name",
        accessor: "agentName",
      },
      {
        Header: "Date",
        accessor: "manager",
      },
      {
        Header: "Activity",
        accessor: "activity",
      },
      {
        Header: "Sector",
        accessor: "sector",
      },
      // {
      //   Header: "Actions",
      //   accessor: "actions",
      // },
    ],
    []
  );

  // **********************************************************************

  const dataAttendanceTimeline = useMemo(
    () => [
      {
        employees: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
      },

      {
        employees: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
      },

      {
        employees: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
      },

      {
        employees: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
      },

      {
        employees: (
          <div className="flex items-center gap-3 py-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ"
              alt="Maya Sebaii"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <a
                href="https://dashboard.amtalek.com/en/amtalek/admins/235"
                target="_blank"
                className=""
              >
                Ali El-Shoraa
              </a>
              <a href="" className="text-xs text-gray-400">
                01550859246
              </a>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const br = (index) => {
    return index % 2 === 0 ? (
      <FaCheck className="text-green-500 text-lg" />
    ) : (
      <FaTimes className="text-red-500 text-lg" />
    );
  };

  const yy = Array.from({ length: 30 }).map((_, index) => ({
    Header: index + 1,
    id: `col-${index}`, // معرف فريد لكل عمود
    // على سبيل المثال: لكل عمود، إذا كان الرقم الزوجي نعرض أيقونة صح، وإلا أيقونة خطأ
    Cell: br(index),
  }));

  const columnsmployeesAttendanceTimeline = useMemo(
    () => [
      {
        Header: "Employees",
        accessor: "employees",
      },
      ...yy,
    ],
    []
  );
  // **********************************************************************
  // ********************************************************************** END THIS DATA FOR TABLES **********************************************************************

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  ********************************************************************** START HEADER ********************************************************************** */}
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/*  ********************************************************************** END HEADER ********************************************************************** */}

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto space-y-4">
            {/*  ********************************************************************** START 6 CARDS TOP ********************************************************************** */}

            <div className="space-y-3.5">
              <div className="grid grid-cols-3 gap-4">
                <DashboardCard01 />
                <DashboardCard02 />

                <ScheduledMeetingsCard />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <CardAccounting
                  bg_color_card={`bg-purple-clouds`}
                  title={`Expenses`}
                />
                {/* </div> */}
                <CardAccounting
                  bg_color_card={`bg-custome-green`}
                  title={`Balance`}
                />
                <CardAccounting
                  bg_color_card={`bg-custome-red`}
                  title={`Income`}
                />
              </div>
            </div>

            {/*  ********************************************************************** END 6 CARDS TOP ********************************************************************** */}

            {/*  ********************************************************************** START CHARTS Income And Expense ********************************************************************** */}

            <div className="flex gap-2">
              <div className="w-2/5">
                <IncomeAndExpense title={`Income & Expense in 2025`} />
              </div>

              <div className="w-3/5">
                <IncomeAndExpense
                  viewType="days"
                  title={`Income & Expense in Feb-2025`}
                />
              </div>
            </div>
            {/*  ********************************************************************** END CHARTS Income And Expense ********************************************************************** */}

            <div className="grid grid-cols-4 gap-4">
              {GeneralStatisticsData?.map((obj) => (
                <GeneralStatistics
                  key={obj?.id}
                  title={obj?.title}
                  count={obj?.count}
                  icon={obj.icon}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <div className="w-3/5">
                <LeadsPipeLineChart />
              </div>

              <div className="w-2/5">
                <LeadsCurrentStatus />
              </div>
            </div>

            <div>
              <TablesDashboard
                dataOfArrayRowsData={dataOfArrayRowsData}
                dataOfArrayColumName={dataOfArrayColumName}
              />
            </div>

            <div className="flex gap-2 mb-9">
              <div className="w-2/5">
                <UsersFromChart />
              </div>

              <div className="w-3/5">
                <BestCountriesChart />
              </div>
            </div>

            <div className="flex gap-2 mb-9">
              <div className="w-3/5">
                <EmployeeKpiChart />
              </div>

              <div className="w-2/5">
                <GenderOfCompanies />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2/5">
                <LatestEmployeeActivities />
              </div>

              <div className="w-3/5">
                <EmployeeActivitiesChart />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2/5">
                <JobsApplyedAndNotApplyed />
              </div>

              <div className="w-3/5">
                <MostPopularJobs />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-3/5">
                <TableLatestEmployeesTasks />
              </div>

              <div className="w-2/5">
                <div className="flex flex-col gap-2">
                  <TaskStatisticsCard />
                  <TaskProgressStatistics />
                </div>
              </div>
            </div>

            {/*  ********************************************************************** START CALENDER ********************************************************************** */}

            <div className="">
              <CalenderDasboard />
            </div>

            {/*  ********************************************************************** END CALENDER ********************************************************************** */}

            {/*  ********************************************************************** START LATSTE TABLE ********************************************************************** */}

            <div>
              <TablesDashboard
                title="Employees Attendance Timeline"
                dataOfArrayRowsData={dataAttendanceTimeline}
                dataOfArrayColumName={columnsmployeesAttendanceTimeline}
              />
            </div>
            {/* last tables */}

            <div>
              <TablesDashboard
                title="Team Scoring In [ 2/2025 ]"
                dataOfArrayRowsData={dataTeamScoring}
                dataOfArrayColumName={columnsTeamScoring}
              />
            </div>

            <div>
              <TablesDashboard
                title="Latest Vendors"
                dataOfArrayRowsData={dataLatestVendors}
                dataOfArrayColumName={columnsLatestVendors}
              />
            </div>

            <div>
              <TablesDashboard
                title="Recent Activities In [ 12/2/2025 ]"
                dataOfArrayRowsData={dataRecentActivities}
                dataOfArrayColumName={columnsRecentActivities}
              />
            </div>

            {/*  ********************************************************************** END LATSTE TABLE ********************************************************************** */}
          </div>
        </main>

        {/*  ********************************************************************** START FOOTER ********************************************************************** */}

        {/* start footer */}
        <Footer />

        {/*  ********************************************************************** END FOOTER ********************************************************************** */}
      </div>
    </div>
  );
});

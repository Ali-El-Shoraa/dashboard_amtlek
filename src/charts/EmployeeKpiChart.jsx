import { useState } from "react";
import Chart from "react-apexcharts";
import { FaCalendarAlt } from "react-icons/fa";

const EmployeeKpiChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // بيانات المخطط
  const series = [
    {
      name: "Performance",
      data: [160, 100, 75, 80, 120, 90, 140, 50, 30],
    },
  ];

  // إعدادات المخطط
  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    xaxis: {
      categories: [
        "Ali El-Shoraa",
        "Mostafa",
        "Hossam",
        "Hussine",
        "Attia",
        "Yahia",
        "Ali",
        "Eman",
        "Nada",
      ],
    },
    tooltip: {
      x: {
        format: "MMM",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.65,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    colors: ["#03c95a"],
  };

  return (
    <div className="w-full flex h-full">
      <div className="bg-white rounded-lg shadow p-4 flex flex-col w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h5 className="text-xl font-semibold">Employees KPI score</h5>
        </div>
        {/* Performance Info */}
        <div className="mb-4">
          <div className="bg-gray-100 flex items-center rounded p-2">
            <h3 className="mr-2 text-2xl font-bold">98%</h3>
            <span className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs mr-1">
              12%
            </span>
            <span className="text-sm">vs last years</span>
          </div>
        </div>
        {/* Chart */}
        <div>
          <Chart options={options} series={series} type="area" height={288} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeKpiChart;

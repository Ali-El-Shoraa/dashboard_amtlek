import { useState } from "react";
import Chart from "react-apexcharts";

export default function MostPopularJobs() {
  //   const [selectedYear, setSelectedYear] = useState("2024");
  //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // بيانات المخطط
  const series = [
    {
      name: "Performance",
      data: [160, 100, 75, 80, 120, 140, 50],
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
        "Laravel Back-end",
        "React.js Front-end",
        "Angular Front-end",
        "Vue Front-end",
        "React Native Mobile-app",
        "Next.js Front-end",
        "Ui/Ux Design",
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
          <h5 className="text-xl font-semibold">Most jobs</h5>
        </div>
        {/* Performance Info */}

        {/* Chart */}
        <div>
          <Chart options={options} series={series} type="area" height={288} />
        </div>
      </div>
    </div>
  );
}

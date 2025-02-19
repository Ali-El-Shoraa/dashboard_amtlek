import React, { memo } from "react";
import Chart from "react-apexcharts";

const VendorChart = () => {
  const options = {
    chart: {
      id: "vendors_best_props_and_projects",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "5%", // تعديل عرض الأعمدة لتصبح رفيعة جداً
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#F59E0B", "#3B82F6"], // ألوان warning و primary
    xaxis: {
      categories: ["Vendor A", "Vendor B", "Vendor C"],
      labels: {
        style: {
          colors: "#373d3f",
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
        style: {
          color: "#373d3f",
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 0, // خطوط شبكة صلبة
    },
    tooltip: {
      theme: "light",
    },
  };

  const series = [
    {
      name: "Properties",
      data: [40, 55, 30],
    },
    {
      name: "Projects",
      data: [20, 35, 25],
    },
  ];

  return (
    <div className="w-full bg-white shadow rounded p-4 h-full">
      {/* <div className=" "> */}
      <div className="h-full">
        <h5 className="text-lg font-bold mb-4">
          Vendor ( Properties and Projects )
        </h5>
        <div className="flex justify-center">
          <div className="w-full">
            <Chart options={options} series={series} type="bar" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default memo(VendorChart);

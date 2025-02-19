import React, { memo } from "react";
import Chart from "react-apexcharts";

const LeadsPipeLineChart = () => {
  // تعريف خيارات المخطط والبيانات
  const options = {
    series: [
      {
        name: "Funnel Series",
        data: [1380, 1100, 990, 880, 740, 548, 330, 200],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      dropShadow: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: "80%",
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    // title: {
    //   text: "Leads Pipe Line Chart",
    //   align: "middle",
    // },
    xaxis: {
      categories: [
        "Sourced",
        "Screened",
        "Assessed",
        "HR Interview",
        "Technical",
        "Verify",
        "Offered",
        "Hired",
      ],
    },
    legend: {
      show: false,
    },
  };

  return (
    // <div className="flex justify-center items-center p-4 bg-gray-100 drop-shadow-lg">
    <div className="h-full p-5 rounded bg-white shadow">
      {/* <div className="bg-white shadow rounded p-4 w-full max-w-3xl"> */}
      <h1 className="text-xl font-bold text-center mb-2">
        Leads Pipe Line Chart
      </h1>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
    // </div>
  );
};

export default memo(LeadsPipeLineChart);

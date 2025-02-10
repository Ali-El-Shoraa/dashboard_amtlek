// import React from "react";
// import { Link } from "react-router-dom";
// import LineChart from "../../charts/LineChart01";
// import { chartAreaGradient } from "../../charts/ChartjsConfig";
// import EditMenu from "../../components/DropdownEditMenu";

// Import utilities
// import { adjustColorOpacity, getCssVariable } from "../../utils/Utils";

function DashboardCard02() {
  // const chartData = {
  //   labels: [
  //     "12-01-2022",
  //     "01-01-2023",
  //     "02-01-2023",
  //     "03-01-2023",
  //     "04-01-2023",
  //     "05-01-2023",
  //     "06-01-2023",
  //     "07-01-2023",
  //     "08-01-2023",
  //     "09-01-2023",
  //     "10-01-2023",
  //     "11-01-2023",
  //     "12-01-2023",
  //     "01-01-2024",
  //     "02-01-2024",
  //     "03-01-2024",
  //     "04-01-2024",
  //     "05-01-2024",
  //     "06-01-2024",
  //     "07-01-2024",
  //     "08-01-2024",
  //     "09-01-2024",
  //     "10-01-2024",
  //     "11-01-2024",
  //     "12-01-2024",
  //     "01-01-2025",
  //   ],
  //   datasets: [
  //     // Indigo line
  //     {
  //       data: [
  //         622, 622, 426, 471, 365, 365, 238, 324, 288, 206, 324, 324, 500, 409,
  //         409, 273, 232, 273, 500, 570, 767, 808, 685, 767, 685, 685,
  //       ],
  //       fill: true,
  //       backgroundColor: function (context) {
  //         const chart = context.chart;
  //         const { ctx, chartArea } = chart;
  //         return chartAreaGradient(ctx, chartArea, [
  //           {
  //             stop: 0,
  //             color: adjustColorOpacity(
  //               getCssVariable("--color-violet-500"),
  //               0
  //             ),
  //           },
  //           {
  //             stop: 1,
  //             color: adjustColorOpacity(
  //               getCssVariable("--color-violet-500"),
  //               0.2
  //             ),
  //           },
  //         ]);
  //       },
  //       borderColor: getCssVariable("--color-violet-500"),
  //       borderWidth: 2,
  //       pointRadius: 0,
  //       pointHoverRadius: 3,
  //       pointBackgroundColor: getCssVariable("--color-violet-500"),
  //       pointHoverBackgroundColor: getCssVariable("--color-violet-500"),
  //       pointBorderWidth: 0,
  //       pointHoverBorderWidth: 0,
  //       clip: 20,
  //       tension: 0.2,
  //     },
  //     // Gray line
  //     {
  //       data: [
  //         732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
  //         154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
  //       ],
  //       borderColor: adjustColorOpacity(
  //         getCssVariable("--color-gray-500"),
  //         0.25
  //       ),
  //       borderWidth: 2,
  //       pointRadius: 0,
  //       pointHoverRadius: 3,
  //       pointBackgroundColor: adjustColorOpacity(
  //         getCssVariable("--color-gray-500"),
  //         0.25
  //       ),
  //       pointHoverBackgroundColor: adjustColorOpacity(
  //         getCssVariable("--color-gray-500"),
  //         0.25
  //       ),
  //       pointBorderWidth: 0,
  //       pointHoverBorderWidth: 0,
  //       clip: 20,
  //       tension: 0.2,
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-col h-36 p-2.5 bg-secundary dark:bg-gray-800 shadow-xs rounded-xl">
      <div className="">
        <div className="flex items-center justify-start gap-2">
          <img
            src="https://dmlygcfpc782j.cloudfront.net/medal-amtalek.png"
            loading="lazy"
            className="rounded-full w-120 h-120 border-2 border-white"
          />

          <div className="text-white font-bold text-sm">
            <p>Top sales agent in Feb 2025 </p>
            <p>0 CLOSED DEALS = 0.00 EGP </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;

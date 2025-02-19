// import { memo } from "react";
// import Chart from "react-apexcharts";

// export default memo(function EmployeeActivitiesChart() {
//   const options = {
//     chart: {
//       type: "bar",
//       height: 350,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "55%",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     xaxis: {
//       categories: ["Ali El-Shoraa", "Hossam elkholy", "Mohamed Ragab"],
//     },

//     colors: ["#f16060"],
//     tooltip: {
//       enabled: true,
//     },
//   };

//   const series = [
//     {
//       name: "LeadxActivities",
//       data: [30, 9, 3],
//     },
//   ];

//   return (
//     // <div className="card">
//     <div className="bg-white p-4 shadow rounded h-full">
//       <h5 className="text-lg font-bold mb-4">
//         Feb - 2025, Employee Activities
//       </h5>
//       <div className="container">
//         <div className="row">
//           <div id="chart">
//             <Chart
//               options={options}
//               series={series}
//               type="bar"
//               height={350}
//               width="100%"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// });

import { memo } from "react";
import Chart from "react-apexcharts";

export default memo(function EmployeeActivitiesChart() {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Ali El-Shoraa", "Hossam elkholy", "Mohamed Ragab"],
    },
    colors: ["#f16060", "#f7a35c", "#90ed7d"], // ألوان مختلفة لكل سلسلة
    tooltip: {
      enabled: true,
    },
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "Call",
      data: [30, 9, 3],
    },
    {
      name: "Meeting",
      data: [15, 20, 10],
    },
    {
      name: "Finish Lead",
      data: [10, 8, 2],
    },
  ];

  return (
    <div className="bg-white p-4 shadow rounded h-full">
      <h5 className="text-lg font-bold mb-4">
        Feb - 2025, Employee Activities
      </h5>
      <div className="container">
        <div className="row">
          <div id="chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              // height={350}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

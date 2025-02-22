import { memo } from "react";
import Chart from "react-apexcharts";

export default memo(function UsersFromChart() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Web", "IOS", "Android"],
    colors: ["#10B981", "#3B82F6", "#F59E0B"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "#373d3f",
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
      },
    },
    series: [90, 30, 20],
    plotOptions: {
      pie: {
        startAngle: -180,
        endAngle: 180,
        offsetY: 10,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Users",
              formatter: function (w) {
                // يحسب مجموع القيم الموجودة في series
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
  };

  return (
    // max-w-md
    <div className="mx-auto h-full p-4 bg-white shadow rounded">
      <h5 className="text-lg font-bold mb-4 text-center">Users Form</h5>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        height={290}
      />
    </div>
  );
});

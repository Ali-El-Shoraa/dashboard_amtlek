import { memo } from "react";
import Chart from "react-apexcharts";

export default memo(function JobsApplyedAndNotApplyed() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Jobs have CVs", "Jobs not have CVs"],
    colors: ["#10B981", "#ff5656"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "#373d3f",
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
      },
    },
    series: [90, 30],
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
              label: "Total Job's",
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
      <h5 className="text-lg font-bold mb-4 text-center">
        Jobs applied CVs statistics
      </h5>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        height={290}
      />
    </div>
  );
});

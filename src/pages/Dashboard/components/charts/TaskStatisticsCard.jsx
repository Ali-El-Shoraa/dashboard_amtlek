import Chart from "react-apexcharts";

function TaskStatisticsCard() {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["High", "Medium", "Low"],
    colors: ["#ff5656", "#f0bb33", "#3ec972"],
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
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Tasks",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
      width: 4, // سمك الحواف
      colors: ["#ffffff"], // لون الحواف
    },
  };

  return (
    // max-w-md
    <div className="h-full p-4 bg-white shadow rounded">
      <h5 className="text-lg font-bold mb-4 text-center">
        Task Priority Statistics
      </h5>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        height={290}
      />
    </div>
  );
}

export default TaskStatisticsCard;

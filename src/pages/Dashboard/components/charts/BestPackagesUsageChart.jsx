import { memo } from "react";
import Chart from "react-apexcharts";

const BestPackagesUsageChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },

    colors: ["#10B981", "#EF4444"],
    legend: { show: false },
  };

  const series = [
    { name: "Income", data: [400, 500, 450, 600, 700, 650, 800] },
    { name: "Expenses", data: [300, 400, 350, 450, 500, 480, 550] },
  ];

  return (
    <div className="bg-white shadow rounded h-2xs">
      <div className="p-4">
        {/* إضافة العنوان هنا */}
        <h3 className="text-xl font-bold mb-4">Best Packages Usage</h3>
        <div id="sales-income">
          <Chart
            options={options}
            series={series}
            type="bar"
            height={290}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(BestPackagesUsageChart);

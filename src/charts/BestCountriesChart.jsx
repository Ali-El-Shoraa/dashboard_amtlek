import { memo } from "react";
import Chart from "react-apexcharts";

export default memo(function BestCountriesChart() {
  // إعداد خيارات المخطط
  const options = {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#03c95a", "#ff4560", "#008ffb"], // ألوان مختلفة لكل سلسلة
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      // الفئات تمثل المدن
      categories: [
        "Cairo",
        "Giza",
        "Alexandria",
        "North Coast",
        "Sharqia",
        "Ismailia",
      ],
    },
    yaxis: {
      // تحديد نطاق المحور الرأسي
      min: 0,
      max: 400000,
      labels: {
        formatter: function (value) {
          return value.toLocaleString();
        },
      },
    },
    tooltip: {
      x: {
        format: "MMM yyyy",
      },
      y: {
        formatter: function (value) {
          return value.toLocaleString();
        },
      },
    },
  };

  // بيانات المخطط مع أرقام جديدة (عدد النقاط يساوي عدد الفئات)
  const series = [
    {
      name: "Properties",
      data: [200000, 250000, 300000, 280000, 320000, 350000],
    },
    {
      name: "Jobs",
      data: [150000, 180000, 210000, 200000, 190000, 170000],
    },
    {
      name: "Projects",
      data: [50000, 70000, 90000, 80000, 130000, 180000],
    },
  ];

  return (
    <div className="mx-auto p-4 bg-white shadow rounded w-full h-full">
      {/* عنوان المخطط */}
      <h2 className="text-xl font-bold text-center mb-4">Best Countries</h2>
      <div className="w-full">
        <Chart
          options={options}
          series={series}
          type="area"
          height={290}
          width="100%"
        />
      </div>
    </div>
  );
});

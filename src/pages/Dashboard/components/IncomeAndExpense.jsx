import { memo } from "react";
import Chart from "react-apexcharts";

export default memo(function IncomeAndExpense({ title, viewType = "months" }) {
  // مصفوفة الأيام والشهور
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // تحديد الفئات بناءً على قيمة viewType
  const categories = viewType === "days" ? days : months;

  // بيانات المخطط تعتمد على viewType
  const incomeData =
    viewType === "days"
      ? Array.from({ length: 31 }, (_, i) => 150000 + i * 5000)
      : [
          150000, 180000, 210000, 240000, 300000, 320000, 280000, 260000,
          250000, 230000, 200000, 190000,
        ];

  const expenseData =
    viewType === "days"
      ? Array.from({ length: 31 }, (_, i) => 120000 + i * 4000)
      : [
          120000, 140000, 160000, 190000, 220000, 240000, 210000, 200000,
          190000, 170000, 150000, 130000,
        ];

  const options = {
    chart: {
      type: "area",
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: {
      categories: categories,
      title: { text: viewType === "days" ? "Day of Month" : "Month" },
    },
    yaxis: {
      min: 100000,
      max: 400000,
      labels: {
        formatter: (value) => value.toLocaleString() + ".ok",
      },
    },
    tooltip: {
      x: {
        formatter: (val) =>
          viewType === "days" ? `Day ${val}` : `Month ${val}`,
      },
      y: {
        formatter: (value) => value.toLocaleString(),
      },
    },
  };

  const series = [
    { name: "Income", data: incomeData },
    { name: "Expenses", data: expenseData },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow rounded h-full">
      {/* عنوان المخطط */}
      <h1 className="text-xl font-bold text-center mb-2">{title}</h1>
      {/* بيانات الدخل والمصاريف ونسبة الربح */}
      <h6 className="flex items-center justify-center space-x-2 text-xs mb-4">
        <span>Income:</span>
        <span className="bg-green-500 text-white px-2 py-1 rounded">
          12,322.0 EGP
        </span>
        <span className="font-bold">|</span>
        <span>Expenses:</span>
        <span className="bg-red-500 text-white px-2 py-1 rounded">0.0 EGP</span>
        <span className="font-bold">|</span>
        <span>Profit ratio:</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">100.0%</span>
      </h6>
      <div className="w-full" style={{ minHeight: "465px" }}>
        <Chart
          options={options}
          series={series}
          type="area"
          height={450}
          width="100%"
        />
      </div>
    </div>
  );
});

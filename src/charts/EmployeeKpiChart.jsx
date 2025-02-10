import Chart from "react-apexcharts";

export default function EmployeeKpiChart() {
  // إعداد خيارات المخطط مع بعض الأمثلة
  const options = {
    chart: {
      id: "best_employee_kpi",
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: "#373d3f", // لون الخط لمحاور المخطط
    },
    xaxis: {
      // الفئات تمثل أسماء الموظفين (يمكن تعديلها حسب الحاجة)
      categories: ["Employee 1", "Employee 2", "Employee 3"],
      title: {
        text: "Company Employees",
      },
    },
    yaxis: {
      title: {
        text: "KPI Score",
      },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1E40AF", "#F59E0B"], // ألوان تستخدم ألوان Tailwind (blue-800 و amber-400)
  };

  // بيانات المخطط (يمكن تعديلها حسب البيانات الفعلية)
  const series = [
    {
      name: "KPI Score In %",
      data: [8.33, 12.5, 15.0],
    },
  ];

  return (
    <div className="w-full lg:w-7/12 md:w-full sm:w-full">
      <div className="bg-white shadow rounded">
        <div className="p-4">
          <h5 className="text-lg font-bold mb-4">
            Feb - 2025, Employees KPI score
          </h5>
          <div className="w-full">
            <Chart options={options} series={series} type="line" height={395} />
          </div>
        </div>
      </div>
    </div>
  );
}

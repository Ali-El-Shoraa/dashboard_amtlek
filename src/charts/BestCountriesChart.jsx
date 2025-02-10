import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// تسجيل مكونات Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function BestCountriesChart() {
  // بيانات المخطط مع خطوط solid (صلبة)
  const data = {
    labels: ["Country A", "Country B", "Country C", "Country D", "Country E"],
    datasets: [
      {
        label: "Users",
        data: [50, 75, 150, 100, 200],
        borderColor: "green",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Properties",
        data: [80, 120, 100, 140, 160],
        borderColor: "blue",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Project",
        data: [20, 50, 75, 60, 80],
        borderColor: "red",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // إعداد خيارات المخطط لإظهار خطوط شبكة أفقية وعمودية صلبة
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // سننشئ وسيلة إيضاح مخصصة
      tooltip: {
        mode: "index",
        intersect: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true, // إظهار الخطوط العمودية
          // لا يوجد borderDash للحصول على خط صلب
        },
      },
      y: {
        grid: {
          display: true, // إظهار الخطوط الأفقية
          // لا يوجد borderDash للحصول على خط صلب
        },
      },
    },
  };

  return (
    <div className="w-full lg:w-5/12 md:w-full sm:w-full">
      <div className="bg-white shadow rounded h-[450px] p-4">
        <h5 className="text-lg font-bold">Best Countries</h5>
        <br />
        <br />
        <br />
        <div className="container mx-auto">
          <div className="row">
            <div className="w-full">
              {/* وسيلة إيضاح مخصصة */}
              <div className="font-bold text-center">
                <span className="bg-green-500 inline-block px-2 py-2 mr-1 rounded-full"></span>
                <span className="mr-5">Users</span>
                <span className="bg-blue-500 inline-block px-2 py-2 mr-1 rounded-full"></span>
                <span className="mr-5">Properties</span>
                <span className="bg-red-500 inline-block px-2 py-2 mr-1 rounded-full"></span>
                <span className="mr-5">Project</span>
              </div>
              <br />
              {/* عرض المخطط باستخدام react-chartjs-2 */}
              <div
                className="relative mx-auto"
                style={{ width: "403px", height: "201px" }}
              >
                <Line data={data} options={options} />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// تسجيل المكونات المطلوبة من Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const data = {
  labels: [
    "Login",
    "Logout",
    "Add New Lead",
    "Add Call",
    "Add Meeting",
    "Add Note",
    "Mark assing lead to employee",
    "Finished Deal",
    "Sent new task",
    "Finished task",
    "Add new employee",
    "Remove employee",
    "Send salary to",
    "Add expense",
    "Add news",
    "Add news category",
  ],
  datasets: [
    {
      data: [
        887, 678, 500, 400, 300, 200, 178, 300, 500, 200, 700, 178, 300, 50,
        180, 50,
      ],
      backgroundColor: [
        "#01425a",
        "#406b88",
        "#2c3e5024",
        "E07A5F",
        "#497D74",
        "#B1C29E",
        "#818C78",
        "#5C7285",
      ],
      borderColor: [
        "#01425a",
        "#406b88",
        "#2c3e5024",
        "#E07A5F",
        "#497D74",
        "#B1C29E",
        "#818C78",
        "#5C7285",
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      barPercentage: 0.2,
      categoryPercentage: 0.5, // يقلل المسافة بين الأعمدة
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
  animation: {
    duration: 1000,
  },
};

export default function App() {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

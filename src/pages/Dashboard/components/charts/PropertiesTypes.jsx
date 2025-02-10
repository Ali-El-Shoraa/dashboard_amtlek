import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PropertiesTypes() {
  const data = {
    labels: ["Normal Listinig", "Feauature Listitng"],
    datasets: [
      {
        data: [99, 0],
        backgroundColor: ["#00aba9", "#b91d47"],
        // hoverBackgroundColor: ["#059669", "#D97706"],
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    // responsive: true,
    cutout: "0%", // إزالة الفراغ داخل الدائرة
    plugins: {
      legend: {
        // position: "bottom",
      },
    },
  };

  return (
    <div className="w-full xl:w-5/12 lg:w-5/12 md:w-full sm:w-full">
      <div className="bg-white shadow rounded">
        <div className="p-4">
          <h5 className="text-lg font-bold mb-4">Properties Types</h5>
          <div className="flex justify-center">
            <div className="w-[400px] h-[400px]">
              <Doughnut data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

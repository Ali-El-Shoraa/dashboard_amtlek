import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PropertiesTypes({ title }) {
  const data = {
    labels: ["Normal Listinig", "Feauature Listitng"],
    datasets: [
      {
        data: [99, 30],
        backgroundColor: ["#00aba9", "#b91d47"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // للسماح للمخطط بتعديل نسبة العرض للارتفاع حسب الحاوية
    cutout: "0%", // إزالة الفراغ داخل الدائرة
  };

  return (
    <div className="w-full p-4 bg-white shadow rounded h-full">
      <h5 className="text-lg font-bold mb-4">{title}</h5>
      <div className="w-full max-w-md">
        {/* استخدام حاوية بنسبة 1:1 لجعل المخطط مربع واستجابى */}
        <div className="relative aspect-square">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

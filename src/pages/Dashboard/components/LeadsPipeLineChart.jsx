import { useRef, useMemo } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function LeadsPipeLineChart() {
  const chartRef = useRef(null);

  // استخدام useMemo لحساب خيارات المخطط مرة واحدة
  const options = useMemo(() => {
    // تعريف نقاط البيانات الأساسية
    const dataPoints = [
      { y: 354, label: "new" },
      { y: 60, label: "Contacted" },
      { y: 75, label: "Intersted" },
      { y: 0, label: "Meeting" },
      { y: 60, label: "Canceld" },
      { y: 15, label: "Won" },
    ];
    // حساب الإجمالي من أول نقطة بيانات
    const total = dataPoints[0].y;
    // حساب النسبة المئوية لكل نقطة
    const computedDataPoints = dataPoints.map((dp, index) => ({
      ...dp,
      percentage: index === 0 ? 100 : ((dp.y / total) * 100).toFixed(2),
    }));

    return {
      animationEnabled: true,
      title: {
        text: "Leads Pipe Line Chart",
      },
      data: [
        {
          type: "funnel",
          //   - {y}
          indexLabel: "{label}",
          toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
          neckWidth: 120,
          neckHeight: 100,
          //   valueRepresents: "area",
          dataPoints: computedDataPoints,
        },
      ],
    };
  }, []);

  return (
    <div className="h-full p-5 rounded-xl bg-white drop-shadow-lg">
      <CanvasJSChart
        options={options}
        onRef={(ref) => (chartRef.current = ref)}
      />
    </div>
  );
}

// const chartRef = useRef(null);

// // حساب خيارات المخطط مرة واحدة باستخدام useMemo
// const options = useMemo(() => {
//   // تعريف نقاط البيانات
//   const dataPoints = [
//     { y: 265, label: "Applications" },
//     { y: 134, label: "Interviewed" },
//     { y: 48, label: "Assessment" },
//     { y: 26, label: "Hired" }
//   ];

//   // حساب النسبة المئوية لكل نقطة
//   const total = dataPoints[0].y;
//   const computedDataPoints = dataPoints.map((dp, index) => ({
//     ...dp,
//     percentage: index === 0 ? 100 : ((dp.y / total) * 100).toFixed(2)
//   }));

//   return {
//     theme: "dark2",
//     animationEnabled: true,
//     title: {
//       text: "Recruitment Analysis - July 2016"
//     },
//     data: [{
//       type: "funnel",
//       indexLabel: "{label} - {y}",
//       toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
//       neckWidth: 20,
//       neckHeight: 0,
//       valueRepresents: "area",
//       dataPoints: computedDataPoints
//     }]
//   };
// }, []);

// return (
//   <div>
//     <CanvasJSChart
//       options={options}
//       onRef={ref => chartRef.current = ref}
//     />
//   </div>
// );
// };

// import { useRef, useMemo } from "react";
// import CanvasJSReact from "@canvasjs/react-charts";

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// export default function LeadsCurrentStatus() {
//   const chartRef = useRef(null);

//   // حساب الخيارات مرة واحدة باستخدام useMemo
//   const options = useMemo(() => {
//     // تعريف نقاط البيانات الأساسية
//     const dataPoints = [
//       { y: 354, label: "new" },
//       { y: 60, label: "Contacted" },
//       { y: 75, label: "Intersted" },
//       { y: 0, label: "Meeting" },
//       { y: 60, label: "Canceld" },
//       { y: 15, label: "Won" },
//     ];
//     // حساب الإجمالي من أول نقطة بيانات
//     const total = dataPoints?.[0].y;
//     // حساب النسبة المئوية لكل نقطة
//     const computedDataPoints = dataPoints.map((dp, index) => ({
//       ...dp,
//       percentage: index === 0 ? 100 : ((dp.y / total) * 100).toFixed(2),
//     }));

//     return {
//       animationEnabled: true,
//       data: [
//         {

//           type: "pie",
//           indexLabel: "{label}",
//           toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
//           showInLegend: true,
//           innerRadius: "40%",
//           dataPoints: computedDataPoints,
//         },
//       ],
//     };
//   }, []);

//   return (
//     <div className="h-full p-5 rounded bg-white shadow">
//       <h1 className="text-xl font-bold text-center mb-2">
//         Leads Current Status
//       </h1>
//       <CanvasJSChart
//         options={options}
//         onRef={(ref) => (chartRef.current = ref)}
//       />
//     </div>
//   );
// }

import { useRef, useMemo } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function LeadsCurrentStatus() {
  const chartRef = useRef(null);

  // تعريف نقاط البيانات الأساسية
  const dataPoints = [
    { y: 354, label: "new" },
    { y: 60, label: "Contacted" },
    { y: 75, label: "Intersted" },
    { y: 0, label: "Meeting" },
    { y: 60, label: "Canceld" },
    { y: 15, label: "Won" },
  ];

  // حساب النسب المئوية لكل نقطة
  const computedDataPoints = dataPoints.map((dp, index) => ({
    ...dp,
    // استخدم label كنص للوسيلة الإيضاح
    legendText: dp.label,
    // اجعل النقطة الأولى تمثل 100% والباقي نسبةً لها
    percentage: index === 0 ? 100 : ((dp.y / dataPoints[0].y) * 100).toFixed(2),
  }));

  // إعدادات المخطط
  const options = useMemo(() => {
    return {
      animationEnabled: true,
      // title: {
      //   text: "Leads Current Status",
      // },
      data: [
        {
          type: "pie",
          showInLegend: true,
          legendText: "{legendText}",
          indexLabel: "{label}",
          toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
          innerRadius: "40%",
          dataPoints: computedDataPoints,
        },
      ],
    };
  }, [computedDataPoints]);

  return (
    <div className="h-full p-5 rounded bg-white shadow">
      <h1 className="text-xl font-bold text-center mb-2">
        Leads Current Status
      </h1>
      <CanvasJSChart
        options={options}
        onRef={(ref) => (chartRef.current = ref)}
      />
    </div>
  );
}

// import { useRef, useMemo } from "react";
// import CanvasJSReact from "@canvasjs/react-charts";

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// export default function LeadsCurrentStatus() {
//   const chartRef = useRef(null);

//   // حساب الخيارات مرة واحدة باستخدام useMemo لتجنب إعادة الحساب عند كل إعادة تصيير
//   const options = useMemo(() => {
//     // تعريف نقاط البيانات الأساسية مع قيمة y والعنوان
//     const dataPoints = [
//       { y: 354, label: "new" },
//       { y: 60, label: "Contacted" },
//       { y: 75, label: "Intersted" },
//       { y: 0, label: "Meeting" },
//       { y: 60, label: "Canceld" },
//       { y: 15, label: "Won" },
//     ];

//     // اعتماداً على أول نقطة بيانات يتم اعتبارها كمرجع للحساب
//     const total = dataPoints?.[0].y;
//     // حساب النسبة المئوية لكل نقطة
//     const computedDataPoints = dataPoints.map((dp, index) => ({
//       ...dp,
//       // أول نقطة تُعطي 100% والباقي تُحسب نسبته بالنسبة لأول قيمة
//       percentage: index === 0 ? 100 : ((dp.y / total) * 100).toFixed(2),
//     }));

//     return {
//       animationEnabled: true,
//       data: [
//         {
//           type: "pie",
//           indexLabel: "{label}",
//           toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
//           showInLegend: true,
//           innerRadius: "40%",
//           dataPoints: computedDataPoints,
//         },
//       ],
//     };
//   }, []);

//   return (
//     <div className="h-full p-5 rounded bg-white shadow">
//       <h1 className="text-xl font-bold text-center mb-2">
//         Leads Current Status
//       </h1>
//       <CanvasJSChart
//         options={options}
//         onRef={(ref) => (chartRef.current = ref)}
//       />
//     </div>
//   );
// }

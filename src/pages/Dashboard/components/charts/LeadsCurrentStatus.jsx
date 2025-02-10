import Chart from "react-apexcharts";
export default function LeadsCurrentStatus() {
  // إعداد خيارات المخطط
  const options = {
    chart: {
      id: "leads_current_status",
      toolbar: {
        show: false,
      },
    },
    // استخدام لون Bootstrap الافتراضي للنجاح
    colors: ["#198754"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "New",
        "Contacted",
        "Interested",
        "Meeting",
        "Site Visit",
        "Not Interested",
        "Canceled",
        "Finish",
      ],
      labels: {
        style: {
          colors: "#373d3f",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    title: {
      text: "Leads Current Status",
      align: "center",
    },
  };

  // قيم البيانات المستخلصة من الرسم (استُخرجت من الكود الأصلي)
  const series = [
    {
      name: "Count",
      data: [354, 60, 75, 2, 0, 27, 33, 15],
    },
  ];

  return (
    <div className="h-full p-5 rounded-xl bg-white drop-shadow-lg">
      <div className="card-body" style={{ height: "auto" }}>
        <h5>Leads Current Status</h5>
        <div className="container">
          <div className="row" style={{ direction: "ltr" }}>
            <div style={{ width: "100%" }}>
              <Chart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

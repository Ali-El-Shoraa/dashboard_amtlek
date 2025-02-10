import Chart from "react-apexcharts";
export default function IncomeAndExpense() {
  const chartOptions = {
    chart: {
      id: "incomeExpenseChart",
    },
    xaxis: {
      // فئات المحور السيني (الشهور)
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#00C853", "#FF3D00"], // لون "Income" و "Expenses"
  };

  // بيانات السلسلتين (يمكنك تعديلها حسب احتياجك)
  const series = [
    {
      name: "Income",
      data: [406, 549, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500],
    },
    {
      name: "Expenses",
      data: [
        700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800,
      ],
    },
  ];

  return (
    <div className="h-[540px] p-5 rounded-xl bg-white drop-shadow-lg ">
      <div className="h-full">
        <div className="">
          <h4 className="mb-4">Income &amp; Expense in 2025</h4>
          <div style={{ padding: "1px", textAlign: "center" }}>
            <h6 style={{ fontSize: "12px" }}>
              Income:
              <span
                className="badge text-bg-success"
                style={{ marginLeft: "5px" }}
              >
                406,549.0 EGP
              </span>
              <span className="mx-1 font-bold">|</span>
              Expenses:
              <span className="badge text-bg-danger">700.0 EGP</span>
              <span className="mx-1 font-bold">|</span>
              Profit ratio:
              <span className="badge text-bg-primary">99.8%</span>
            </h6>
          </div>
          <hr />
          {/* استخدام الكومبوننت Chart لعرض الرسم البياني */}
          <Chart
            options={chartOptions}
            series={series}
            type="line"
            height="350"
          />
        </div>
      </div>
    </div>
  );
}

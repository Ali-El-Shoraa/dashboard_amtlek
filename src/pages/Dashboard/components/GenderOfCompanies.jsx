import { Link } from "react-router-dom";

export default function GenderOfCompanies() {
  const skillItems = [
    {
      name: "Ali El-Shoraa",
      updated: "15 May 2025",
      phone: "01550859246",
      progress: 100,
      colorClass: "text-blue-500",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ",
    },
    {
      name: "Mostafa Gamal",
      updated: "12 May 2025",
      phone: "01121238817",
      progress: 85,
      colorClass: "text-green-500",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGMQxfcroal7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724461064745?e=1745452800&v=beta&t=O_B3S4B9pYmMpz0hDunS7dTIj8ocXoRgtHlKAcHJihQ",
    },
    {
      name: "Ali Eliwa",
      updated: "12 May 2025",
      phone: "01118536724",
      progress: 70,
      colorClass: "text-purple-500",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGhowxC94qL4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726547899707?e=1745452800&v=beta&t=VJoFnFZ5xLDwAMca709bEtsaBy8nWUrL0TM9o6qs2HY",
    },
    {
      name: "Hussein Sadiq Elged",
      updated: "15 May 2025",
      phone: "01098351052",
      progress: 61,
      colorClass: "text-cyan-500",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGO0n3SXivoqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726058061233?e=1745452800&v=beta&t=_zssM6E55rz4m0T55v0qVVPMh2h9JD1-LImWYZwIZgk",
    },
    {
      name: "Ahmed Attia",
      updated: "13 May 2025",
      phone: "01092127269",
      progress: 58,
      colorClass: "text-gray-800",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQF2_125chR2Tw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720724982566?e=1745452800&v=beta&t=gJSqYxcxrahL87hQyQ8zgxrVeYSP4-gPa-nlg06w7Ak",
    },
  ];

  // دالة مساعدة لرسم دائرة النسبة باستخدام SVG
  const renderCircleProgress = (progress, colorClass) => {
    const circumference = 100;
    const offset = circumference - (progress / 100) * circumference;
    return (
      <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
        {/* المسار الخلفي */}
        <path
          className="text-gray-300"
          strokeWidth="4"
          stroke="currentColor"
          fill="none"
          d="M18 2
             a 16 16 0 0 1 0 32
             a 16 16 0 0 1 0 -32"
        />
        {/* المسار الأمامي بحسب النسبة */}
        <path
          className={colorClass}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2
             a 16 16 0 0 1 0 32
             a 16 16 0 0 1 0 -32"
        />
        {/* النص الذي يظهر النسبة */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-[10px] font-bold fill-current rotate-90 transform origin-center"
        >
          {progress}%
        </text>
      </svg>
    );
  };

  return (
    <div className="GenderOfCompanies bg-white shadow rounded flex flex-col w-full h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h5 className="text-lg font-semibold">Top Employees KPI Score</h5>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-2">
        {skillItems?.map((skill, idx) => (
          <div
            key={idx}
            className="border border-dashed bg-gray-50 rounded p-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="block border-2 h-12 w-12 mr-2 rounded-full overflow-hidden">
                  <img
                    src={skill?.image}
                    alt={skill?.name}
                    className="object-cover w-full h-full"
                  />
                </span>
                <div>
                  <h6 className="font-medium mb-1">{skill?.name}</h6>
                  <Link
                    className="text-xs text-gray-500"
                    to={`tel:${skill?.phone}`}
                  >
                    {skill?.phone}
                  </Link>

                  {/* <p className="text-xs text-gray-500">{skill?.phone}</p> */}
                </div>
              </div>
              {renderCircleProgress(skill?.progress, skill?.colorClass)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

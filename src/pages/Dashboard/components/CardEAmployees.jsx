// import { Link } from "react-router-dom";

// export default function CardEAmployees() {
//   return (
//     <div className="">
//       <Link
//         className="flex items-center justify-between bg-white rounded-md p-5"
//         to="https://dashboard.amtalek.com/en/amtalek/vendors"
//       >
//         <div>
//           <h4 className="mb-1 mt-1">
//             <span data-plugin="counterup">89</span>
//           </h4>
//           <p className="text-muted mb-0">Vendors</p>
//         </div>

//         <img
//           src="https://dmlygcfpc782j.cloudfront.net/assets/images/icons/vendors.png"
//           width={40}
//           alt="design"
//         />
//       </Link>
//     </div>
//   );
// }
import { memo } from "react";
import {
  MdStore,
  MdPerson,
  MdGroup,
  MdHome,
  MdStar,
  MdTrendingUp,
} from "react-icons/md";

const CardEmployees = memo(() => {
  const items = [
    {
      label: "Vendors",
      count: 200,
      icon: <MdStore className="text-lg" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      label: "Users",
      count: 200,
      icon: <MdPerson className="text-lg" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      label: "Amtalek Employees",
      count: 200,
      icon: <MdGroup className="text-lg" />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      label: "Normal Properties",
      count: 200,
      icon: <MdHome className="text-lg" />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      label: "Featured Properties",
      count: 200,
      icon: <MdStar className="text-lg" />,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      label: "Leads Amtalek",
      count: 200,
      icon: <MdTrendingUp className="text-lg" />,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="bg-white shadow rounded p-4">
      {/* الرأس */}
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-lg font-semibold text-gray-800">Orders Overview</h6>
      </div>
      {/* قائمة العناصر مع فواصل بين كل عنصر وآخر */}
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${item.bgColor}`}>
                  <span className={`${item.textColor}`}>{item.icon}</span>
                </div>
                <div className="ml-3">
                  <span className="block font-semibold text-gray-800">
                    {item.count}
                  </span>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              </div>

              <button className={`p-2 rounded cursor-pointer ${item.bgColor}`}>
                Show All
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardEmployees;

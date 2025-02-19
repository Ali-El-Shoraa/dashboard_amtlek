import { memo } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// تعريف الخصائص التي يستقبلها المكون
const GeneralStatistics = ({ title, count, icon, diff }) => {
  return (
    <div className="w-full">
      <div className="bg-white shadow rounded p-4">
        <div className="flex items-center gap-8">
          {/* أيقونة البطاقة */}
          <div className="flex items-center justify-center bg-gray-100 rounded-full p-3 shadow">
            <span className="text-blue-500">{icon}</span>
          </div>
          {/* محتوى البطاقة */}
          <div>
            <h6 className="text-lg font-bold text-custome-gray mb-2">
              {title}
            </h6>
            <div className="flex items-end gap-2">
              <h3 className="text-2xl font-bold text-gray-900">{count}</h3>
              {/* {diff && (
                <span className="flex items-center text-sm">
                  {diff.positive ? (
                    <span className="flex items-center text-green-500">
                      <FaArrowUp className="mr-1" /> {diff.value}
                    </span>
                  ) : (
                    <span className="flex items-center text-red-500">
                      <FaArrowDown className="mr-1" /> {diff.value}
                    </span>
                  )}
                  <span className="text-gray-500 ml-1">{diff.description}</span>
                </span>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(GeneralStatistics);

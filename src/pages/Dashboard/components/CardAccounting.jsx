import { memo } from "react";

const CardAccounting = ({ title, bg_color_card }) => {
  const amount = 9962;
  // تنسيق الرقم كعملة مصرية مع استخدام الأرقام اللاتينية
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
    numberingSystem: "latn", // استخدام الأرقام اللاتينية
  }).format(amount);

  return (
    <div
      className={`h-36 text-white dark:bg-gray-800 shadow-xs rounded-xl ${bg_color_card}`}
    >
      <div className="px-5 py-5 flex flex-col justify-between h-full">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold dark:text-gray-100 mb-2">
            {title}
          </h2>
          {new Date().toLocaleDateString("en-US", {
            month: "numeric",
            year: "numeric",
          })}
        </header>

        <div className="text-3xl font-bold dark:text-gray-100 mr-2">
          {formattedAmount}
        </div>
      </div>
    </div>
  );
};

export default memo(CardAccounting);

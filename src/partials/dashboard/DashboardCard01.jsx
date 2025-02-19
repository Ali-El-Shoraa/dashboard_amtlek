import { memo } from "react";

export default memo(function DashboardCard01() {
  return (
    <div className="flex items-center justify-start gap-4 p-2.5 bg-custom-blue h-36 dark:bg-gray-800 shadow-xs rounded-xl">
      <img
        src="https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg"
        className="rounded-full w-120 h-120 border-2 border-white"
        alt="logo"
      />

      <div className="text-white font-bold text-sm">
        <p>Welcome 😀</p>
        <p>Ali El-Shoraa </p>
        <p>Front-End Developer</p>
        <div>
          <p>2025-02-09 10:28:27</p>
        </div>
      </div>
    </div>
  );
});

import { memo } from "react";

const ScheduledMeetingsCard = () => {
  return (
    <div className="h-36 shadow-xs rounded-xl w-full">
      <div className="bg-white rounded-[10px] h-[140px] relative">
        {/* المحتوى داخل الكارد مع وضع absolute لضبط المحاذاة */}
        <div className="inline-block p-1 absolute w-full">
          <p className="text-sm text-[#767a92] my-[10px]">
            <i className="far fa-calendar-alt mx-[5px]"></i>
            Scheduled Meetings / Calls{" "}
            <span className="font-bold">Today 2025-02-12</span>
          </p>
          <div className="flex">
            {/* العمود الأول */}
            <div className="w-1/2 text-center p-0 hover:bg-[#e7e7e7]">
              <a href="https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender">
                <p className="text-[18px] text-[#1dc9b7] font-bold">0</p>
                <p className="text-[17px] text-[#1dc9b7] font-bold">Calls</p>
              </a>
            </div>
            {/* العمود الثاني مع حدود على اليسار */}
            <div className="w-1/2 text-center p-0 border-l-[0.5px] border-l-[#e9e9e9] hover:bg-[#e7e7e7]">
              <a href="https://dashboard.amtalek.com/en/amtalek/crm-system/my-calender">
                <p className="text-[18px] text-[#374afb] font-bold">0</p>
                <p className="text-[17px] text-[#374afb] font-bold">Meetings</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ScheduledMeetingsCard);

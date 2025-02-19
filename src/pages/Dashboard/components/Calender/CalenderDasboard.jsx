import { useRef, memo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

function CalenderDasboard() {
  const calendarRef = useRef(null);

  const count = 20;
  return (
    <div className="col-xxl-6 col-xl-6 col-lg-12">
      <div className="card__wrapper bg-white shadow rounded p-4">
        {/* عنوان البطاقة والقائمة المنسدلة */}
        <div className="card__title-wrap flex items-center justify-between mb-5">
          <h5 className="card__heading-title text-lg font-bold">
            Employees attendance calender
          </h5>
        </div>
        {/* تقويم FullCalendar */}
        <div className="calendar-wrapper">
          <FullCalendar
            dayHeaderContent={(args) => <div className="py-4">{args.text}</div>}
            ref={calendarRef}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: false,
              center: "title",
              right: false,
            }}
            events={[
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-01",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-01",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-02",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-02",
              },

              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-03",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-03",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-04",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-04",
              },

              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-05",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-05",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-06",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-06",
              },

              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-07",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-07",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-08",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-08",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-09",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-09",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-10",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-10",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-11",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-11",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-12",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-12",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-13",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-13",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-14",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-14",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-15",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-15",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-16",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-16",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-17",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-17",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-02-18",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-02-18",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-01-29",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-01-29",
              },

              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-01-28",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-01-28",
              },

              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-01-27",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-01-27",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-01-26",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-01-26",
              },

              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-01-30",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-01-30",
              },
              {
                title: `Not Attend (${count})`,
                color: "red",
                date: "2025-01-31",
              },
              {
                title: `Attend (${count})`,
                color: "green",
                date: "2025-01-31",
              },
            ]}
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(CalenderDasboard);

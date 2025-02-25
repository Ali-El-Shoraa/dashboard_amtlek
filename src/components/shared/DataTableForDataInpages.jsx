import { memo } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";

// تسجيل مكتبة DataTables باستخدام DT على مستوى الوحدة (مرة واحدة فقط)
DataTable.use(DT);

export default memo(function DataTableForDataInpages({ data, columns }) {
  const options = {
    data,
    columns,
    pageLength: 10,
    lengthMenu: [
      [10, 25, 50, 100],
      [10, 25, 50, 100],
    ],
    language: {
      search: "Search:",
      lengthMenu: "Show _MENU_ Rows",
      info: "Show _START_ to _END_ from _TOTAL_ Rows",
      infoEmpty: "No rows available",
      zeroRecords: "No matching records found",
      paginate: {
        // استخدام أيقونات الأسهم من مكتبة bx (تأكد من استيراد المكتبة)
        previous: `<i class="bx bx-chevron-left"></i>`,
        next: `<i class="bx bx-chevron-right"></i>`,
      },
    },
    // تخصيص ترتيب العناصر بحيث تظهر معلومات الجدول جهة اليسار وأزرار التنقل جهة اليمين
    // dom: "t<'flex justify-between items-center'<'dataTables_info'i><'dataTables_paginate'p>>",
    dom: "<'flex justify-between items-center'<'dataTables_length'l><'dataTables_filter'f>>t<'flex justify-between items-center'<'dataTables_info'i><'dataTables_paginate'p>>",

    headerCallback: (thead, data, start, end, display) => {
      thead.classList.add("bg-custom-blue", "text-white");
      thead.querySelectorAll("th").forEach((th) => {
        th.classList.add("px-4", "py-2", "text-center");
      });
    },

    rowCallback: (row, data, index) => {
      row.querySelectorAll("td").forEach((td) => {
        td.classList.add("px-4", "py-2");
      });
    },
  };

  return (
    <div className="p-4">
      <DataTable options={options} className="data-table-general" />
    </div>
  );
});

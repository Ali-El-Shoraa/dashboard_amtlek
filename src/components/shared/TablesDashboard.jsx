import { useMemo } from "react";
import { useTable } from "react-table";

export default function TablesDashboard() {
  // بيانات الجدول
  const data = useMemo(
    () => [
      {
        leadName: "Khamis hegazy",
        createdAt: "05-02-2025",
        agentName: "hossam elkholy",
        agentImg:
          "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
        status: "Opened",
        dealCost: "0.0 EGP",
        leadLink:
          "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/965",
        agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
      },
      {
        leadName: "Adham Mohsen",
        createdAt: "05-02-2025",
        agentName: "hossam elkholy",
        agentImg:
          "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
        status: "Opened",
        dealCost: "0.0 EGP",
        leadLink:
          "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/962",
        agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
      },
      {
        leadName: "Dina Abdulaah",
        createdAt: "05-02-2025",
        agentName: "hossam elkholy",
        agentImg:
          "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
        status: "Lost",
        dealCost: "0.0 EGP",
        leadLink:
          "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/960",
        agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
      },
      {
        leadName: "Doda Fouad",
        createdAt: "02-02-2025",
        agentName: "hossam elkholy",
        agentImg:
          "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
        status: "Opened",
        dealCost: "0.0 EGP",
        leadLink:
          "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/877",
        agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
      },
      {
        leadName: "Mahmoud Saber",
        createdAt: "02-02-2025",
        agentName: "hossam elkholy",
        agentImg:
          "https://dmlygcfpc782j.cloudfront.net/media/admins/1718289090.jpg",
        status: "Opened",
        dealCost: "0.0 EGP",
        leadLink:
          "https://dashboard.amtalek.com/en/amtalek/crm-system/leads/876",
        agentLink: "https://dashboard.amtalek.com/en/amtalek/admins/231",
      },
    ],
    []
  );

  // تعريف أعمدة الجدول
  const columns = useMemo(
    () => [
      {
        Header: "Lead Name",
        accessor: "leadName",
        Cell: ({ row }) => (
          <a
            href={row.original.leadLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <i className="fa fa-user" />
            {row.original.leadName}
          </a>
        ),
      },
      {
        Header: "Created at",
        accessor: "createdAt",
      },
      {
        Header: "Agent name",
        accessor: "agentName",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={row.original.agentImg}
              alt="Agent"
              className="w-10 h-10 rounded-full"
            />
            <a
              href={row.original.agentLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {row.original.agentName}
            </a>
          </div>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          // تغيير اللون حسب الحالة
          const bgColor =
            value === "Opened"
              ? "bg-blue-500"
              : value === "Lost"
              ? "bg-red-500"
              : "bg-gray-500";
          return (
            <span className={`${bgColor} px-3 py-1 text-white rounded`}>
              {value}
            </span>
          );
        },
      },
      {
        Header: "Deal cost",
        accessor: "dealCost",
      },
    ],
    []
  );

  // تهيئة الجدول باستخدام useTable
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-white shadow rounded p-4">
        <h5 className="text-lg font-bold mb-4">Latest Deals Status</h5>
        <div className="max-h-[339px] overflow-y-auto">
          <table
            {...getTableProps()}
            className="min-w-full border-collapse border border-gray-200"
          >
            <thead className="bg-gray-100">
              {headerGroups.map((headerGroup) => {
                const { key: headerGroupKey, ...restHeaderGroupProps } =
                  headerGroup.getHeaderGroupProps();
                return (
                  <tr key={headerGroupKey} {...restHeaderGroupProps}>
                    {headerGroup.headers.map((column) => {
                      const { key: columnKey, ...restColumnProps } =
                        column.getHeaderProps();
                      return (
                        <th
                          key={columnKey}
                          {...restColumnProps}
                          className="p-2 border border-gray-200 text-left"
                        >
                          {column.render("Header")}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody {...getTableBodyProps()} className="font-bold">
              {rows.map((row) => {
                prepareRow(row);
                const { key: rowKey, ...restRowProps } = row.getRowProps();
                return (
                  <tr key={rowKey} {...restRowProps}>
                    {row.cells.map((cell) => {
                      const { key: cellKey, ...restCellProps } =
                        cell.getCellProps();
                      return (
                        <td
                          key={cellKey}
                          {...restCellProps}
                          className="p-2 border border-gray-200"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

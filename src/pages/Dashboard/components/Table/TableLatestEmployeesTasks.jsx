import { memo, useMemo } from "react";
import { useTable } from "react-table";

const calculateDeadlineProgress = (startDate, deadLine) => {
  const start = new Date(startDate);
  const end = new Date(deadLine);
  const now = new Date();
  const totalDuration = end - start;
  const elapsed = now - start;
  return Math.min((elapsed / totalDuration) * 100, 100).toFixed(2);
};

const TableLatestEmployeesTasks = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Ali El-Shoraa",
        phone: "01550859246",
        sector: "Front-End",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ",

        startDate: "2025-01-01",
        deadLine: "2025-04-05",
        task: "Patient appointment booking",
        priority: "Medium",
      },
      {
        id: 1,
        name: "Mostafa Gamal",
        phone: "01121238817",
        sector: "Back-End",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQGMQxfcroal7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724461064745?e=1745452800&v=beta&t=O_B3S4B9pYmMpz0hDunS7dTIj8ocXoRgtHlKAcHJihQ",

        startDate: "2025-01-01",
        deadLine: "2025-05-05",
        task: "Appointment booking with payment",
        priority: "Low",
      },
      {
        id: 1,
        name: "Ali Eliwa",
        phone: "01118536724",
        sector: "Flutter",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQGhowxC94qL4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726547899707?e=1745452800&v=beta&t=VJoFnFZ5xLDwAMca709bEtsaBy8nWUrL0TM9o6qs2HY",

        startDate: "2025-01-01",
        deadLine: "2025-08-05",
        task: "Patient and Doctor video conferencing",
        priority: "High",
      },

      {
        id: 1,
        name: "Ali Eliwa",
        phone: "01118536724",
        sector: "Flutter",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQGhowxC94qL4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726547899707?e=1745452800&v=beta&t=VJoFnFZ5xLDwAMca709bEtsaBy8nWUrL0TM9o6qs2HY",

        startDate: "2025-01-01",
        deadLine: "2025-08-05",
        task: "Patient and Doctor video conferencing",
        priority: "High",
      },

      {
        id: 1,
        name: "Ali Eliwa",
        phone: "01118536724",
        sector: "Flutter",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQGhowxC94qL4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726547899707?e=1745452800&v=beta&t=VJoFnFZ5xLDwAMca709bEtsaBy8nWUrL0TM9o6qs2HY",

        startDate: "2025-01-01",
        deadLine: "2025-08-05",
        task: "Patient and Doctor video conferencing",
        priority: "High",
      },
      {
        id: 1,
        name: "Mostafa Gamal",
        phone: "01121238817",
        sector: "Back-End",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQGMQxfcroal7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724461064745?e=1745452800&v=beta&t=O_B3S4B9pYmMpz0hDunS7dTIj8ocXoRgtHlKAcHJihQ",

        startDate: "2025-01-01",
        deadLine: "2025-05-05",
        task: "Appointment booking with payment",
        priority: "Low",
      },
      {
        id: 1,
        name: "Ali El-Shoraa",
        phone: "01550859246",
        sector: "Front-End",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ",

        startDate: "2025-01-01",
        deadLine: "2025-04-05",
        task: "Patient appointment booking",
        priority: "Medium",
      },
      {
        id: 1,
        name: "Ali El-Shoraa",
        phone: "01550859246",
        sector: "Front-End",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ",

        startDate: "2025-01-01",
        deadLine: "2025-04-05",
        task: "Patient appointment booking",
        priority: "Medium",
      },

      {
        id: 1,
        name: "Ali El-Shoraa",
        phone: "01550859246",
        sector: "Front-End",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ",

        startDate: "2025-01-01",
        deadLine: "2025-04-05",
        task: "Patient appointment booking",
        priority: "Medium",
      },

      {
        id: 1,
        name: "Ali El-Shoraa",
        phone: "01550859246",
        sector: "Front-End",
        leadtImg:
          "https://media.licdn.com/dms/image/v2/D4D03AQE8LjhAYdVi_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719033759653?e=1745452800&v=beta&t=-drgPZ3ggmqFK0U8Jc9AZ-0_7m3jgBdy6rTYMiRKthQ",

        startDate: "2025-01-01",
        deadLine: "2025-04-05",
        task: "Patient appointment booking",
        priority: "Medium",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Employee",
        accessor: "name",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <img
              src={row.original.leadtImg}
              alt={row.original.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <span>{row.original.name}</span>
              <span className="text-xs text-gray-400">
                {row.original.phone}
              </span>
            </div>
          </div>
        ),
      },
      {
        Header: "Sector",
        accessor: "sector",
        Cell: ({ row }) => {
          return (
            <>
              <h3 className="bg-custom-blue-secundry rounded text-sm text-white p-1 text-center">
                {row.original.sector}
              </h3>
            </>
          );
        },
      },
      { Header: "Task", accessor: "task" },
      {
        Header: "Deadline",
        accessor: "deadLine",
        Cell: ({ row }) => {
          const progress = calculateDeadlineProgress(
            row.original.startDate,
            row.original.deadLine
          );

          return (
            <>
              <h3>{row.original.deadLine}</h3>
              <div className="w-full h-[8px] rounded bg-gray-500">
                <div
                  className="bg-red-500 h-full rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Priority",
        accessor: "priority",
        Cell: ({ value }) => {
          const bgColor =
            value === "High"
              ? "bg-red-500"
              : value === "Medium"
              ? "bg-yellow-500"
              : "bg-green-500";
          return (
            <span className={`${bgColor} px-3 py-1 text-white rounded`}>
              {value}
            </span>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="w-full overflow-x-auto shadow bg-white shadow rounded p-4 h-full">
      {/* <div className=""> */}
      <h5 className="text-lg font-bold mb-4">Latest Employees Tasks</h5>
      <table
        {...getTableProps()}
        className="min-w-full border-collapse border border-gray-200"
      >
        <thead className="bg-custom-blue-secundry text-white">
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps}>
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
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <tr
                key={key}
                {...restRowProps}
                className={row.index % 2 === 0 ? "bg-gray-100" : ""}
              >
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
      {/* </div> */}
    </div>
  );
};

export default memo(TableLatestEmployeesTasks);

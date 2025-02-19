import { memo, useMemo } from "react";
import { useTable } from "react-table";

export default memo(function TablesDashboard({
  title = "Latest Deals Status",
  dataOfArrayRowsData,
  dataOfArrayColumName,
}) {
  // بيانات الجدول
  const data = useMemo(() => dataOfArrayRowsData, []);

  // تعريف أعمدة الجدول
  const columns = useMemo(() => dataOfArrayColumName, []);

  // تهيئة الجدول باستخدام useTable
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="w-full overflow-x-auto shadow">
      <div className="bg-white shadow rounded p-4">
        <h5 className="text-lg font-bold mb-4">{title}</h5>
        {/* max-h-[339px] overflow-y-auto */}
        <div className="overflow-auto max-h-[530px]">
          <table
            {...getTableProps()}
            className="min-w-full border-collapse border border-gray-200"
          >
            <thead className="bg-custom-blue-secundry text-white">
              {headerGroups?.map((headerGroup, index) => {
                const { key: headerGroupKey, ...restHeaderGroupProps } =
                  headerGroup.getHeaderGroupProps();
                return (
                  <tr key={headerGroupKey} {...restHeaderGroupProps}>
                    {headerGroup.headers.map((column) => {
                      const { key: columnKey, ...restColumnProps } =
                        column?.getHeaderProps();
                      return (
                        <th
                          key={columnKey}
                          {...restColumnProps}
                          // className={index % 2 === 0 ? `bg-black` : ``}
                          className={`p-2 border border-gray-200 text-left`}
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
              {rows.map((row, index) => {
                prepareRow(row);
                const { key: rowKey, ...restRowProps } = row.getRowProps();
                return (
                  <tr
                    key={rowKey}
                    {...restRowProps}
                    className={`${index % 2 === 0 && `bg-[#eaeaea]`}`}
                  >
                    {row.cells.map((cell, index) => {
                      const { key: cellKey, ...restCellProps } =
                        cell.getCellProps();
                      return (
                        <td
                          // className={`${index % 2 === 0 && `bg-black`}`}
                          key={cellKey}
                          {...restCellProps}
                          className={`p-2 border border-gray-200`}
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
});

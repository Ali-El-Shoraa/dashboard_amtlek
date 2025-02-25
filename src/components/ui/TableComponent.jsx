import React from "react";

const TableComponent = ({ headers, body }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-[#01425a] text-white whitespace-nowrap">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right "
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {body.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-4 py-4 text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: cell }}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

import { memo } from "react";
import DataTableForDataInpages from "../../components/shared/DataTableForDataInpages";
import TableComponent from "../../components/shared/TableComponent";

export default memo(function JobTypes() {
  const data = [
    {
      id: 1,
      nameEn: "Shift Base",
      nameAr: "عمل بالوردية",
    },
    {
      id: 2,
      nameEn: "Internship",
      nameAr: "تدريب",
    },
    {
      id: 3,
      nameEn: "Freelance",
      nameAr: "عمل مستقل",
    },
    {
      id: 4,
      nameEn: "Part Time",
      nameAr: "دوام جزئي",
    },
    {
      id: 5,
      nameEn: "Full Time",
      nameAr: "دوام كامل",
    },
  ];

  const columns = [
    {
      title: "#",
      data: "id",
      width: "5%",
    },
    {
      title: "Name in english",
      data: "nameEn",
    },
    {
      title: "Name in arabic",
      data: "nameAr",
    },

    {
      title: "Actions",
      render: (data, type, row) => {
        return `
        <div class="flex items-center justify-center gap-2">
          <button class="edit">
            <i class="bx bx-edit"></i> 
          </button>
          <button class="trash">
            <i class="bx bx-trash"></i>
            
          </button>
        </div>
        `;
      },
    },
  ];

  const headers = ["#", "Name in english", "Name in arabic", "Actions"];

  const body = [
    {
      "#": 1,
      "Name in english": "Engineering Construction Civil",
      "Name in arabic": "هندسة مدنية",
      Actions: `
        <div class="flex items-center justify-center gap-2">
          <button class="edit">
            <i class="bx bx-edit"></i> 
          </button>
          <button class="trash">
            <i class="bx bx-trash"></i>
            
          </button>
        </div>
        `,
    },
    {
      "#": 1,
      "Name in english": "IT/Programming",
      "Name in arabic": "تكنولوجيا المعلومات/البرمجة",
      Actions: `
        <div class="flex items-center justify-center gap-2">
          <button class="edit">
            <i class="bx bx-edit"></i> 
          </button>
          <button class="trash">
            <i class="bx bx-trash"></i>
            
          </button>
        </div>
        `,
    },
    {
      "#": 1,
      "Name in english": "Sales Retail",
      "Name in arabic": "مبيعات التجزئة",
      Actions: `
        <div class="flex items-center justify-center gap-2">
          <button class="edit">
            <i class="bx bx-edit"></i> 
          </button>
          <button class="trash">
            <i class="bx bx-trash"></i>
            
          </button>
        </div>
        `,
    },
  ];
  return (
    <div className="pages_table">
      Job Types
      <div className="flex justify-between items-center mb-4">
        {/* <h1 className="text-xl font-bold">Job Categories</h1> */}
        <button className="bg-custom-blue-secundry text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Job Types
        </button>
      </div>
      {/* <DataTableForDataInpages data={data} columns={columns} /> */}
      <TableComponent headers={headers} body={body} />
    </div>
  );
});

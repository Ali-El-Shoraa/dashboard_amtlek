import { memo } from "react";
import DataTableForDataInpages from "../../components/shared/DataTableForDataInpages";
import TableComponent from "../../components/shared/TableComponent";

export default memo(function WorkPlace() {
  const data = [
    {
      id: 1,
      nameEn: "Remote",
      nameAr: "عن بعد",
    },
    {
      id: 2,
      nameEn: "Hybrid",
      nameAr: "من المنزل وفي المقر",
    },
    {
      id: 3,
      nameEn: "On-Site",
      nameAr: "في مقر العمل",
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
      Work Place
      <div className="flex justify-between items-center mb-4">
        {/* <h1 className="text-xl font-bold">Job Categories</h1> */}
        <button className="bg-custom-blue-secundry text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Work Place
        </button>
      </div>
      {/* <DataTableForDataInpages data={data} columns={columns} /> */}
      <TableComponent headers={headers} body={body} />
    </div>
  );
});

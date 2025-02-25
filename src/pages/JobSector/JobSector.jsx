import { memo } from "react";
import DataTableForDataInpages from "../../components/shared/DataTableForDataInpages";
import { Link } from "react-router-dom";
import TableComponent from "../../components/shared/TableComponent";
import TopSectionNav from "../../components/ui/TopSectionNav";

export default memo(function JobSector() {
  // const data = [
  //   {
  //     id: 1,
  //     nameEn: "Engineering Construction Civil",
  //     nameAr: "هندسة مدنية",
  //     jobCategory: "Engineering Construction/Civil",
  //   },
  //   {
  //     id: 2,
  //     nameEn: "Accounting Finance",
  //     nameAr: "المحاسبة المالية",
  //     jobCategory: "Engineering Construction/Civil",
  //   },
  //   {
  //     id: 3,
  //     nameEn: "Customer Service Support",
  //     nameAr: "خدمة العملاء/الدعم",
  //     jobCategory: "Engineering Construction/Civil",
  //   },
  //   {
  //     id: 4,
  //     nameEn: "Administration",
  //     nameAr: "إدارة",
  //     jobCategory: "Engineering Construction/Civil",
  //   },
  //   {
  //     id: 5,
  //     nameEn: "Marketing/Advertising",
  //     nameAr: "التسويق/الإعلان",
  //     jobCategory: "Engineering Construction/Civil",
  //   },
  //   {
  //     id: 6,
  //     nameEn: "Sales Retail",
  //     nameAr: "مبيعات التجزئة",
  //     jobCategory: "Engineering Construction/Civil",
  //   },
  //   {
  //     id: 7,
  //     nameEn: "IT/Programming",
  //     nameAr: "تكنولوجيا المعلومات/البرمجة",
  //     jobCategory: "Engineering Construction/Civil",
  //   },
  // ];

  // const columns = [
  //   {
  //     title: "#",
  //     data: "id",
  //     width: "5%",
  //   },
  //   {
  //     title: "Name in english",
  //     data: "nameEn",
  //   },
  //   {
  //     title: "Name in arabic",
  //     data: "nameAr",
  //   },
  //   {
  //     title: "Job Category",
  //     data: "jobCategory",
  //   },
  //   {
  //     title: "Actions",
  //     render: (data, type, row) => {
  //       return `
  //       <div class="flex items-center justify-center gap-2">
  //         <button class="edit">
  //           <i class="bx bx-edit"></i>
  //         </button>
  //         <button class="trash">
  //           <i class="bx bx-trash"></i>

  //         </button>
  //       </div>
  //       `;
  //     },
  //   },
  // ];

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
    <div className="space-y-4">
      <TopSectionNav title={"Job Sector"} />
      <div className="pages_table">
        <div className="container">
          {/* Job Sector */}
          <div className="flex justify-between items-center mb-4">
            {/* <h1 className="text-xl font-bold">Job Categories</h1> */}
            <button className="bg-custom-blue-secundry text-white px-4 py-2 rounded hover:bg-blue-700">
              + Add Job Sector
            </button>
          </div>
          {/* <DataTableForDataInpages data={data} columns={columns} /> */}
          <TableComponent headers={headers} body={body} />
        </div>
      </div>
    </div>
  );
});

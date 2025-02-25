import React, { memo } from "react";
import DataTableForDataInpages from "../../components/shared/DataTableForDataInpages";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import TableComponent from "../../components/shared/TableComponent";

const Jobs = () => {
  // تعريف الأعمدة

  const headers = [
    "#",
    "Created At",
    "Job name in english / arabic",
    "Salary & sector",
    "Company Data",
    "#CV's",
    "Actions",
  ];

  const body = [
    {
      "#": 1,
      "Created At": "2021-08-31",
      "Salary & sector": "Confedential",
      "#CV's": (
        <div className="bg-red-400 w-fit p-1 rounded text-white mx-auto">0</div>
      ),
      "Job name in english / arabic": (
        <div className="flex flex-col gap-1.5">
          <div className="bg-red-500 rounded text-white w-fit p-1 mx-auto">
            Front-End Developer
          </div>{" "}
          <div className="bg-blue-500 rounded text-white w-fit p-1 mx-auto">
            مطور واجهة أمامية
          </div>
        </div>
      ),
      "Company Data": (
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://dmlygcfpc782j.cloudfront.net/media/settings/mainlogo_en.png"
            className="w-20"
          />
          Amtalek
        </div>
      ),
      Actions: `
        <div class="flex items-center justify-center gap-2">
        <button class="show">
<i class="bx bx-show-alt text-xl"></i>
        </button>
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
      "Created At": "2021-08-31",
      "Salary & sector": "Confedential",
      "#CV's": (
        <div className="bg-red-400 w-fit p-1 rounded text-white mx-auto">0</div>
      ),
      "Job name in english / arabic": (
        <div className="flex flex-col gap-1.5">
          <div className="bg-red-500 rounded text-white w-fit p-1 mx-auto">
            Front-End Developer
          </div>{" "}
          <div className="bg-blue-500 rounded text-white w-fit p-1 mx-auto">
            مطور واجهة أمامية
          </div>
        </div>
      ),
      "Company Data": (
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://dmlygcfpc782j.cloudfront.net/media/settings/mainlogo_en.png"
            className="w-20"
          />
          Amtalek
        </div>
      ),
      Actions: `
        <div class="flex items-center justify-center gap-2">
        <button class="show">
<i class="bx bx-show-alt text-xl"></i>
        </button>
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
      "Created At": "2021-08-31",
      "Salary & sector": "Confedential",
      "#CV's": (
        <div className="bg-red-400 w-fit p-1 rounded text-white mx-auto">0</div>
      ),
      "Job name in english / arabic": (
        <div className="flex flex-col gap-1.5">
          <div className="bg-red-500 rounded text-white w-fit p-1 mx-auto">
            Front-End Developer
          </div>{" "}
          <div className="bg-blue-500 rounded text-white w-fit p-1 mx-auto">
            مطور واجهة أمامية
          </div>
        </div>
      ),
      "Company Data": (
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://dmlygcfpc782j.cloudfront.net/media/settings/mainlogo_en.png"
            className="w-20"
          />
          Amtalek
        </div>
      ),
      Actions: `
        <div class="flex items-center justify-center gap-2">
        <button class="show">
<i class="bx bx-show-alt text-xl"></i>
        </button>
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
    <div>
      Jobs
      <div className="flex justify-between items-center mb-4">
        {/* <h1 className="text-xl font-bold">Job Categories</h1> */}
        <button className="bg-custom-blue-secundry text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add new Job
        </button>
      </div>
      {/* <DataTableForDataInpages data={data} columns={columns} /> */}
      <TableComponent headers={headers} body={body} />
    </div>
  );
};

export default memo(Jobs);

// ali
// import React, { useState } from "react";

// const FormSearchCVS = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-white shadow rounded p-4">
//       <form
//         action="https://dashboard.amtalek.com/en/amtalek/search-cv"
//         id="customSearchForm"
//       >
//         <div className="space-y-4">
//           {/* عنوان الأكورديون */}
//           <button
//             type="button"
//             onClick={toggleAccordion}
//             className="w-full bg-[#f46a6a] text-white font-bold text-center text-xl py-2 flex items-center justify-center"
//           >
//             <i className="fa fa-search mr-2"></i>
//             Search CVs in system
//           </button>

//           {/* محتوى الأكورديون */}
//           {isOpen && (
//             <div className="mt-4">
//               {/* شبكة الحقول: عمود واحد للموبايل، عمودين للشاشات المتوسطة، و3 أعمدة للشاشات الكبيرة */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {/* 1. Job Keyword */}
//                 <div>
//                   <label
//                     htmlFor="keyword"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Job Keyword
//                   </label>
//                   <input
//                     id="keyword"
//                     name="keyword"
//                     type="text"
//                     placeholder="Job Keyword"
//                     className="border border-gray-300 rounded p-2 w-full"
//                   />
//                 </div>

//                 {/* 2. Cities */}
//                 <div>
//                   <label
//                     htmlFor="city_id"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Cities
//                   </label>
//                   <select
//                     id="city_id"
//                     name="city_id"
//                     className="border border-gray-300 rounded p-2 w-full"
//                   >
//                     <option value="">Select</option>
//                     <option value="2">Giza</option>
//                     <option value="1">Cairo</option>
//                   </select>
//                 </div>

//                 {/* 3. Select Category */}
//                 <div>
//                   <label
//                     htmlFor="category_id"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Select Category
//                   </label>
//                   <select
//                     id="category_id"
//                     name="category_id"
//                     className="border border-gray-300 rounded p-2 w-full"
//                   >
//                     <option value="">Choose ...</option>
//                     <option value="21">Tele Sales</option>
//                     <option value="20">Business Development</option>
//                     <option value="19">
//                       Real-estate Sales Maintenance Management
//                     </option>
//                     <option value="79">Financial Analysis</option>
//                     <option value="80">Accounting Supervisor</option>
//                     <option value="81">Commerce</option>
//                     <option value="82">Tax Accounting</option>
//                     <option value="83">CMA</option>
//                     <option value="84">Financial Management</option>
//                     <option value="85">Accounts Payable</option>
//                     <option value="86">Microsoft dynamics 365</option>
//                     <option value="87">Payroll</option>
//                     <option value="88">ERP</option>
//                     <option value="89">Financial Planning</option>
//                     <option value="90">Financial Reporting</option>
//                     <option value="91">Budget Management</option>
//                     <option value="92">IFRS</option>
//                     <option value="93">SAP</option>
//                     <option value="94">Excel</option>
//                     <option value="95">CMA</option>
//                     <option value="96">Auditing</option>
//                     <option value="76">Leadership</option>
//                     <option value="77">Corporate Law</option>
//                     <option value="78">Commercial Law</option>
//                     <option value="75">Production Cycle</option>
//                     <option value="64">Management</option>
//                     <option value="65">Business Administration</option>
//                     <option value="66">Payroll</option>
//                     <option value="67">Recruitment</option>
//                     <option value="68">Communication</option>
//                     <option value="69">Document Control</option>
//                     <option value="70">Data Entry</option>
//                     <option value="71">Computer Skills</option>
//                     <option value="72">Managerial</option>
//                     <option value="73">Fluent English</option>
//                     <option value="74">Legal Advisor</option>
//                     <option value="63">Client Relations</option>
//                     <option value="59">Customer Retention</option>
//                     <option value="4">HTML/CSS</option>
//                     <option value="5">PHP Laravel</option>
//                     <option value="6">Node Js Developer</option>
//                     <option value="7">React</option>
//                     <option value="8">Next js</option>
//                     <option value="9">SQL</option>
//                     <option value="10">My SQL</option>
//                     <option value="11">Oracle</option>
//                     <option value="12">SSL Certificates</option>
//                     <option value="13">Apache Server</option>
//                     <option value="14">C++</option>
//                   </select>
//                 </div>

//                 {/* 4. Sector */}
//                 <div>
//                   <label
//                     htmlFor="job_sector_id"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Sector
//                   </label>
//                   <select
//                     id="job_sector_id"
//                     name="job_sector_id"
//                     className="border border-gray-300 rounded p-2 w-full"
//                   >
//                     <option value="">Select</option>
//                     <option value="88">Site Engineer</option>
//                     <option value="87">Business Development Engineer</option>
//                     <option value="86">Designing Engineer</option>
//                     <option value="85">Cost Control Engineer</option>
//                     <option value="84">Architectural Engineer</option>
//                     <option value="83">Project Coordinator</option>
//                     <option value="82">Civil Planning Engineer</option>
//                     <option value="81">Project Management Engineer</option>
//                     <option value="80">Mechanical Engineer</option>
//                     <option value="79">Project Sales Engineer</option>
//                     <option value="78">Construction Engineer</option>
//                     <option value="77">Civil Engineer</option>
//                     <option value="76">Treasury Accountant</option>
//                     <option value="75">Collection Officer</option>
//                     <option value="74">Accounting Manager</option>
//                     <option value="73">Accounting Analyst</option>
//                     <option value="72">Chief Accountant</option>
//                     <option value="71">Bank Accountant</option>
//                     <option value="70">Tax Accountant</option>
//                     <option value="69">Sales Ledger accountant</option>
//                     <option value="68">Accountant</option>
//                     <option value="67">Auditor</option>
//                     <option value="66">Community Section Head</option>
//                     <option value="65">Case Management</option>
//                     <option value="64">Cost Controller</option>
//                     <option value="63">Logistics</option>
//                     <option value="62">Administrative Coordinator</option>
//                     <option value="61">Office Assistant</option>
//                     <option value="60">Receptionist</option>
//                     <option value="59">Legal</option>
//                     <option value="58">Document Controller</option>
//                     <option value="57">CEO</option>
//                     <option value="56">Branch Manager</option>
//                     <option value="55">Office Administrator</option>
//                     <option value="54">Operation Manager</option>
//                     <option value="53">Operation Agent</option>
//                     <option value="52">Secretary</option>
//                     <option value="51">HR</option>
//                     <option value="50">Personal Trainer</option>
//                     <option value="49">Back Office Agent</option>
//                     <option value="48">Software Quality Control</option>
//                     <option value="47">Quality Control</option>
//                     <option value="46">Customer Service Manager</option>
//                     <option value="45">Call Center Agent</option>
//                     <option value="44">Customer Service Agent</option>
//                     <option value="43">Office Administrator</option>
//                     <option value="42">Account Advisor</option>
//                     <option value="41">
//                       Email &amp; Chat Customer Service
//                     </option>
//                     <option value="40">Marketing Executive</option>
//                     <option value="39">Order Processing Specialist</option>
//                     <option value="38">Organic Marketer</option>
//                     <option value="37">Photographer</option>
//                     <option value="36">Art Director</option>
//                     <option value="35">Reels Creator</option>
//                     <option value="34">Public Relation Representative</option>
//                     <option value="33">Motion Graphics</option>
//                     <option value="32">Performance Marketing</option>
//                     <option value="31">Marketing Specialist</option>
//                     <option value="30">Product Manager</option>
//                     <option value="29">Product Manager</option>
//                     <option value="28">Sales Manager</option>
//                     <option value="27">Marketing Manager</option>
//                     <option value="26">Content Writer</option>
//                     <option value="25">Video Animator</option>
//                     <option value="24">Graphic Designer</option>
//                     <option value="23">Digital Marketing</option>
//                     <option value="22">Engineer Sales</option>
//                     <option value="21">Tele Sales</option>
//                     <option value="20">Business Development</option>
//                     <option value="19">Real-estate Sales</option>
//                     <option value="18">Software Sales</option>
//                     <option value="17">Software Analyst</option>
//                     <option value="16">Chief Technology Officer</option>
//                     <option value="15">SAP Developer</option>
//                     <option value="14">Security Engineer</option>
//                     <option value="13">Dev Ops Engineer</option>
//                     <option value="12">Software Tester</option>
//                     <option value="11">Odoo Developer</option>
//                     <option value="10">UI/UX Designer</option>
//                     <option value="9">IT Admin</option>
//                     <option value="8">Mernstack Developer</option>
//                     <option value="7">Full-Stack Developer</option>
//                     <option value="6">Server Administrator</option>
//                     <option value="5">Flutter Developer</option>
//                     <option value="4">IOS Developer</option>
//                     <option value="3">Android Developer</option>
//                     <option value="2">Frontend Developer</option>
//                     <option value="1">Backend Developer</option>
//                   </select>
//                 </div>

//                 {/* 5. Job Types */}
//                 <div>
//                   <label
//                     htmlFor="type_id"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Job Types
//                   </label>
//                   <select
//                     id="type_id"
//                     name="type_id"
//                     className="border border-gray-300 rounded p-2 w-full"
//                   >
//                     <option value="">Select</option>
//                     <option value="5">Shift Base</option>
//                     <option value="4">Internship</option>
//                     <option value="3">Freelance</option>
//                     <option value="2">Part Time</option>
//                     <option value="1">Full Time</option>
//                   </select>
//                 </div>

//                 {/* 6. All work place */}
//                 <div>
//                   <label
//                     htmlFor="work_palace_id"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     All work place
//                   </label>
//                   <select
//                     id="work_palace_id"
//                     name="work_palace_id"
//                     className="border border-gray-300 rounded p-2 w-full"
//                   >
//                     <option value="">Select</option>
//                     <option value="3">Remote</option>
//                     <option value="2">Hybrid</option>
//                     <option value="1">On-Site</option>
//                   </select>
//                 </div>
//               </div>

//               {/* زر البحث */}
//               <div className="mt-4">
//                 <button
//                   type="submit"
//                   className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center"
//                 >
//                   <i className="fa fa-search mr-2" aria-hidden="true"></i>
//                   Search
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormSearchCVS;
// FormSearchCVS.jsx
import React, { useState } from "react";
import Combobox from "../../../components/ui/Combobox";
// import Combobox from "./Combobox";

// بيانات تجريبية لعنصر الـ Combobox
const comboboxData = [
  { key: "1", value: "Remote" },
  { key: "2", value: "Hybrid" },
  { key: "3", value: "On-Site" },
];

const comboboxDataCities = [
  { key: "1", value: "Shift Base" },
  { key: "2", value: "Internship" },
  { key: "3", value: "Freelance" },
  { key: "4", value: "Part Time" },
  { key: "5", value: "Full Time" },
];

const sectorData = [
  { key: "88", value: "Site Engineer" },
  { key: "87", value: "Business Development Engineer" },
  { key: "86", value: "Designing Engineer" },
  { key: "85", value: "Cost Control Engineer" },
  { key: "84", value: "Architectural Engineer" },
  { key: "83", value: "Project Coordinator" },
  { key: "82", value: "Civil Planning Engineer" },
  { key: "81", value: "Project Management Engineer" },
  { key: "80", value: "Mechanical Engineer" },
  { key: "79", value: "Project Sales Engineer" },
  { key: "78", value: "Construction Engineer" },
  { key: "77", value: "Civil Engineer" },
  { key: "76", value: "Treasury Accountant" },
  { key: "75", value: "Collection Officer" },
  { key: "74", value: "Accounting Manager" },
  { key: "73", value: "Accounting Analyst" },
  { key: "72", value: "Chief Accountant" },
  { key: "71", value: "Bank Accountant" },
  { key: "70", value: "Tax Accountant" },
  { key: "69", value: "Sales Ledger accountant" },
  { key: "68", value: "Accountant" },
  { key: "67", value: "Auditor" },
  { key: "66", value: "Community Section Head" },
  { key: "65", value: "Case Management" },
  { key: "64", value: "Cost Controller" },
  { key: "63", value: "Logistics" },
  { key: "62", value: "Administrative Coordinator" },
  { key: "61", value: "Office Assistant" },
  { key: "60", value: "Receptionist" },
  { key: "59", value: "Legal" },
  { key: "58", value: "Document Controller" },
  { key: "57", value: "CEO" },
  { key: "56", value: "Branch Manager" },
  { key: "55", value: "Office Administrator" },
  { key: "54", value: "Operation Manager" },
  { key: "53", value: "Operation Agent" },
  { key: "52", value: "Secretary" },
  { key: "51", value: "HR" },
  { key: "50", value: "Personal Trainer" },
  { key: "49", value: "Back Office Agent" },
  { key: "48", value: "Software Quality Control" },
  { key: "47", value: "Quality Control" },
  { key: "46", value: "Customer Service Manager" },
  { key: "45", value: "Call Center Agent" },
  { key: "44", value: "Customer Service Agent" },
  { key: "43", value: "Office Administrator" },
  { key: "42", value: "Account Advisor" },
  { key: "41", value: "Email & Chat Customer Service" },
  { key: "40", value: "Marketing Executive" },
  { key: "39", value: "Order Processing Specialist" },
  { key: "38", value: "Organic Marketer" },
  { key: "37", value: "Photographer" },
  { key: "36", value: "Art Director" },
  { key: "35", value: "Reels Creator" },
  { key: "34", value: "Public Relation Representative" },
  { key: "33", value: "Motion Graphics" },
  { key: "32", value: "Performance Marketing" },
  { key: "31", value: "Marketing Specialist" },
  { key: "30", value: "Product Manager" },
  { key: "29", value: "Product Manager" },
  { key: "28", value: "Sales Manager" },
  { key: "27", value: "Marketing Manager" },
  { key: "26", value: "Content Writer" },
  { key: "25", value: "Video Animator" },
  { key: "24", value: "Graphic Designer" },
  { key: "23", value: "Digital Marketing" },
  { key: "22", value: "Engineer Sales" },
  { key: "21", value: "Tele Sales" },
  { key: "20", value: "Business Development" },
  { key: "19", value: "Real-estate Sales" },
  { key: "18", value: "Software Sales" },
  { key: "17", value: "Software Analyst" },
  { key: "16", value: "Chief Technology Officer" },
  { key: "15", value: "SAP Developer" },
  { key: "14", value: "Security Engineer" },
  { key: "13", value: "Dev Ops Engineer" },
  { key: "12", value: "Software Tester" },
  { key: "11", value: "Odoo Developer" },
  { key: "10", value: "UI/UX Designer" },
  { key: "9", value: "IT Admin" },
  { key: "8", value: "Mernstack Developer" },
  { key: "7", value: "Full-Stack Developer" },
  { key: "6", value: "Server Administrator" },
  { key: "5", value: "Flutter Developer" },
  { key: "4", value: "IOS Developer" },
  { key: "3", value: "Android Developer" },
  { key: "2", value: "Frontend Developer" },
  { key: "1", value: "Backend Developer" },
];

const categoryData = [
  { key: "21", value: "Tele Sales" },
  { key: "20", value: "Business Development" },
  {
    key: "19",
    value: "Real-estate Sales Maintenance Management",
  },
  { key: "79", value: "Financial Analysis" },
  { key: "80", value: "Accounting Supervisor" },
  { key: "81", value: "Commerce" },
  { key: "82", value: "Tax Accounting" },
  { key: "83", value: "CMA" },
  { key: "84", value: "Financial Management" },
  { key: "85", value: "Accounts Payable" },
  { key: "86", value: "Microsoft dynamics 365" },
  { key: "87", value: "Payroll" },
  { key: "88", value: "ERP" },
  { key: "89", value: "Financial Planning" },
  { key: "90", value: "Financial Reporting" },
  { key: "91", value: "Budget Management" },
  { key: "92", value: "IFRS" },
  { key: "93", value: "SAP" },
  { key: "94", value: "Excel" },
  { key: "95", value: "CMA" },
  { key: "96", value: "Auditing" },
  { key: "76", value: "Leadership" },
  { key: "77", value: "Corporate Law" },
  { key: "78", value: "Commercial Law" },
  { key: "75", value: "Production Cycle" },
  { key: "64", value: "Management" },
  { key: "65", value: "Business Administration" },
  { key: "66", value: "Payroll" },
  { key: "67", value: "Recruitment" },
  { key: "68", value: "Communication" },
  { key: "69", value: "Document Control" },
  { key: "70", value: "Data Entry" },
  { key: "71", value: "Computer Skills" },
  { key: "72", value: "Managerial" },
  { key: "73", value: "Fluent English" },
  { key: "74", value: "Legal Advisor" },
  { key: "63", value: "Client Relations" },
  { key: "59", value: "Customer Retention" },
  { key: "4", value: "HTML/CSS" },
  { key: "5", value: "PHP Laravel" },
  { key: "6", value: "Node Js Developer" },
  { key: "7", value: "React" },
  { key: "8", value: "Next js" },
  { key: "9", value: "SQL" },
  { key: "10", value: "My SQL" },
  { key: "11", value: "Oracle" },
  { key: "12", value: "SSL Certificates" },
  { key: "13", value: "Apache Server" },
  { key: "14", value: "C++" },
];
const FormSearchCVS = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <form
        action="https://dashboard.amtalek.com/en/amtalek/search-cv"
        id="customSearchForm"
      >
        <div className="space-y-4">
          {/* عنوان الأكورديون */}
          <button
            type="button"
            onClick={toggleAccordion}
            className="w-full bg-[#f46a6a] text-white font-bold text-center text-xl py-2 flex items-center justify-center"
          >
            <i className="fa fa-search mr-2"></i>
            Search CVs in system
          </button>

          {/* محتوى الأكورديون */}
          {isOpen && (
            <div className="mt-4">
              {/* شبكة الحقول: عمود واحد للموبايل، عمودين للشاشات المتوسطة، و3 أعمدة للشاشات الكبيرة */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Job Keyword */}
                <div>
                  <label
                    htmlFor="keyword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Job Keyword
                  </label>
                  <input
                    id="keyword"
                    name="keyword"
                    type="text"
                    placeholder="Job Keyword"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>

                {/* 2. Cities */}
                <div>
                  <label
                    htmlFor="city_id"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Cities
                  </label>
                  <select
                    id="city_id"
                    name="city_id"
                    className="border border-gray-300 rounded p-2 w-full"
                  >
                    <option value="">Select</option>
                    <option value="2">Giza</option>
                    <option value="1">Cairo</option>
                  </select>
                </div>

                {/* 3. Select Category */}
                <div>
                  <label
                    htmlFor="category_id"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Category
                  </label>
                  <Combobox data={categoryData} />
                </div>

                {/* 4. Sector */}
                <div>
                  <label
                    htmlFor="job_sector_id"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sector
                  </label>

                  <Combobox data={sectorData} />
                </div>

                {/* 5. Job Types */}
                <div>
                  <label
                    htmlFor="type_id"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Job Types
                  </label>
                  <Combobox data={comboboxDataCities} />

                  {/* <select
                    id="type_id"
                    name="type_id"
                    className="border border-gray-300 rounded p-2 w-full"
                  >
                    <option value="">Select</option>
                    <option value="5">Shift Base</option>
                    <option value="4">Internship</option>
                    <option value="3">Freelance</option>
                    <option value="2">Part Time</option>
                    <option value="1">Full Time</option>
                  </select> */}
                </div>

                {/* 6. All work place */}
                <div>
                  <label
                    htmlFor="work_palace_id"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    All work place
                  </label>
                  <Combobox data={comboboxData} />
                  {/* <select
                    id="work_palace_id"
                    name="work_palace_id"
                    className="border border-gray-300 rounded p-2 w-full"
                  >
                    <option value="">Select</option>
                    <option value="3">Remote</option>
                    <option value="2">Hybrid</option>
                    <option value="1">On-Site</option>
                  </select> */}
                </div>

                {/* 7. حقل Combobox ديناميكي */}
                {/* <div className="col-span-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dynamic Search
                  </label>
                  <Combobox data={comboboxData} />
                </div> */}
              </div>

              {/* زر البحث */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center"
                >
                  <i className="fa fa-search mr-2" aria-hidden="true"></i>
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSearchCVS;

import { useState } from "react";
import { FaBriefcase, FaShareAltSquare } from "react-icons/fa";
import {
  FiHome,
  FiGrid,
  FiUser,
  FiMenu,
  FiChevronDown,
  FiLayers,
  FiColumns,
  FiSidebar,
  FiRotateCw,
  FiSquare,
  FiMoon,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // حالات القوائم الفرعية
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [isCallSubmenuOpen, setIsCallSubmenuOpen] = useState(false);
  const [isSuperAdminOpen, setIsSuperAdminOpen] = useState(false);
  const [isPackagesManagmentinOpen, setIsPackagesManagmentOpen] =
    useState(false);
  // حالة طي/فتح الـ sidebar
  const [isCollapsed, setIsCollapsed] = useState(false);

  // دالة للانتقال بسلاسة من حالة max-height=0 إلى قيمة عالية عند الفتح
  const slideClass = (open) =>
    `overflow-y-auto transition-all duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
      open ? "max-h-[1000px]" : "max-h-0"
    }`;

  return (
    <div
      className={`bg-gray-800 overflow-y-auto text-white h-screen p-4 relative transition-all duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* زر تبديل عرض الـ sidebar */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded transition-all duration-300"
      >
        <FiMenu className="text-xl" />
      </button>

      {/* قسم الملف الشخصي */}
      <ul className="mb-6">
        <li className="flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300">
          <a href="profile.html" className="flex items-center">
            {!isCollapsed && (
              <div className="user-names">
                <img
                  src="images/navEnLogo.png"
                  alt="Profile"
                  className="w-auto h-auto "
                />
                {/* <h5 className="text-lg font-semibold">Adrian Davies</h5>
                <h6 className="text-sm text-gray-400">Tech Lead</h6> */}
              </div>
            )}
          </a>
        </li>
      </ul>

      {/* القائمة الرئيسية */}
      <ul>
        <li className="mb-4">
          {!isCollapsed && (
            <h6 className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
              Dashboard
            </h6>
          )}
          <ul>
            {/* Dashboard */}
            <li className="mb-2">
              <Link
                to="/"
                className="flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300"
              >
                {/* <FiLayers className="text-xl mr-3" /> */}
                <FiHome className="text-xl mr-3" />
                {!isCollapsed && <span>Dashboard</span>}
              </Link>
            </li>

            {/* Application */}
            <li className="mb-2">
              {!isCollapsed && (
                <h6 className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Send Notifications
                </h6>
              )}
              <button
                onClick={() => setIsAppOpen(!isAppOpen)}
                className="w-full flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300 focus:outline-none"
              >
                <FiGrid className="text-xl mr-3" />
                {!isCollapsed && <span>Send Notifications</span>}
                {!isCollapsed && (
                  <FiChevronDown
                    className={`ml-auto transition-transform duration-300 ${
                      isAppOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {!isCollapsed && (
                <ul className={`ml-8 mt-2 space-y-1 ${slideClass(isAppOpen)}`}>
                  <li>
                    <Link
                      to="/send-notification"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Send Notifications
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sent-notifications"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      All sent notifications
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Super Admin */}
            <li className="mb-2">
              {!isCollapsed && (
                <h6 className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Jobs System
                </h6>
              )}

              <button
                onClick={() => setIsSuperAdminOpen(!isSuperAdminOpen)}
                className="w-full flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300 focus:outline-none"
              >
                <FaBriefcase className="text-xl mr-3" />
                {!isCollapsed && <span>Jobs System</span>}
                {!isCollapsed && (
                  <FiChevronDown
                    className={`ml-auto transition-transform duration-300 ${
                      isSuperAdminOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {!isCollapsed && (
                <ul
                  className={`ml-8 mt-2 space-y-1 ${slideClass(
                    isSuperAdminOpen
                  )}`}
                >
                  <li>
                    <Link
                      to="/job-categories"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Job Categories
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/job-sector"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Job Sector
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/job-types"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Jobs Types
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/job-types"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Job Types
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/job-qualification"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Qualifications
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/work-place"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Work Place
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Jobs
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/search-cv-createria"
                      className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                    >
                      Search CVs
                      <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                        20
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </li>

        {/* قسم Layout */}
        <li>
          {!isCollapsed && (
            <h6 className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
              System logs
            </h6>
          )}
          <ul>
            <li className="mb-2">
              <Link
                to="layout-mini.html"
                className="flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300"
              >
                <FiLayers className="text-xl mr-3" />
                {!isCollapsed && <span>System logs</span>}
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="layout-horizontal-single.html"
                className="flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300"
              >
                <FiColumns className="text-xl mr-3" />
                {!isCollapsed && <span>Users Evaluations</span>}
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="layout-without-header.html"
                className="flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300"
              >
                <FiSidebar className="text-xl mr-3" />
                {!isCollapsed && <span>Email Subscription</span>}
              </Link>
            </li>
          </ul>
        </li>

        {/* قسم Hierarchical Tree */}
        <li>
          {!isCollapsed && (
            <h6 className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
              Hierarchical Tree
            </h6>
          )}
          <ul>
            <li className="mb-2">
              <Link
                to=""
                className="flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300"
              >
                <FaShareAltSquare className="text-xl mr-3" />
                {!isCollapsed && <span>Hierarchical Tree</span>}
              </Link>
            </li>
          </ul>
        </li>

        {/* قسم Hierarchical Tree */}

        <li className="mb-2">
          {!isCollapsed && (
            <h6 className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
              Packages Managment
            </h6>
          )}

          <button
            onClick={() =>
              setIsPackagesManagmentOpen(!isPackagesManagmentinOpen)
            }
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300 focus:outline-none"
          >
            <FaBriefcase className="text-xl mr-3" />
            {!isCollapsed && (
              <span className="text-sm">Packages Managment</span>
            )}
            {!isCollapsed && (
              <FiChevronDown
                className={`ml-auto transition-transform duration-300 ${
                  isPackagesManagmentinOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
          {!isCollapsed && (
            <ul
              className={`ml-8 mt-2 space-y-1 ${slideClass(
                isPackagesManagmentinOpen
              )}`}
            >
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Taxes
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <li className="mb-2">
                  <button
                    onClick={() => setIsSuperAdminOpen(!isSuperAdminOpen)}
                    className="w-full flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300 focus:outline-none"
                  >
                    <FaBriefcase className="text-xl mr-3" />
                    {!isCollapsed && <span>Packages</span>}
                    {!isCollapsed && (
                      <FiChevronDown
                        className={`ml-auto transition-transform duration-300 ${
                          isSuperAdminOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {!isCollapsed && (
                    <ul
                      className={`ml-8 mt-2 space-y-1 ${slideClass(
                        isSuperAdminOpen
                      )}`}
                    >
                      <li>
                        <Link
                          to="dashboard.html"
                          className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                        >
                          Sort User Packages
                          <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                            20
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="company.html"
                          className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                        >
                          Sort Brokers Packages
                          <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                            20
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="subscription.html"
                          className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                        >
                          Add package
                          <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                            20
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="packages.html"
                          className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                        >
                          Show All
                          <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                            20
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="domain.html"
                          className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                        >
                          Qualifications
                          <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                            20
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                        >
                          Package Page Content
                          <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                            20
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                        >
                          Featured Package
                          <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                            20
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </li>
              <li>
                <Link
                  to="subscription.html"
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Job Sector
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Job Types
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Qualifications
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Work Place
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Jobs
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Search CVs
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* قسم Accounting System */}

        <li className="mb-2">
          {!isCollapsed && (
            <h6 className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
              Accounting System
            </h6>
          )}

          <button
            onClick={() =>
              setIsPackagesManagmentOpen(!isPackagesManagmentinOpen)
            }
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded transition-all duration-300 focus:outline-none"
          >
            <FaBriefcase className="text-xl mr-3" />
            {!isCollapsed && <span>Accounting System</span>}
            {!isCollapsed && (
              <FiChevronDown
                className={`ml-auto transition-transform duration-300 ${
                  isPackagesManagmentinOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
          {!isCollapsed && (
            <ul
              className={`ml-8 mt-2 space-y-1 ${slideClass(
                isPackagesManagmentinOpen
              )}`}
            >
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Accounting Company
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="subscription.html"
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  All invoices
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Addons invoices
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Add Balance
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Expenses Sources
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Expenses
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Salary Of Agents
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Send Commission
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="p-2 hover:bg-gray-700 rounded transition-all duration-300 flex items-center justify-between"
                >
                  Bounus & Penalties
                  <span className="px-1 py-[2px] rounded-full bg-red-500 text-sm">
                    20
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

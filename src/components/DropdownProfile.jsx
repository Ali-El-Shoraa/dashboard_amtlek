import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import Transition from "../utils/Transition";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

// import UserAvatar from "../images/user-avatar-32.png";

function DropdownProfile({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm text-gray-600 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-white">
            Acme Inc.
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      {dropdownOpen && (
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div
            className="absolute right-0 mt-2"
            style={{ transform: "translate(0, 26px)" }}
            data-popper-placement="bottom-end"
          >
            <div className="bg-white shadow-lg rounded">
              {/* Card Header */}
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <span className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="https://ali-el-shoraa.netlify.app/imgs/ali-eui1.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </span>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      Ali El-Shoraa
                    </h5>
                    <p className="text-xs text-gray-500">
                      ali.m.elshoraa@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              {/* Card Body */}
              <div className="p-4">
                <Link
                  to="profile.html"
                  className="flex items-center p-2 py-2 hover:bg-gray-100 transition-all rounded duration-300 hover:translate-x-2"
                >
                  <i className="ti ti-user-circle mr-1"></i>
                  <span className="flex items-center gap-2">
                    <CgProfile />
                    My Profile
                  </span>
                </Link>
                <Link
                  to="bussiness-settings.html"
                  className="flex items-center p-2 py-2 hover:bg-gray-100 transition-all rounded duration-300 hover:translate-x-2"
                >
                  <i className="ti ti-settings mr-1"></i>
                  <span className="flex items-center gap-2">
                    <IoSettingsOutline />
                    Settings
                  </span>
                </Link>

                <Link
                  to="/"
                  className="flex items-center p-2 py-2 hover:bg-gray-100 transition-all rounded duration-300 hover:translate-x-2"
                >
                  <i className="ti ti-question-mark mr-1"></i>
                  <span className="transition-transform duration-300 hover:translate-x-2">
                    Languge
                  </span>
                </Link>
              </div>
              {/* Card Footer */}
              <div className="p-4 border-t">
                <Link
                  to="/"
                  className="flex items-center p-2 py-2 hover:bg-gray-100 transition-all rounded duration-300 hover:translate-x-2"
                >
                  <i className="ti ti-login mr-2"></i>
                  <span className="flex items-center gap-2">
                    <CiLogin />
                    Logout
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownProfile;

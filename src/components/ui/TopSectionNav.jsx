import React from "react";
import { Link } from "react-router-dom";

const TopSectionNav = ({ route = "/", title }) => {
  return (
    <section className="bg-[var(--color-custome-gray-secundry)] p-5">
      <div className="container mx-auto flex items-center justify-between capitalize">
        <div className="p-2">
          <h1 className="title">{title}</h1>

          <nav className="py-2">
            <ul className="flex items-center gap-2">
              <li>
                <Link to="/" className="w-full outline-none">
                  <i className="bx bx-home-alt text-xl"></i>
                </Link>
              </li>

              <li className="breadcrumb-item text-xs lg:text-lg">
                <Link to={route}>{title}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TopSectionNav);

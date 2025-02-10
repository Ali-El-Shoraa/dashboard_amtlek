import { Link } from "react-router-dom";

export default function CardEAmployees() {
  return (
    <div className="">
      <Link
        className="flex items-center justify-between bg-white rounded-md p-5"
        to="https://dashboard.amtalek.com/en/amtalek/vendors"
      >
        <div>
          <h4 className="mb-1 mt-1">
            <span data-plugin="counterup">89</span>
          </h4>
          <p className="text-muted mb-0">Vendors</p>
        </div>

        <img
          src="https://dmlygcfpc782j.cloudfront.net/assets/images/icons/vendors.png"
          width={40}
          alt="design"
        />
      </Link>
    </div>
  );
}

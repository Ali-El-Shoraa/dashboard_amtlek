export default function CardAccounting({ bg_color_card }) {
  return (
    <div>
      <a
        href="https://dashboard.amtalek.com/en/amtalek/accounting-data"
        className={`flex items-center justify-between text-white p-5 rounded-xl ${bg_color_card}`}
      >
        <div>
          <h4 className="">
            <span>0</span>
            EGP
          </h4>
          <p className="">Income 02 - 2025</p>
        </div>

        <img
          src="https://dmlygcfpc782j.cloudfront.net/assets/images/icons/currency.png"
          alt="mony"
          height={60}
          width={60}
        />
      </a>
    </div>
  );
}

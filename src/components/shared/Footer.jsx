const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-box-shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm">{new Date().getFullYear()} © Amtalek</div>
          <div className="text-sm mt-2 sm:mt-0">
            Amtalek Created with <i className="mdi mdi-heart text-red-500"></i>{" "}
            by{" "}
            <a
              href="https://e-ramo.net/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              e-RAMO For Digital Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

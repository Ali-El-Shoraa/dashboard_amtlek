import React, { useState, useRef, useEffect } from "react";

const Combobox = ({ data }) => {
  const [query, setQuery] = useState(""); // حالة لحفظ نص البحث
  const [selectedItem, setSelectedItem] = useState(null); // حالة لحفظ العنصر المحدد
  const [isOpen, setIsOpen] = useState(false); // حالة لفتح/إغلاق القائمة
  const comboboxRef = useRef(null); // مرجع للكومبوننت
  const ulRef = useRef(null); // مرجع لقائمة العناصر

  // فلترة البيانات بناءً على نص البحث
  const filteredData = data.filter((item) =>
    item.value.toLowerCase().includes(query.toLowerCase())
  );

  // عند تغيير نص البحث
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true); // افتح القائمة عند الكتابة
  };

  // عند اختيار عنصر من القائمة
  const handleSelectItem = (item) => {
    setSelectedItem(item.value); // حفظ الـ key كقيمة محددة
    setQuery(""); // تفريغ حقل البحث
    setIsOpen(false); // أغلق القائمة بعد الاختيار
  };

  // إغلاق القائمة عند الضغط خارج الكومبوننت
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery(""); // تفريغ حقل البحث عند الإغلاق
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // إضافة انتقالات عند فتح/إغلاق القائمة
  useEffect(() => {
    if (ulRef.current) {
      if (isOpen) {
        ulRef.current.style.opacity = "1";
        ulRef.current.style.transform = "translateY(0)";
      } else {
        ulRef.current.style.opacity = "0";
        ulRef.current.style.transform = "translateY(-10px)";
      }
    }
  }, [isOpen]);

  // تفريغ حقل البحث عند فتح القائمة
  useEffect(() => {
    if (isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <div ref={comboboxRef} className="relative w-full">
      {/* حقل الإدخال الرئيسي */}
      <div
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // افتح/أغلق القائمة عند النقر
      >
        <input
          type="text"
          value={selectedItem || ""}
          readOnly
          placeholder="Select an item..."
          className="w-full p-2 text-sm outline-none rounded-md border border-gray-300 focus:border-blue-500"
        />
        {/* السهم */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {isOpen ? (
            <i className="h-5 w-5 bx bx-chevron-up text-gray-400" />
          ) : (
            <i className="h-5 w-5 bx bx-chevron-down text-gray-400" />
          )}
        </div>
      </div>

      {/* قائمة العناصر */}
      <ul
        ref={ulRef}
        className={`absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-b-md shadow-lg max-h-48 overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {/* حقل البحث داخل القائمة */}
        <li className="p-2 border-b border-gray-200">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search here..."
            className="w-full p-1 text-sm outline-none border border-gray-300 rounded focus:border-blue-500"
          />
        </li>

        {/* عرض العناصر المفلترة */}
        {filteredData.map((item, index) => (
          <li
            key={item.key} // استخدام الـ key كمعرف فريد
            onClick={() => handleSelectItem(item)}
            className="p-2 cursor-pointer hover:bg-gray-200 border-b border-gray-200 last:border-b-0"
          >
            {item.value} {/* عرض الـ value */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Combobox);

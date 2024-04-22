import React from "react";
import { Link } from "react-router-dom";

function Tabs() {
  return (
    <div className="text-lg font-medium text-center text-black border-b border-gray-200  my-10">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <Link to="/"
            className="inline-block p-4 text-[#F85A47] border-b-2 border-[#F85A47] rounded-t-lg active "
            aria-current="page"
          >
            Residential Property
          </Link>
        </li>
        <li className="me-2">
          <Link to="/"
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#F85A47] hover:border-[#F85A47]"
          >
            Commercial Property
          </Link>
        </li>
        <li className="me-2">
        <Link to="/"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#F85A47] hover:border-[#F85A47]"
          >
            Agriculture Property
            </Link>
        </li>
        <li className="me-2">
          <Link to="/"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#F85A47] hover:border-[#F85A47]"
          >
            Industrial Property
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;

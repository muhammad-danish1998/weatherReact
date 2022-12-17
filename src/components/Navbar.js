import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600  body-font bg-blue-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap  items-center text-base justify-center">
            <input
              type={"text"}
              placeholder="Enter Country"
              className="border border-gray p-2 xl:w-full"
            />
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Modal from "./modal";
function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <nav
      className=" navbar bg-white
 fixed w-full z-9 top-0"
    >
      <div className="max-w-6xl mx-auto px-10 ">
        <div className="flex justify-around">
          <div className="flex space-x-4">
            <div>
              <a href="/">
                {" "}
                <span>
                  <h2 className=" italic mt-2 p-2 flex text-blue-900 font-extrabold text-3xl hover:text-gray-900">
                    Travel Site
                  </h2>
                </span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6 hidden md:flex">
            <a href="/" className="hover:text-lime-700">
              Home
            </a>
            <a href="/" className="hover:text-lime-700">
              My Bookings
            </a>
            <a href="/" className="hover:text-lime-700">
              About Us
            </a>
            <a href="/" className="hover:text-lime-700">
              Bookings support
            </a>
            <a
              onClick={() => setShowModal(true)}
              className="hover:text-lime-700"
            >
              Agent Login
            </a>
          </div>
          {/* //mobile */}

          <div className="md:hidden flex items-center">
            <button
              onClick={handleClick}
              className='mobile-menu-button  aria-controls="mobile-menu" aria-expanded="false" '
            >
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#4A5568"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobiel menu */}

      <div className={open ? "mobile-menu" : "mobile-menu hidden"}>
        <div className="">
          <a href="/" className="hover:text-lime-700">
            Home
          </a>
          <a href="/" className="hover:text-lime-700">
            My Bookings
          </a>
          <a href="/" className="hover:text-lime-700">
            About Us
          </a>
          <a href="/" className="hover:text-lime-700">
            Bookings support
          </a>
          <a href="/" className="hover:text-lime-700">
            Agent Login
          </a>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </nav>
  );
}

export default Navbar;

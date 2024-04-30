import { useState } from "react";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      {/* Menu bar */}
      {isMenuOpen && (
        <div
          className={`absolute lg:fixed top-0 right-0 h-screen bg-black text-white w-1/2 transition-all duration-300 ease-in-out z-10`}
        >
          <div className="flex justify-end p-4">
            <button className="text-white text-2xl" onClick={toggleMenu}>
              ×
            </button>
          </div>
          {/* Menu content */}
          <div className="flex flex-col px-6 py-2 space-y-4">
            {/* Menu items */}
            <button className="text-left w-full hover:text-zinc-300">
              OUR STORY
            </button>
            <div className="flex justify-between items-center w-full">
              <button className="text-left hover:text-zinc-300">
                OUR WINES
              </button>
              <span>▼</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <button className="text-left hover:text-zinc-300">
                STAY WITH US
              </button>
              <span>▼</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <button className="text-left hover:text-zinc-300">
                VISIT US
              </button>
              <span>▼</span>
            </div>
            <button className="text-left w-full hover:text-zinc-300">
              ENTRY BOOKING - SKIP THE QUEUE
            </button>
            <div className="flex justify-between items-center w-full">
              <button className="text-left hover:text-zinc-300">
                ABOUT US
              </button>
              <span>▼</span>
            </div>
            <button className="text-left w-full hover:text-zinc-300">
              DOMAINE SULA
            </button>
            <button className="text-left w-full hover:text-zinc-300">
              SULA IN CAN
            </button>
          </div>
        </div>
      )}

      <div className="absolute lg:fixed top-0 right-0 h-full bg-none lg:bg-black md:bg-none flex flex-col justified-center items-center p-1">
        <a
          className="hidden md:inline-block text-yellow-600 font-bold text-center"
          href="#"
          onClick={toggleMenu}
        >
          M<br />E<br />N<br />U
        </a>
        <div class="inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav"></div>

        <div></div>
        <img
          src="/src/assets/stores.jpg"
          alt="Image 1"
          className=" hidden md:inline-block ml-0 w-15 h-20 mr-0 mt-16"
          style={{ maxWidth: "75%", height: "8%" }}
        />
      </div>
    </>
  );
}

export default NavBar;
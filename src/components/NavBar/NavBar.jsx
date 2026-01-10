import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#0f172a] text-white shadow-md">
      <div className="navbar px-4 md:px-8 max-w-7xl mx-auto flex justify-between items-center">

        {/* --- Logo --- */}
        <div className="navbar-start w-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C25.3043 4.00466e-07 30.3919 2.10669 34.1426 5.85742C34.8157 6.53058 35.4354 7.24719 36 8H20C16.8174 8 13.7651 9.26421 11.5146 11.5146C9.26421 13.7651 8 16.8174 8 20H20L36.9102 9.31934C38.1656 11.3074 39.0611 13.5027 39.5547 15.8027L32 20H40L39.9941 20.4971C39.8669 25.6213 37.776 30.5092 34.1426 34.1426C30.3919 37.8933 25.3043 40 20 40C14.6957 40 9.60815 37.8933 5.85742 34.1426C5.18426 33.4694 4.56459 32.7528 4 32H20C23.1826 32 26.2349 30.7358 28.4854 28.4854C30.5952 26.3755 31.8383 23.5608 31.9854 20.5947L32 20H20L3.08984 30.6787C1.83452 28.6906 0.941002 26.4951 0.447266 24.1953L8 20H0C8.00931e-07 14.6957 2.1067 9.60815 5.85742 5.85742C9.60815 2.1067 14.6957 -5.79361e-10 20 0Z"
                  fill="#0094F7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nexa<span className="text-base-content/80 text-lg">Byte</span>
            </h1>
          </Link>
        </div>

        {/* --- Right Side: Routes & Buttons --- */}
        <div className="navbar-end flex items-center gap-4">

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 mr-2">
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm md:text-base"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm md:text-base"
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login">
              <button className="btn btn-ghost text-white hover:bg-white/10">
                Login
              </button>
            </Link>

            <Link href="/register">
              {/* Used standard style for exact color matching if 'btn-primary' isn't set to this color in theme */}
              <button
                className="btn text-white border-none hover:brightness-110"
                style={{ backgroundColor: '#0094F7' }}
              >
                Register
              </button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NavBar;  
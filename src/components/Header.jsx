import { Search } from "lucide-react";
import UCALOGO from "../assets/UCA-LOGO.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <header className="w-full  h-full bg-white shadow-md border-b-1 border-blue-700">
      <div className="flex flex-justify justify-between">
        <div className="flex flex-justify">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={UCALOGO}
              alt="UCA Logo"
              className="h-28 object-contain cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Navigation */}
          <nav className="">
            <ul
              className="flex items-center gap-8 text-gray-600 font-medium  px-10 py-10"
              style={{ fontSize: "20px" }}
            >
              <li>
                <a href="/" className="hover:text-blue-700 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-700 transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/ourservices")}
                  className="hover:text-blue-700 transition cursor-pointer"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-700 transition">
                  United Blog
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-blue-700 transition">
                  Job Board
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-700 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-around ">
          <div className="flex items-center gap-7 m-6">
            <div className="flex items-center gap-2 border rounded-full  px-4 py-2 hover:bg-gray-200 transition">
              <Search size={20} />
              <input
                className="bg-transparent outline-none"
                placeholder="Search..."
              />
            </div>
            <Button
              className="text-2xl font-semibold"
              style={{
                fontSize: "20px",
                padding: "30px",
                fontWeight: 700,
                fontFamily: "math",
              }}
            >
              Sign in
            </Button>
            <Button
              className="text-2xl font-semibold"
              style={{
                fontSize: "20px",
                color: "#ffff",
                padding: "30px",
                backgroundColor: "#2156AD",
                fontWeight: 600,
                fontFamily: "math",
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

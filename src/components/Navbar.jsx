import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Container from "./Layout/Container";
import Search from "../assets/search.png";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center py-4 md:py-6 lg:py-10">
          {/* Logo */}
          <div>
            <img
              src={logo}
              width="126px"
              height="126px"
              className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[126px] lg:h-[126px]"
              alt="logo"
            />
          </div>

          {/* Nav Links + Search — pill border container */}
          <div className="hidden md:block border-2 border-white rounded-[130px] px-4 md:px-6 lg:px-8">
            <ul className="flex items-center py-2 md:py-3 lg:py-4 gap-x-[16px] md:gap-x-[24px] lg:gap-x-[40px]">
              <li>
                <a
                  className="font-primary font-medium text-[16px] md:text-[18px] lg:text-[24px] leading-normal text-white"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="font-primary font-medium text-[16px] md:text-[18px] lg:text-[24px] leading-normal text-white"
                  href="#"
                >
                  Our gym location
                </a>
              </li>

              {/* Vertical Divider */}
              <li className="h-[23px] w-px bg-white opacity-60" />

              {/* Search Box — glassmorphism */}
              <li>
                <div className="relative">
                  <input
                    className="w-[130px] md:w-[170px] lg:w-[219px] py-[10px] md:py-[14px] lg:py-[18px] pl-[30px] md:pl-[36px] lg:pl-[42px] pr-[36px] lg:pr-[42px] bg-[rgba(255,255,255,0.25)] text-white placeholder-white rounded-[70px] outline-none font-primary text-[14px] md:text-[18px] lg:text-[22px]"
                    type="text"
                    placeholder="Search"
                  />
                  <img
                    className="absolute top-[50%] right-[12px] lg:right-[16px] translate-y-[-50%] w-[18px] h-[18px] md:w-[22px] md:h-[22px] lg:w-[26px] lg:h-[26px]"
                    src={Search}
                    alt="search icon"
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* Register Button */}
          <div>
            <Link
              to="/register"
              className="font-primary text-[14px] md:text-[20px] lg:text-[35px] leading-normal tracking-[0%]
              ml-3 font-medium text-white py-2 px-5 md:py-4 md:px-8 lg:py-[32px] lg:px-[112px] bg-primary rounded-[20px] md:rounded-[35px] lg:rounded-              [55px] cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

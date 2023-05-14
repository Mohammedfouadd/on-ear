import {useState} from "react";
import {navLinks} from "./constants";
import {logo, icon} from "./assets";
import "../index.css";

const Navbar = () => {
  // console.log(navLinks)
  const [active, setActive] = useState("");
  const [tolggle, setTolggle] = useState(false);

  return (
    <nav
      className={` w-full flex itmes-center py-5 fixed top-0 z-20 container`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto relative">
        <div className="text-[#FFFFFF] text-[18px] font-bold cursor-pointer flex ">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-20 justify-between items-center navs">
          <ul className="text-white font-bold sm:flex flex-row gap-10 text-[16px] ">
            {navLinks.map(nav =>
              <li
                key={nav.id}
                className={`${active === nav.title
                  ? "text-white"
                  : "text-[#ffffff9d]"} hover:text-white text-[18px] font-medium cursor-pointer delay-200`}
                onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            )}
          </ul>
          <div className="text-white bg-[#1E1E21] py-2 px-9 rounded-lg cursor-pointer listt">
            Shop
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={icon}
            alt="menu"
            className="w-[18px] h-[28px] object-contain cursor-pointer mr-4"
            onClick={() => setTolggle(!tolggle)}
          />
          <div
            className={`${!tolggle
              ? "hidden"
              : "flex"} p-6 black-gradient absolute
          top-6 right-0 mx-4 my-2 min-w-[14px] z-10 rounded-xl bg-[#0F0F10] listt`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(nav =>
                <li
                  key={nav.id}
                  className={`${active === nav.title
                    ? "text-white"
                    : "text-[#ffffff9d]"} font-poppins text-[16px] font-medium cursor-pointer  delay-200`}
                  onClick={() => {
                    setTolggle(!tolggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )}
              <div className="text-white bg-[#1E1E21] py-2 px-9 rounded-lg cursor-pointer ">
                Shop
              </div>
              <li />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

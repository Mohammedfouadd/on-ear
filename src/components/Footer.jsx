import {logo} from "./assets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="text-center mb-5">
      <div className="md:flex justify-evenly mt-[150px]  mb-12 text-start">
        <div className="text-[#FFFFFF] h-10 text-[18px] font-bold cursor-pointer flex mb-8 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-center gap-20 mb-7 ">
          <ul>
            <h1 className="mb-5">Products</h1>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Headphones
            </li>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Earphones
            </li>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Earbuds
            </li>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Accessories
            </li>
          </ul>
          <ul>
            <h1 className="mb-5">Support</h1>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Product help
            </li>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Register
            </li>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Updates
            </li>
            <li className="text-sm text-[#BDC0C2] mb-2 cursor-pointer hover:text-[#fff]">
              Provides
            </li>
          </ul>
        </div>
        <div>
          <div className="relative flex items-center ">
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-[#181A1B] rounded-lg w-[100%] h-[67px] text-white md:w-[350px]"
            />
            <span className="bg-[#0A0A0B] rounded-lg p-3 absolute right-2 cursor-pointer text-[13px] font-light ">
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{color: "#fbfcfe"}}
                className="mr-2"
              />
              Subscribe
            </span>
          </div>
          <div>
            <ul className="flex mt-4 gap-5">
              <li className=" text-center items-center flex">
                <a
                  href="https://web.facebook.com/profile.php?id=100009643743141"
                  target="_balnk">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{color: "#fcfcfc"}}
                    className="bg-[#181A1B] rounded p-2"
                  />
                </a>
              </li>
              <li className=" text-center items-center flex">
                <a
                  href="https://www.linkedin.com/in/mohamed-fouad-306093240/"
                  target="_balnk">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{color: "#ffffff"}}
                    className="bg-[#181A1B] rounded p-2"
                  />
                </a>
              </li>
              <li className=" text-center items-center flex">
                <a href="https://github.com/Mohammedfouadd" target="_balnk">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{color: "#fcfcfc"}}
                    className="bg-[#181A1B] rounded p-2"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="text-sm text-[#A2A6A9]">
        © Agara. All rights reserved
      </span>
    </div>
  );
};

export default Footer;

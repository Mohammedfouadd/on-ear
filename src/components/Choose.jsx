import {image2, image3, image4, image5, image6} from "./assets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
const Choose = () => {
  return (
    <div className="text-center mt-[120px] mb-[120px] md:container pb-5" id="products">
      <h1 className="mainText  md:text-[72px] md:mt-8   text-[46px]">Choose</h1>
      <h1 className="mainText  md:text-[72px] mt-[-20px]  mb-[100px] text-[46px]">
        Your Style
      </h1>
      <div className="contanirChoose md:gap-10">
        <div className="bg-[#181A1B] listt rounded-lg w-[162px] relative h-[152px]    mb-[80px]">
          <img
            src={image2}
            alt="image1"
            className="absolute  top-[-60px] left-[20%]"
          />
          <div className="flex items-end text-start justify-between p-3 pt-[60px] mt-10">
            <span className="text-sm font-semibold text-[#F2F2F3]">
              Black <br />
              <span className="text-sm font-semibold text-[#BDC0C2]">
                N299K
              </span>
            </span>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="p-3 rounded-lg bg-[#0A0A0B] cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-[#181A1B]  rounded-lg w-[162px] relative h-[152px]  text-center ">
          <img
            src={image3}
            alt="image1"
            className="absolute  top-[-60px] left-[20%]"
          />
          <div className="flex items-end text-start justify-between p-3 pt-[60px] mt-10">
            <span className="text-sm font-semibold text-[#F2F2F3]">
              Red Black <br />
              <span className="text-sm font-semibold text-[#BDC0C2]">
                N299K
              </span>
            </span>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="p-3 rounded-lg bg-[#0A0A0B] cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-[#181A1B] listt  rounded-lg w-[162px] relative h-[152px]  text-center mb-[80px] ">
          <img
            src={image4}
            alt="image1"
            className="absolute  top-[-60px] left-[20%]"
          />
          <div className="flex items-end text-start justify-between p-3 pt-[60px] mt-10">
            <span className="text-sm font-semibold text-[#F2F2F3]">
              Night Black <br />
              <span className="text-sm font-semibold text-[#BDC0C2]">
                N299K
              </span>
            </span>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="p-3 rounded-lg bg-[#0A0A0B] cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-[#181A1B]  rounded-lg w-[162px] relative h-[152px]  text-center ">
          <img
            src={image5}
            alt="image1"
            className="absolute  top-[-60px] left-[20%]"
          />
          <div className="flex items-end text-start justify-between p-3 pt-[60px] mt-10">
            <span className="text-sm font-semibold text-[#F2F2F3]">
              Blue <br />
              <span className="text-sm font-semibold text-[#BDC0C2]">
                N299K
              </span>
            </span>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="p-3 rounded-lg bg-[#0A0A0B] cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-[#181A1B] listt rounded-lg w-[162px] relative h-[152px]  text-center ">
          <img
            src={image2}
            alt="image1"
            className="absolute  top-[-60px] left-[20%]"
          />
          <div className="flex items-end text-start justify-between p-3 pt-[60px] mt-10">
            <span className="text-sm font-semibold text-[#F2F2F3]">
              Black <br />
              <span className="text-sm font-semibold text-[#BDC0C2]">
                N299K
              </span>
            </span>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="p-3 rounded-lg bg-[#0A0A0B] cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-[#181A1B]  rounded-lg w-[162px] relative h-[152px]  text-center ">
          <img
            src={image6}
            alt="image1"
            className="absolute  top-[-60px] left-[20%]"
          />
          <div className="flex items-end text-start justify-between p-3 pt-[60px] mt-10">
            <span className="text-sm font-semibold text-[#F2F2F3]">
              Twilight Gray <br />
              <span className="text-sm font-semibold text-[#BDC0C2]">
                N299K
              </span>
            </span>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="p-3 rounded-lg bg-[#0A0A0B] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

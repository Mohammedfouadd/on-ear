import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {caseland, image} from "./assets";

const Case = () => {
  return (
    <div className="text-center  md:container mt-[100px] mb-12" id="case">
      <h1 className="mainText text-[#424245] md:text-[72px] md:mt-8 mb-4 md:ml-8 md:mb-8 text-[56px]">
        Case
      </h1>
      <div className="relative flex justify-center gap-20 md:flex-row flex-col-reverse items-center ">
        <img
          src={caseland}
          alt="caseland"
          className="md:w-[300px] w-[250px] md:h-[419px] "
        />
        <div>
          <p className="w-[242px] text-start mb-5 text-[#BDC0C2]">
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>
          <div className="cursor-pointer flex justify-center items-center gap-6 bg-[#1E1E21] p-2 w-[156px] rounded-md ">
            <FontAwesomeIcon icon={faCircleInfo} />
            <span className="text-[15px] ">More info</span>
          </div>
        </div>
      </div>
      <div className="bg-[#181A1B]  md:flex justify-evenly items-center gap-20 rounded-xl p-5 mt-12 text-start relative">
        <div>
          <h2 className="md:text-[24px] text-[#F2F2F3] text-[18px] mb-2">
            Immerse yourself in <br /> your music
          </h2>
          <span className="text-[#BDC0C2] md;text-[16px] text-sm ">
            Buy Now, up to 40% off.
          </span>
          <div className="bg-[#000] p-2 flex rounded-md justify-center gap-8 w-[136px] mt-5">
            <FontAwesomeIcon icon={faBagShopping} />
            <span>Buy now</span>
          </div>
        </div>
        <img src={image} alt="imageCase" className="imageCase" />
      </div>
    </div>
  );
};

export default Case;

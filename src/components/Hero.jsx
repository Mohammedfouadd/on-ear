import {bigEar} from "./assets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {apple, youtub, amazon, soptify} from "./assets";
const Hero = () => {
  return (
    <div className="mb-12" id="/">
      <div className=" md:flex justify-around relative md:pt-0 p-4 mb-12">
        <img src={bigEar} alt="img" className="bigEar" />

        <div className="mt-24">
          <h1 className="text-hero md:text-[120px] md:mt-8 md:ml-8 md:mb-4 text-[80px]">
            On ear
          </h1>
          <h1 className="md:text-[64px] text-[40px] text-[#F2F2F3] font-semibold mb-8 ">
            Beats 3
          </h1>
          <div>
            <h2 className="text-[20px] text-[#F2F2F3] font-semibold mb-4">
              Overview
            </h2>
            <p className="text-[#BDC0C2] w-[320px] md:w-[380px] leading-8 mb-4">
              Enjoy award-winning Beats sound with wireless listening freedom
              and a sleek, streamlined design with comfortable padded earphones,
              delivering first-rate playback.
            </p>
            <div className="flex bg-[#1E1E21] p-2 cursor-pointer rounded-md gap-4 items-center w-[248px] justify-evenly">
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="bold">Add to Bag</span>
              <span className="text-[20px] font-bold">N399K</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-evenly items-center md:mt-12 mt-10 ">
        <img
          src={apple}
          alt="apple"
          className="md:w-[100px] md:h-8 w-[70px] cursor-pointer"
        />
        <img
          src={soptify}
          alt="soptify"
          className="md:w-[100px] md:h-8 w-[70px] cursor-pointer"
        />
        <img
          src={amazon}
          alt="amazon"
          className="md:w-[100px] md:h-7 w-[70px] cursor-pointer"
        />
        <img
          src={youtub}
          alt="yputub"
          className="md:w-[100px] md:h-7 w-[70px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Hero;

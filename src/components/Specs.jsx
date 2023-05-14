import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faBolt,
  faMicrophone
} from "@fortawesome/free-solid-svg-icons";
import {faBluetoothB} from "@fortawesome/free-brands-svg-icons";
import {imgland} from "./assets";

const Specs = () => {
  return (
    <div className="text-center   mt-[100px] mb-12" id="specs">
      <h1 className="mainText text-[#424245] md:text-[72px] md:mt-8 md:ml-8 md:mb-4 text-[56px]">
        Specs
      </h1>
      <div className="flex justify-center items-center md:gap-28 mt-12">
        <div>
          <ul className="text-start">
            <li className="mt-8 ml-8">
              <FontAwesomeIcon icon={faBluetoothB} className="md:text-[22px]" />
              <p className="font-semibold  mb-1">Connection</p>
              <p className="font-normal text-xs text-[#BDC0C2]">
                Bluetooth v5.2
              </p>
            </li>
            <li className="mt-8 ">
              <FontAwesomeIcon
                icon={faBatteryFull}
                style={{color: "#F8F8F8"}}
                className="md:text-[22px]"
              />
              <p className="font-semibold  mb-1">Battery</p>
              <p className="font-normal text-xs text-[#BDC0C2]">Duration 40h</p>
            </li>
            <li className="mt-8 ">
              <FontAwesomeIcon
                icon={faBolt}
                style={{color: "#fafcff"}}
                className="md:text-[22px]"
              />
              <p className="font-semibold  mb-1">Load</p>
              <p className="font-normal text-xs text-[#BDC0C2]">
                Fast charge 4.2-AAC
              </p>
            </li>
            <li className="mt-8 ml-8">
              <FontAwesomeIcon
                icon={faMicrophone}
                style={{color: "#F8F8F8"}}
                className="md:text-[22px]"
              />
              <p className="font-semibold  mb-1">Microphone</p>
              <p className="font-normal text-xs text-[#BDC0C2]">
                Supports Apple Siri and Google
              </p>
            </li>
          </ul>
        </div>
        <div>
          <img src={imgland} alt="imgeLanding" />
        </div>
      </div>
    </div>
  );
};

export default Specs;

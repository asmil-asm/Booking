import { PiCoffeeBold } from "react-icons/pi";
import { MdOutlineAddLocation, MdOutlineFoodBank, MdOutlineBedroomParent, MdOutlineKingBed } from "react-icons/md";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { IoIosFitness } from "react-icons/io";
import { FaSwimmingPool, FaParking } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { LuHeater } from "react-icons/lu";
import { IoGolfOutline, IoCafe, IoPeopleSharp } from "react-icons/io5";

const iconMap = {
  PiCoffeeBold,
  MdOutlineAddLocation,
  LiaLuggageCartSolid,
  IoIosFitness,
  FaSwimmingPool,
  CiCircleMore,
  MdOutlineFoodBank,
  FaParking,
  LuHeater,
  IoGolfOutline,
  IoCafe,
  MdOutlineBedroomParent,
  IoPeopleSharp,
  MdOutlineKingBed,
};

const DynamicIcon = ({ name, className = "" }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null; 
  }

  return <IconComponent className={className} />;
};

export default DynamicIcon;
import {useEffect} from "react";
import logo from "../assets/logo.png";
import homeLogo from"../assets/homeLogo.png"
import Compatibility from"../assets/licenseCompatibility.png"
import agreementCompliance from"../assets/agreementCompliance.png"
import softwarlicense from"../assets/softwarlicense.png"

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Slider = ({ isMenuOpen ,setIsMenuOpen}) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(isMenuOpen);
  useEffect(()=>{setIsMenuOpen(false)},[setIsMenuOpen,location])
  return (
    <div
      className={`sm:hidden slider pt-5 pr-5 pl-3  bg-white ${
        isMenuOpen ? "slide" : ""
      }`}
    >
      <img className="ml-auto mb-5" src={logo} alt="" width={56} height={43} />
      <ul
      >
        <li
          className={` flex flex-row items-center mb-4 text-2xl   ${
            currentRoute === "/"
              ? " text-Primary font-bold "
              : "font-normal"
          } `}
        >
          <img className="mr-2"  src={homeLogo} alt="" width={30} height={30} />
          <Link to="/">Home</Link>
        </li>
        <li
          className={` flex flex-row items-center mb-4 text-2xl ${
            currentRoute === "/OpenSourceLicenseCompatibility"
              ? " text-Primary font-bold "
              : "font-normal"
          } `}
        >
          <img className="mr-2"  src={Compatibility} alt="" width={30} height={30} />
          <Link to="/OpenSourceLicenseCompatibility">
            Open Source License Compatibility
          </Link>
        </li>
        <li
          className={` flex flex-row items-center mb-4 text-2xl ${
            currentRoute === "/SoftwareLicense"
              ? " text-Primary font-bold "
              : "font-normal"
          } `}
        >
          <img className="mr-2"  src={softwarlicense} alt="" width={30} height={30} />
          <Link to="/SoftwareLicense">Software License</Link>
        </li>
        <li
          className={` flex flex-row items-center mb-4 text-2xl ${
            currentRoute === "/AgreementCompliance"
              ? " text-Primary font-bold "
              : "font-normal"
          } `}
        >
          <img className="mr-2"  src={agreementCompliance} alt="" width={30} height={30} />
          <Link to="/AgreementCompliance">Agreement Compliance</Link>
        </li>
      </ul>
    </div>
  );
};

export default Slider;

import { FaAngleLeft } from "react-icons/fa6";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { CgRemove } from "react-icons/cg";
import { HiUpload } from "react-icons/hi";
import { PiDeviceTabletSpeakerBold } from "react-icons/pi";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="header">
      <p className="icon-left"><FaAngleLeft className="icon" /></p>
      <h1 className="heading">Bitcoin Wallet</h1>
      <p className="icon-right">
    { !toggleMenu ?
        <BsThreeDotsVertical className="icon"  onClick={() => setToggleMenu(!toggleMenu)}/>
        :
        <BsThreeDots className="icon"  onClick={() => setToggleMenu(!toggleMenu)}/>
        
      }        </p>

      {
        toggleMenu && (
          <div className="h-menu">
            <p className="m-row">
              <span className="text">Edit</span>
              <span><CgRemove className="ticon" /></span>
            </p>
            <p className="m-row">
              <span className="text">Courier info</span>
              <span><PiDeviceTabletSpeakerBold className="ticon"  /></span>
            </p>
            <p className="m-row">
              <span className="text">Share</span>
              <span><HiUpload className="ticon"  /></span>
            </p>
            <p className="m-row">
              <span className="text">Remove</span>
              <span><CgRemove className="ticon"  /></span>
            </p>
          </div>
        )
      }

    </div>
  )
}

export default Header

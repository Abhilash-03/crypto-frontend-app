import { FaBell, FaWallet } from "react-icons/fa";
import { MdExplore, MdSettings } from "react-icons/md";
const MobileMenu = () => {
  return (
    <div className="menu">
        <FaWallet color="#4c5969" className="micon" />
       <MdExplore className="micon"  />
       <FaBell className="micon"  />
       <MdSettings className="micon"  />
    </div>
  )
}

export default MobileMenu

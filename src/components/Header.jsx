import { FaAngleLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header">
      <p className="icon-left"><FaAngleLeft className="icon"/></p>
      <h1 className="heading">Bitcoin Wallet</h1>
      <p className="icon-right"><BsThreeDotsVertical className="icon"/></p>

    </div>
  )
}

export default Header

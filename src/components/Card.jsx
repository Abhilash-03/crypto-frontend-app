import { FaBitcoinSign, FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
const Card = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='card'>
      <div className="top">
        <div className="left">
         <p className="bitcoin-icon"><FaBitcoinSign className="icon" /></p>
         <p className="text">Bitcoin</p>
        </div>
        <div className="right">
            <p>BTC</p>
        </div>
      </div>
      <div className="middle">
        <h2>3.529020 BTC</h2>
        <div className="price">
            <h4>$19.153 USD</h4>
            <p className="pl">- 2.32%</p>
        </div>
      </div>
      <p className="toggle-icon">
       { !toggle ?
        <FaChevronDown className="downicon" onClick={() => setToggle(!toggle)} />
        :
        <FaChevronUp className="downicon" onClick={() => setToggle(!toggle)} />}
        </p>
{ toggle &&
      <div className="btns">
        <Button title={'Buy'} classname={'buy'} />
        <Button title={'Sell'} classname={'sell'} />
      </div>
      }
    </div>
  )
}

export default Card

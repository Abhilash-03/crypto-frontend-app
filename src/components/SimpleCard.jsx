import { FaDollarSign } from "react-icons/fa6"

const SimpleCard = ({title, classname}) => {
  return (
    <div className={`card-group ${classname}`}>
      <div className="icon">
      <FaDollarSign />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default SimpleCard

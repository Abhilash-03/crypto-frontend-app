const Button = ({title, classname}) => {
  return (
    <button className={`${classname}`}>
      {title}
    </button>
  )
}

export default Button
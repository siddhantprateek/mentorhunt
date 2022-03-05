import './Button.styles.css'
const Button = ({pholder, color}) => {
    return (
        <div className="butn">
        <button className={color}>{pholder}</button>
      </div>
    )
}

export default Button;
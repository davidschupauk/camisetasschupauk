import './Button.css'

const Button = ({label, backgroundColor = 'blue', colorText ='white', handleClick}) => {
    return (
        <button className="myButton" style={{backgroundColor, color: colorText}} onClick={handleClick}>{label}</button>
    )
}

export default Button;
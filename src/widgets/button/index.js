
import PropTypes from 'prop-types';
import "./button.scss";
const Button = ({ text,padding=10,width=200,fontSize=20,onClick=()=>{},height='auto',margin=10 }) => {
    const getStyle = () => {
        let styleObj = {
            padding,width,fontSize,height,margin
        };
      
        return styleObj;
    }
    return (
        <button
            onClick={onClick}
            className='basic-button-styling'
            style={getStyle()}
        >{text}</button>
    )
}
Button.propTypes = {
    height: PropTypes.string.isRequired
}
export default Button;
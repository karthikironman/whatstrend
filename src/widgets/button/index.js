
import PropTypes from 'prop-types';
import "./button.scss";
const Button = ({ text,padding=10,width=200 }) => {
    const getStyle = () => {
        let styleObj = {
            padding,width
        };
      
        return styleObj;
    }
    return (
        <button
            className='basic-button-styling'
            style={getStyle()}
        >{text}</button>
    )
}
Button.propTypes = {
    height: PropTypes.string.isRequired
}
export default Button;
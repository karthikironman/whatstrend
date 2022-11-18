import back from "./back.svg";
import "./back.scss"
const Backbtn = ({onClick}) => {
    return (
        <div className="backbn-wrapper" onClick={onClick}>
            <img src={back} alt="backbtn"/>
            <p>back</p>
        </div>
    )
}
export default Backbtn
import back from "./back.svg";
import "./back.scss"
const Backbtn = () => {
    return (
        <div className="backbn-wrapper">
            <img src={back} />
            <p>back</p>
        </div>
    )
}
export default Backbtn
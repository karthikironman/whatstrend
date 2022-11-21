import back from "./home.svg";
import "./home.scss"
const Backbtn = ({onClick}) => {
    return (
        <div className="homeBtn-wrapper" onClick={onClick}>
            <img src={back} alt="home btn"/>
            <p>home</p>
        </div>
    )
}
export default Backbtn
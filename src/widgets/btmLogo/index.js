import "./btmLogo.scss"
import logo from "./logo.png"
const BtmLogo = () => {
    return (
        <div className="btm-logo-wrapper">
            <img className="hanaka-logo" src={logo} />
            <div className="hanaka-name-city">
                <p className="hanaka-name">HANAKA V1.0</p>
                <p className="hanaka-city">Cambridge Institute of Technology</p>
            </div>
        </div>

    )
}
export default BtmLogo;
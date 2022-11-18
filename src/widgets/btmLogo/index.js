import "./btmLogo.scss"
import logo from "./logo.png"
import { useSelector } from "react-redux"
const BtmLogo = () => {
    const pool = useSelector((state)=>state.hanaka.pool)
    return (
        <div className="btm-logo-wrapper-ultimate">
            <div className="btm-logo-wrapper">
                <img className="hanaka-logo" src={logo} />
                <div className="hanaka-name-city">
                    <p className="hanaka-name">HANAKA V1.0</p>
                    <p className="hanaka-city">{pool}</p>
                </div>
            </div>

        </div>

    )
}
export default BtmLogo;
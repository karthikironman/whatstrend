import "./btmLogo.scss"
import logo from "./logo.png"
import { useSelector } from "react-redux"
const BtmLogo = ({lineAbove = false}) => {
    const pool = useSelector((state)=>state.hanaka.pool)
    const getComputedStyle = () => {
        if(lineAbove)
        return {
            borderTop: '1px solid black',
            paddingTop:'1rem'
        }
        else return {}
    }
    return (
        <div style={getComputedStyle()} className="btm-logo-wrapper-ultimate">
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
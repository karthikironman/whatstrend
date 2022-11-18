import "./positiveCard.scss"
import Text from "../text";
import { useSelector } from "react-redux";
const PositiveCard = ({ index = 1 }) => {
    const flavour = useSelector((state) => state.hanaka.flavour)
    return (
        <div className="positive-card">
            <div className="positive-card-sn-type-row">
                <div className="positive-card-sn">
                    {index}
                </div>
                <div className="positive-card-type">
                    <Text text="BODY TYPE" flavour={flavour} fontStyle="italic" fontSize={18} />
                    <Text text="Medium" flavour={flavour} textDecoration="underline" fontWeight={900} />
                </div>
            </div>
            <div className="category-image-analytics">
                <img className="category-image" src="https://www.pngmart.com/files/15/Vector-Eyes-Transparent-PNG.png" />
                <div className="category-analytics">
                    <p className="main-analytics"><span class="analytics-hl">67%</span>&nbsp;&nbsp;<Text flavour={flavour} reverse={true} useBoyGirl={true} suffix="-s" fontSize={12} fontWeight={900}/> like your body type</p>
                </div>
            </div>
        </div>
    )
}
export default PositiveCard;
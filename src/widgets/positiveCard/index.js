import "./positiveCard.scss"
import Text from "../text";
import { useSelector } from "react-redux";
const PositiveCard = ({ index = 1, category_name = "", choice_name = "" , choice_img, percentage = "0" }) => {
    const flavour = useSelector((state) => state.hanaka.flavour)
    return (
        <div className="positive-card">
            <div className="positive-card-sn-type-row">
                <div className="positive-card-sn">
                    {index}
                </div>
                <div className="positive-card-type">
                    <Text text={category_name} flavour={flavour} fontStyle="italic" fontSize={18} />
                    <Text text={choice_name} flavour={flavour} textDecoration="underline" fontWeight={900} />
                </div>
            </div>
            <div className="category-image-analytics">
                <img className="category-image" src={choice_img} />
                <div className="category-analytics">
                    <p className="main-analytics">
                        <span class="analytics-hl">{percentage}%</span>
                        &nbsp;&nbsp;
                        <Text flavour={flavour} reverse={true} useBoyGirl={true} suffix="-s" fontSize={12} fontWeight={900} />
                        &nbsp;&nbsp;
                        like your {choice_name} &nbsp;{category_name}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default PositiveCard;
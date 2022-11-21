import "./negativeCard.scss";
import Text from "../text";
import { useSelector } from "react-redux";
const NegativeCard = ({category,choice,percentage}) => {
    const flavour = useSelector((state) => state.hanaka.flavour)
    return (
        <div className="negative-card">
            <div className="category-choice-negative">
                <p className="category-negative">{category}</p>
                <p className="choice-negative">{choice}</p>
            </div>
            <Text text={percentage} suffix="%" flavour={flavour} fontWeight={900} fontSize={25} reverse={true} />
        </div>
    )
}
export default NegativeCard;
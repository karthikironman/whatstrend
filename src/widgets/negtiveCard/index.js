import "./negativeCard.scss";
import Text from "../text";
import { useSelector } from "react-redux";
import lockicon from "../../assets/lock.png";
import { useNavigate } from "react-router-dom";

const NegativeCard = ({category,choice,percentage,unlocked = false}) => {
    const navigate = useNavigate();
    const flavour = useSelector((state) => state.hanaka.flavour);
    const getOverlayStyle = () => {
        let obj = {};
        if (flavour == 'ha') obj.background = 'black';
        else if (flavour == 'naka') obj.background = 'black';
        return obj;
    }
    return (
        <div className="negative-card">
             {unlocked == false &&
                <>
                    <div className="overlay-content" onClick={()=>navigate('/vote/negative')}>
                        <img src={lockicon} />
                       
                    </div>
                    <div className="overlay" style={getOverlayStyle()}>

                    </div>
                </>}
            <div className="category-choice-negative">
                <p className="category-negative">{category}</p>
                <p className="choice-negative">{choice}</p>
            </div>
            <Text text={percentage} suffix="%" flavour={flavour} fontWeight={900} fontSize={25} reverse={true} />
        </div>
    )
}
export default NegativeCard;
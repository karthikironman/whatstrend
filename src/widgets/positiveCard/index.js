import "./positiveCard.scss"
import Text from "../text";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import lockicon from "../../assets/lock.png";
import Button from "../button"
const PositiveCard = ({ index = 1, category_name = "", choice_name = "", choice_img, percentage = "0", unlocked = false }) => {
    const navigate = useNavigate();
    const flavour = useSelector((state) => state.hanaka.flavour);
    const getOverlayStyle = () => {
        let obj = {};
        if (flavour == 'ha') obj.background = 'black';
        else if (flavour == 'naka') obj.background = 'black';
        return obj;
    }
    return (
        <div className="positive-card">
            {unlocked == false &&
                <>
                    <div className="overlay-content" onClick={()=>navigate('/vote/positive')}>
                        <img src={lockicon} />
                        <p>You can unlock this by submitting your vote for a <Text reverse={true} useBoyGirl={true} suffixColor="white" flavour={flavour} textTransform="uppercase" fontWeight={900}  suffix="'s"/> category</p>
                        <Button text={"Sure, let me vote"}/>
                    </div>
                    <div className="overlay" style={getOverlayStyle()}>

                    </div>
                </>}

            <div className="positive-card-sn-type-row">
                <div className="positive-card-sn">
                    {index}
                </div>
                <div className="positive-card-type">
                    <Text text={category_name} flavour={flavour} fontStyle="italic" fontSize={20} />
                    <Text text={choice_name} flavour={flavour} textDecoration="underline" fontWeight={900} fontSize={25} />
                </div>
            </div>
            <div className="category-image-analytics">
                <img className="category-image" src={choice_img} />
                <div className="category-analytics">
                    <p className="main-analytics">
                        <Text text={percentage} suffix="%" flavour={flavour} fontWeight={900} fontSize={30} reverse={true} />

                        <Text flavour={flavour} reverse={true} useBoyGirl={true} suffix="-s" fontSize={15} fontWeight={900} />
                        &nbsp;&nbsp;
                        like your {choice_name}&nbsp;{category_name}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default PositiveCard;
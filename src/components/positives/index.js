import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./positives.scss";
import BackBtn from "../../widgets/backBtn"
import OnlineStatus from "../onlineStatus";
import Text from "../../widgets/text"
import PositiveCard from "../../widgets/positiveCard"


const Positives = () => {
    const navigate = useNavigate();
    const flavour = useSelector((state) => state.hanaka.flavour);
    const votedForYourCategory = 90;
    return (
        <div className="positive-wrapper" >
            <div className="top-positive-header">
                <BackBtn onClick={() => { navigate('/') }} />
                <OnlineStatus />
            </div>
            <h1 className="positive-heading">Your Positives</h1>
            <p className="voted-for-category"> {votedForYourCategory} <Text flavour={flavour} text={flavour} reverse={true} useBoyGirl={true} suffix="-s" fontWeight={900} /> Voted</p>
        <div className="positive-card-scroll-wrapper">
        <PositiveCard index={1}/>
        <PositiveCard index={2}/>
        <PositiveCard index={3}/>
        </div>
        
    
   
        </div>
    )
}
export default Positives
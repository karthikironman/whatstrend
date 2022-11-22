import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./negatives.scss";
import BackBtn from "../../widgets/backBtn";
import HomeBtn from "../../widgets/homeBtn";
import OnlineStatus from "../onlineStatus";
import Text from "../../widgets/text"
import BtmLogo from '../../widgets/btmLogo';
import NegativeCard from '../../widgets/negtiveCard';

const Positives = () => {
    const navigate = useNavigate();
    const flavour = useSelector((state) => state.hanaka.flavour);
    const pool = useSelector((state) => state.hanaka.pool);
    const votedForYourCategory = 90;
    return (
        <div className="negative-wrapper" >
            <div className="top-negative-header">
                <BackBtn onClick={() => { navigate('/positive') }} />
                <OnlineStatus />
            </div>
            <h1 className="negative-heading">Your Negatives</h1>
            <p className="voted-for-category"> {votedForYourCategory} <Text flavour={flavour} text={flavour} reverse={true} useBoyGirl={true} suffix="-s" fontWeight={900} /> Voted</p>
            <div className="negative-card-scroll-wrapper">
                <NegativeCard unlocked={true} category="Height" choice="Short" percentage={10}/>
                <NegativeCard category="Voice tone" choice="Boyish" percentage={8}/>
                <NegativeCard category="Weight" choice="Obese" percentage={9.8}/>
                <NegativeCard unlocked={true} category="Nose shape" choice="Round" percentage={11.11}/>
                <NegativeCard category="Eyebrows" choice="Steep arch" percentage={10}/>
                <NegativeCard category="Hair Color" choice="Red" percentage={2}/>
            </div>
            <div className="infoSection">
            <h3>Not Finding the category you are looking for?</h3>
            <p>You can add/remove categories from the Home Page and can see what <Text flavour={flavour} suffix="-s" reverse={true} /> in {pool} think about them</p>
            </div>
           
            <div className="top-negative-header">
                <BackBtn onClick={() => { navigate('/positive') }} />
                <HomeBtn onClick={()=>{navigate('/home')}}/>
                <OnlineStatus />
            </div>
            <BtmLogo />
        </div>
    )
}
export default Positives
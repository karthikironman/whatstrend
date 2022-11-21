import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./positives.scss";
import BackBtn from "../../widgets/backBtn"
import OnlineStatus from "../onlineStatus";
import Text from "../../widgets/text"
import PositiveCard from "../../widgets/positiveCard"
import Button from '../../widgets/button';
import BtmLogo from '../../widgets/btmLogo';

const Positives = () => {
    const navigate = useNavigate();
    const flavour = useSelector((state) => state.hanaka.flavour);
    const votedForYourCategory = 90;
    return (
        <div className="positive-wrapper" >
            <div className="top-positive-header">
                <BackBtn onClick={() => { navigate('/home') }} />
                <OnlineStatus />
            </div>
            <h1 className="positive-heading">Your Positives</h1>
            <p className="voted-for-category"> {votedForYourCategory} <Text flavour={flavour} text={flavour} reverse={true} useBoyGirl={true} suffix="-s" fontWeight={900} /> Voted</p>
            <div className="positive-card-scroll-wrapper">
                <PositiveCard
                    index={1}
                    category_name="Hip Shape"
                    choice_name="Curvy"
                    choice_img="https://th.bing.com/th/id/OIP.gfn6IwlPLLQ8rdZpxwa8HQAAAA?pid=ImgDet&rs=1"
                    percentage='97'
                    />
                <PositiveCard
                    index={2}
                    category_name="Eyes Color"
                    choice_name="Black"
                    choice_img="https://www.pngmart.com/files/15/Vector-Eyes-Transparent-PNG.png"
                    percentage='75' />
                <PositiveCard
                    index={3}
                    category_name="Hair"
                    choice_name="curly"
                    choice_img="https://i.pinimg.com/originals/88/24/ac/8824acdcc476a833cd014e1b653ae9ed.png"
                    percentage='50' />
            </div>


            <Button width={270} text="Show My Negatives 😓" onClick={()=>{navigate("/negative")}}/>
            <div className="top-positive-header">
                <BackBtn onClick={() => { navigate('/home') }} />
                <OnlineStatus />
            </div>
            <BtmLogo />
        </div>
    )
}
export default Positives
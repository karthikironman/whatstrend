import "./votePage.scss";
import { useSelector } from "react-redux";
import Text from "../../widgets/text";
import BackBtn from "../../widgets/backBtn";
import OnlineStatus from "../onlineStatus";
import Button from "../../widgets/button";
import { useNavigate,useParams } from "react-router-dom";
import YourCategories from "../../widgets/yourCategories";
import data from "../categories/data.json";
import { useState } from "react";
import BlinkText from "../../widgets/blinkText";
const VotePage = (props) => {
    const navigate = useNavigate();
    const flavour = useSelector((state) => state.hanaka.flavour);
    const category = "Height";
    const ha_data = data.naka[0];
    const naka_data = data.ha[2];
    const [gotResponse, setGotResponse] = useState(false);
    const {redirect}  = useParams();
    const handleAfterVoting = (data) => {
        if (data == 'remove') {
            setGotResponse(false)
        } else {
            setGotResponse(true)
        }
    }
    return (
        <div className="vote-page-wrapper">
            <div className="top-vote-header">
                <BackBtn onClick={() => { navigate("/"+redirect) }} />
                <OnlineStatus />
            </div>
            <p className="question">What's your favourite &nbsp;
                <Text flavour={flavour} reverse={true} useBoyGirl={true} suffix="-s" />
                &nbsp;
                {flavour == 'ha' ? ha_data.name : naka_data.name} ? </p>
            {flavour == 'ha' ?
                <YourCategories hideClear={true} callback={handleAfterVoting} hide_no_of_votes={true} defaultExpand={true} choice_data={ha_data.choice} category_name={ha_data.name} /> :
                <YourCategories hideClear={true} callback={handleAfterVoting} hide_no_of_votes={true} defaultExpand={true} choice_data={naka_data.choice} category_name={naka_data.name} />
            }
            {gotResponse && <div className="afterVote">
                <BlinkText textAlign="center" text={"Your Body Type Statistics is unlocked now !!"} bar={false} />
                <Button text="Yay! Go Back" width="90%" onClick={()=>{navigate("/"+redirect)}}/>
                <hr />
                <br />
                <p>You can unlock another category by sumbitting another response</p>
                <Button text="Vote another category" width="90%" />
            </div>}



        </div>
    )
}
export default VotePage;
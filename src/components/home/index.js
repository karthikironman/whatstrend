import "./home.scss";
import Text from "../../widgets/text";
import { useSelector } from "react-redux";
import OnlineStatus from "../onlineStatus";
import ha_image from "../../assets/ha_small.png";
import naka_img from "../../assets/naka_small.png"
import Button from "../../widgets/button";
import { useNavigate } from "react-router-dom";
import BtmLogo from "../../widgets/btmLogo";
const Home = () => {
    const flavour = useSelector((state)=>state.hanaka.flavour)
    const name = useSelector((state)=>state.hanaka.name)
    const pool = useSelector((state)=>state.hanaka.pool)
    const age =  useSelector((state)=>state.hanaka.age)
    const navigate = useNavigate();
    return (
        <div className="home-wrapper">
            <div className="home-header">
                  <div className="top-left-header">
                      <Text 
                      explainHanaka={true} 
                      fontWeight={900} 
                      fontSize={40}
                      flavour={'ha'}
                      textTransform="uppercase"
                      />
                      <Text 
                      explainHanaka={true} 
                      fontWeight={900} 
                      fontSize={40}
                      flavour={'naka'}
                      textTransform="uppercase"
                      />
                      <p className="top-slogan">Simplifying Physical Attraction</p>
                  </div>
                  <OnlineStatus/>
            </div>
            <br/>
            <br/>
           <Text text={name} flavour={flavour} textTransform="uppercase" fontWeight={900} fontSize={35}/>
           <div className="picture-profile-text">
                 <img src={flavour == 'ha'?ha_image:naka_img}/>
                 <div className="profile-text">
                    <h1>{age} Years</h1>
                    <h3>{pool}</h3>
                 <Button width={"auto"} text="EDIT" margin={0} fontSize={12}/>
                 </div>
           </div>
           <Button width={"80%"} text="HANAKA" margin={20} onClick={()=>{navigate('/positive')}}/>
           <br/>
           <Button width={"80%"} text="MY CATEGORY" margin={20} onClick={()=>{navigate('/category')}}/>
     
           
           <BtmLogo lineAbove = {true}/>
        </div>
    )
}
export default Home;
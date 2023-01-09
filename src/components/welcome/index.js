import Text from "../../widgets/text";
import Button from "../../widgets/button";
import "./welcome.css"
import BtmLogo from "../../widgets/btmLogo";
import {useSelector} from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


const Welcome = () => {
    const navigate = useNavigate();
    const name = useSelector((state)=>state.hanaka.name);
    const pool = useSelector((state)=>state.hanaka.pool);
    const age = useSelector((state)=>state.hanaka.age);
    const flavour = useSelector((state)=>state.hanaka.flavour);
    const poolRelation = useSelector((state)=>state.hanaka.poolRelation);
    const param = useParams()
    const fetchData = async () => {
      try{
        let ip_address = process.env.REACT_APP_SERVER_ADDRESS;
        let get_user_url = ip_address + "/user?magic_id="+param.magic_id
        let userData = await axios.get(get_user_url);
        console.log({userData})
       


      }catch(err){
        //take user to not found page

      }
    }
    useEffect(()=>{
    fetchData();
     
    },[])
    return (
        <div className="welcome-wrapper">
        <p>
          Hey &nbsp;
          <Text explainHanaka={true} flavour={flavour} text={flavour} fontWeight={900} fontSize={30}/> &nbsp;
          !
        </p>
        <p>
          Your name is <b>{name}</b> and <b>{age}</b> Years Old {poolRelation} in <b>{pool}</b> !
        </p>
        <p>
          Wondering how Hanaka know this😅 ?
        </p>
        <p>
          Hanaka know a lot of things about you 😀
          including
          What <Text flavour={flavour}  reverse={true} explainHanaka={true} suffix="-s" fontWeight={900}/>  in <b>{pool}</b> think about <b>your physical appearance  !</b>
        </p>
        <br/>
        <Button text="Continue" onClick={()=>{navigate('/positive')}} width={270}/>
        <BtmLogo/>
      </div>
    )
}
export default Welcome;
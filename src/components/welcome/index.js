import Text from "../../widgets/text";
import Button from "../../widgets/button";
import "./welcome.css"
import BtmLogo from "../../widgets/btmLogo";
import {useSelector,useDispatch} from 'react-redux';

const Welcome = () => {
    const name = useSelector((state)=>state.hanaka.name);
    const pool = useSelector((state)=>state.hanaka.pool);
    const age = useSelector((state)=>state.hanaka.age);
    const flavour = useSelector((state)=>state.hanaka.flavour);
    return (
        <div className="welcome-wrapper">
        <p>
          Hey &nbsp;
          <Text explainHanaka={true} flavour={flavour} text={flavour} fontWeight={900} fontSize={25}/> &nbsp;
          !
        </p>
        <p>
          Your name is <b>{name}</b> and <b>{age}</b> Years Old studying in <b>{pool}</b> !
        </p>
        <p>
          Wondering how Hanaka know this😅 ?
        </p>
        <p>
          Hanaka know a lot of things about you 😀
          including
          What <Text flavour={flavour} text={flavour} reverse={true} explainHanaka={true} suffix="-s" fontWeight={900}/>  in <b>Cambridge Institute of Technology</b> think about <b>your physical appearance  !</b>
        </p>
        <br/>
        <Button text="Continue" />
        <BtmLogo/>
      </div>
    )
}
export default Welcome;
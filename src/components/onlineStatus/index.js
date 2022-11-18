
import BlinkText from "../../widgets/blinkText";
import Text from "../../widgets/text";
import "./onlineStatus.scss"
import { useSelector } from "react-redux";
const OnlineStatus = () => {
    const haCount = useSelector((state) => state.hanaka.liveHa);
    const nakaCount = useSelector((state) => state.hanaka.liveNaka);
    return (
        <div className="online-status">
            <BlinkText text="live" barWidth={35} fontWeight={500} />
            <div className="online-status-row">
                <p>{haCount}</p> &nbsp;
                <Text text="Boys" flavour="ha" fontWeight={900} />
            </div>
            <div className="online-status-row">
                <p>{nakaCount}</p> &nbsp;
                <Text text="Girls" flavour="naka" fontWeight={900} />
            </div>
            <BlinkText text="ONLINE" fontWeight={500} fontSize={15} bar={false} fontStyle="italic" />

        </div>
    )
}
export default OnlineStatus;
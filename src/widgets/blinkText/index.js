import "./blinkText.scss";
import { BarLoader } from "react-spinners";
import {  CSSProperties } from "react";

const BlinkText = ({bar=true, barWidth=100 , text, fontWeight = 900, fontSize = 20}) => {
    const override = {
        background: "white",
        borderRadius:5,
        width:barWidth,
      };
      const getTextStyle = () => {
        return {
            fontWeight,
            fontSize
        }
      }
    return (<>
        <p style = {getTextStyle()} className="blink-text">{text}</p>
        {bar && <BarLoader 
        color = "red"
        cssOverride={override}
        />}
        
    </>
    )
}
export default BlinkText;
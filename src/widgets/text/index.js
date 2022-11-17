import { useEffect, useState } from "react";
import "./text.scss"
const Text = ({ text = "ha", flavour = "ha", reverse = false, explainHanaka = false, suffix = "", fontSize = 19, textAlign = 'center', margin = 0, display = "inline-block", fontWeight = 400 }) => {
    const getHaNakaStyle = () => {
        let styleObj = {
            fontSize,
            textAlign,
            margin,
            display,
            fontWeight
        }
        if (ACTUAL_FLAVOUR === "ha") {
            styleObj.color = 'blue';
        } else if (ACTUAL_FLAVOUR === "naka") {
            styleObj.color = 'red';
        }
        return styleObj;
    }
    const [ACTUAL_TEXT, setActualText] = useState('');
    const [ACTUAL_FLAVOUR, setActualFlavour] = useState('');
    useEffect(() => {
        if (reverse) {
            if (flavour == 'ha') {
                setActualText('naka');
                setActualFlavour('naka')
            } else {
                setActualText('ha');
                setActualFlavour('ha')
            }
        } else {
            setActualText(text);
            setActualFlavour(flavour);
        }
    }, [])

    return (
        <>
            <span style={getHaNakaStyle()}>
                < span style={{ textTransform: 'capitalize' }}>
                    {ACTUAL_TEXT}
                </span>
                {suffix && <span style={{ color: 'black' }}>{suffix}</span>}
                {explainHanaka &&
                    <ExplainHanaka
                        flavour={ACTUAL_FLAVOUR}
                        suffix={suffix} />}
            </span>
        </>

    )
}
const ExplainHanaka = ({ flavour = "ha", suffix = "" }) => {
    let content = flavour === 'ha' ? 'boy' : 'girl';
    content += suffix;
    content = "(" + content + ")";
    const explainHanakaStyle = { display: 'inline', color: 'black', fontSize: 15 }
    return <span style={explainHanakaStyle}><i>{content}</i></span>
}
export default Text;
import { useEffect, useState } from "react";
import "./text.scss"
const Text = ({ text = null, flavour = "ha", reverse = false, explainHanaka = false, useBoyGirl = false, suffix = "", fontSize = 19, textAlign = 'center', margin = 0, display = "inline-block", fontWeight = 400, fontStyle="normal",textDecoration="none",textTransform="normal" }) => {
    const getHaNakaStyle = () => {
        let styleObj = {
            fontSize,
            textAlign,
            margin,
            display,
            fontWeight,
            fontStyle,
            textDecoration,
            textTransform
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
            if (flavour == 'ha') {
                if (useBoyGirl) { setActualText(reverse ? 'girl' : 'boy') }
                else {
                    if (text) {
                        setActualText(text)
                    } else {
                        setActualText(reverse ? 'naka' : 'ha')
                    }
                }
                setActualFlavour(reverse ? 'naka' : 'ha')
            } else {
                if (useBoyGirl) { setActualText(reverse ? 'boy' : 'girl') }
                else {
                    if (text) {
                        setActualText(text);
                    } else {
                        setActualText(reverse ? 'ha' : 'naka');
                    }
                }
                setActualFlavour(reverse ? 'ha' : 'naka')
            }
    }, [])

    return (
        <>
            <span style={getHaNakaStyle()}>
                < span style={{ textTransform }}>
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
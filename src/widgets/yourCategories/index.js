import "./yourCategories.scss"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import whitex from "./whitex.svg";
import point from "./point.svg"
const YourCategories = ({ sl_no = 0, category_name = "category", no_of_votes = 34, uniqueKey = Math.random(), choice_data = [], select_index = null }) => {

    const [active, setActive] = useState(select_index != null ? true : false);
    const [selectedChoice, setSelectedChoice] = useState(select_index)
    const [choice, setChoice] = useState(choice_data)
    const flavour = useSelector((state) => state.hanaka.flavour)
    const getWrapperClass = () => {
        let cls = 'your-categories-wrapper'

        if (active) {

            cls += selectedChoice == null ? ' expand' : ' expand-influencer';

        }
        if (selectedChoice != null) {
            cls += flavour == 'ha' ? ' ha-selected' : ' naka-selected'
        }

        return cls;
    }
    const scroll = () => {
        console.log('SEARCHING FOR - selected-ch-123' + uniqueKey);
        const myElement = document.getElementById('selected-ch-123' + uniqueKey);
        console.log(myElement)
        if (myElement) {
            const leftPos = myElement.offsetLeft;
            console.log({ leftPos })
            document.getElementById('choice-wrapper' + uniqueKey).scrollLeft = leftPos - 150;
        }
    }
    useEffect(() => scroll(), [selectedChoice])

    return (
        <div className={getWrapperClass()} onClick={() => { if (selectedChoice == null) setActive(!active) }}>

            {
                selectedChoice != null &&
                <div className="whitex" onClick={(e) => { e.stopPropagation(); setSelectedChoice(null) }}>
                    <img src={whitex} />
                    <p>Clear Selection</p>
                </div>
            }
            <div className="default-view">
                {
                    selectedChoice == null ?
                        <div className="sl-no">
                            {sl_no}
                        </div> :
                        <div className="tick">
                            ✔️
                        </div>

                }

                <div className="category-name">
                    {category_name}
                    <div className="no_of_votes">
                        {no_of_votes}
                    </div>
                    <div className="selected_choice">
                        {
                            selectedChoice != null && choice[selectedChoice].name
                        }
                    </div>
                </div>
            </div>


            {
                selectedChoice != null && <div className="influencer-image">
                    <img src={choice_data[selectedChoice].influencer} />
                </div>
            }
            {
                active &&
                <div className="choice-wrapper" id={"choice-wrapper" + uniqueKey}>
                    {
                        choice.map((x, index) => {
                            return <ChoiceUnit name={x.name} key={index + 'choice' + uniqueKey} index={index} img={x.img} selectedChoice={selectedChoice} setSelectedChoice={setSelectedChoice} uniqueKey={uniqueKey} />
                        })
                    }
                </div>
            }
            {
                (active && selectedChoice == null) &&
                <div className="minimize" onClick={() => { setActive(false) }}>⬆</div>
            }
        </div>
    )
}
const ChoiceUnit = ({ name, img, selectedChoice, setSelectedChoice, index, uniqueKey }) => {
    const flavour = useSelector((state) => state.hanaka.flavour)
    const isActive = () => index == selectedChoice;

    const getImageStyle = () => {
        let obj = {};
        if (isActive()) {
            if (flavour == 'ha') {
                obj.border = '5px solid red'
            } else {
                obj.border = '5px solid blue'
            }
        } else {
            if (selectedChoice != null)
                obj.opacity = '0.5'
        }
        return obj;
    }
    const getTextStyle = () => {
        let obj = {};
        if (isActive()) {
            obj.textDecoration = 'underline'
        } else {
            obj.textDecoration = 'none'
        }

        return obj;
    }

    return (
        <div className="basic-unit-wrapper" id={isActive() ? 'selected-ch-123' + uniqueKey : Math.random()} onClick={(e) => { e.stopPropagation(); console.log('clicked', uniqueKey); setSelectedChoice(index) }}>
            <div className="arrowRow">
                {isActive() && <img src={point} />}
            </div>
            <div className="imageWrapper" style={getImageStyle()}>
                <img src={img} />
            </div>
            <div className="textWrapper" style={getTextStyle()}>
                {name}
            </div>
        </div>
    )
}
export default YourCategories;
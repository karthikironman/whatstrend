import { useEffect, useState } from "react"
import "./testNavigation.css";
const ParentNavigation = ({ data }) => {

    const [selected, setSelected] = useState('kar');
    const selectFirstNode = (e) => {
        if (Array.isArray(e)) {
            if (e[0].child && e[0].child.length) {  //if the first node has child
                return selectFirstNode(e[0].child);
            } else {
                //this executes twice because of the recusion ( one at origin and one at end of recursion tail)
                setSelected(e[0].name);
            }
        } else {
            setSelected(e.name)
        }

    }
    useEffect(() => { selectFirstNode(data) }, [])
    return (
        <>
            <TestNavigation data={data} selectFirstNode={selectFirstNode} selected={selected} />
            <p>{selected}</p>
        </>
    )
}

const TestNavigation = ({ data, padding = 0, selectFirstNode, selected }) => {
    const [idx, setIndex] = useState(0);

    return (
        <>
            {
                data.map((x, index) => {
                    return (
                        <SingleTab
                            x={x}
                            padding={padding}
                            idx={idx}
                            index={index}
                            setIndex={setIndex}
                            selectFirstNode={selectFirstNode}
                            selected={selected}
                        />
                    )
                })
            }

        </>

    )
}
const SingleTab = ({ x, padding = 0, index, idx, setIndex, selectFirstNode, selected }) => {
    // const [expand,setExpand] = useState(false);
    const expand = () => {
        return idx === index
    }
    const getColor = () => {
        if(x.name === selected){
            return 'red'
        }else if(expand()){
            return 'grey'
        }else{
            return 'black'
        }
    }
    return (
        <div
            style={{ background: getColor() }}
            className="tabb"
            onClick={(e) => { e.stopPropagation(); setIndex(index); selectFirstNode(x.child ? x.child : x); console.log(x.child ? x.child : x) }}>
            <p
                className="tabtext"
                style={{ paddingLeft: padding + 'px' }}>
                {!expand() && x.child && '⇨'}
                {expand() && x.child && '⇩'}
                {x.name}
                {(x.name === selected) && '✔️'}
            </p>
            {
                expand() && x.child && <TestNavigation
                    selected={selected}
                    data={x.child}
                    padding={padding + 10}
                    selectFirstNode={selectFirstNode}
                />
            }

        </div>
    )
}
export default ParentNavigation;
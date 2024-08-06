import {useEffect, useRef, useState} from "react";

const Ref = () => {
    // const [renderCount, setRenderCount] = useState(1)
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()
    return(
        <div>
            <h1>Count Render: {renderCount.current}</h1>
            <h2>Last state: {prevValue.current}</h2>

            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Focus</button>

        </div>
    )
}

export default Ref;

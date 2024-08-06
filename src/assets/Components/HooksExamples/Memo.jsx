import {useEffect, useMemo, useState} from "react";

function complexCompute(num) {
    let i = 0;
    while (i < 1000000000) i++
    return num * 2
}
const Memo = () => {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
    }, [styles])

    return(
        <div>
            <h1 style={styles}>Our number: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Minus</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
        </div>
    )
}

export default Memo;

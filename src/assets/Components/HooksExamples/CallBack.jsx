import {useCallback, useState} from "react";
import ItemsList from "./ItemsList.jsx";


const CallBack = () => {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles ={
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Item  ${i + 1}`)
    }, [count])
    return(
        <div>
            <h1 style={styles}>Count item: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>

            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    )
}

export default CallBack;

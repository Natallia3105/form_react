import {useState} from "react";

function computeInitialCounter() {
    console.log('cvn dfv')
    return Math.trunc(Math.random() * 20)
}

const State = () => {
    // const [counter, setCounter] = useState(0)
    // const [counter, setCounter] = useState(computeInitialCounter())
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    })

    const [state, setState] = useState({
        title: 'count',
        date: Date.now()
    })

    function increment() {
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        // setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setState(prev=> {
            return {
                ...prev,
                title: 'new name'
            }
        })
    }
    return (
        <div >
            <h1>Count: {counter}</h1>
            <button
                className="bg-emerald-500"
                onClick={increment}
            >
                Add
            </button>
            <button
                className="bg-rose-500"
                onClick={decrement}
            >
                Minus
            </button>
            <button
                className="bg-neutral-600"
                onClick={updateTitle}
            >
               Change Name
            </button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default State;

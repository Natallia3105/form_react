import {useEffect, useState} from "react";

const useLogger = (value) => {
  useEffect(() => {
      console.log('Value changed:', value)
  }, [value])
}

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => {
        setValue('')
    }

    return {
        bind: {value, onChange},
        value,
        clear
    }
}
const OwnHooks = () => {
    const input = useInput('')

    useLogger(input.value)

    return(
        <div>
            <input className='border-amber-950' type="text" {...input.bind} />

            <button onClick={() => {input.clear()}}>Clear</button>
            <h1>{input.value} </h1>
        </div>
    )
}

export default OwnHooks;

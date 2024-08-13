import {useAlert} from "./Alert/AlertContext.jsx";

const Main = () => {
    const {show} = useAlert()
    return (
        <div>
            <h1 className="font-bold">HI in example Context</h1>
            <button onClick={() => show('this text we get in main')} className='bg-emerald-500'>Show alert</button>
        </div>
    )
}


export default Main;

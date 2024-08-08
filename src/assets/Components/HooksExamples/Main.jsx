import {useAlert} from "./Alert/AlertContext.jsx";

const Main = () => {
    const {toggle} = useAlert()
    return (
        <div>
            <h1 className="font-bold">HI in example Context</h1>
            <button onClick={toggle} className='bg-emerald-500'>Show alert</button>
        </div>
    )
}


export default Main;

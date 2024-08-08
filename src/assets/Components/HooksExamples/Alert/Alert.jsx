import {useContext} from "react";
import {useAlert} from './AlertContext.jsx'


const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) {
        return null
    }
    return(
        <div className='bg-rose-500' onClick={alert.toggle}>
            Important message!
        </div>
    )
}

export default Alert;

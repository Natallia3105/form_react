import React, {useContext, useReducer} from "react";
const AlertContext = React.createContext()

const SHOW_ALERT = 'show';
const HIGH_ALERT = 'high';
const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT : return {...state, visible: true, text: action.text}
        case HIGH_ALERT : return {...state, visible: false}
        default: return state
    }
}
export const useAlert = () => {
     return useContext(AlertContext)
}
const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({ type: SHOW_ALERT, text })
    const high = () => dispatch({ type: HIGH_ALERT })
    return(
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, high
        }}>
                {children}
        </AlertContext.Provider>

    )
  }

  export default AlertProvider;

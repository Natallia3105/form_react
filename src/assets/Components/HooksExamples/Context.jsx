import Main from "./Main.jsx";
import Alert from "./Alert/Alert.jsx";
import AlertProvider from "./Alert/AlertContext.jsx";

export const Context = () => {
    return(
        <AlertProvider>
            <div className="m-8">
                <Alert />
                <Main toggle={() => {}}/>
            </div>
        </AlertProvider>

    )
}
export default Context;

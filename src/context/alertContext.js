import {createContext, useState} from 'react'

export const AlertContext = createContext()

const AlertProvider = ({children}) => {
    const [showAlert, setShowAlert] = useState(false)

    const displayAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    return(
        <AlertContext.Provider
            value={{
                showAlert,
                displayAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider
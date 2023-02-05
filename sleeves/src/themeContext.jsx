import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){ 
    
    const [colorTheme, setColorTheme] = useState("dark")
    
    const toggleTheme = () => {
        setColorTheme(prevColorTheme => prevColorTheme === "dark" ? "light" : "dark")
    }

    
    
    return(
        <ThemeContext.Provider value={{
            colorTheme, 
            toggleTheme
        }}>
           {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }
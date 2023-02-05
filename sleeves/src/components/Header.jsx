import React, { useContext } from 'react';
import { ThemeContext } from "../themeContext"

function Header() {
    

    const { colorTheme } = useContext(ThemeContext)
    
    return (
        <div className={`${colorTheme}-theme`}>
            <h1>Sleeves</h1>
            <h2>Vote for your Favs</h2>
            <br></br>
        </div>
    );
}

export default Header;
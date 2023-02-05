import React, { useContext } from "react"
import { ThemeContext } from '../themeContext'
import axios from 'axios'

export default function MySleeve(props){
const { image, title, _id, vote, setVote, voteSleeveUp, voteSleeveDown , deleteSleeve} = props


let voteUpHandler = async function(_id) {
   //need to connect this to the data base as an update axios call only to update vote
//    await axios.put(`http://localhost:9001/sleeves/${_id}/vote`)
//    .then
//    console.log(vote)
    
}
let voteDownHandler = function() {
//need to connect this to the database as an update axios call only to update vote
    
}



const {colorTheme, toggleTheme} = useContext(ThemeContext)

    return(
        <div className="sleeve-container">
            <h2 className="sleeve-title">{title}</h2>
            <div className="button-container">
            <button onClick={voteUpHandler}>UpVote</button>
            <button onClick={toggleTheme} 
                className={`${colorTheme}-theme`} 
                id="circle-counter">{vote}</button>
            <button onClick={() => voteSleeveDown(_id)}>DownVote</button>
            </div>
            <img className="sleeve" src={image} />
            <button
                id="delete-btn"
                onClick={() => deleteSleeve(_id)}>Delete</button>

        </div>
    )
}
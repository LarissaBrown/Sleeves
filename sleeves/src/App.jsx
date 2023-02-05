import { useEffect , useState} from 'react'
import Header from './components/Header'
import MySleeve from './components/MySleeve'
import AddSleeveForm from './components/AddSleeveForm'
import './App.css'
import { ThemeContextProvider } from './themeContext'
import {  addSleeve , deleteSleeve, voteSleeveDown, voteSleeveUp} from './sleeves.service'
import axios from 'axios'



export default function MyApp() {
const [sleeves, setSleeves] = useState([])
const [vote, setVote] = useState([])


useEffect(() => {
      axios.get('http://localhost:9001/sleeves')
      .then(res => setSleeves(res.data))
      .catch(err => console.log(err))
  
}, [])


  return (
    <>
      <ThemeContextProvider>
        <Header/>
        <AddSleeveForm 
          submit={addSleeve}
          btnText="Add Sleeve"
          />
       {sleeves.map(sleeve=> 
       <MySleeve 
       {...sleeve}
        key={sleeve._id} 
        deleteSleeve={deleteSleeve}
        voteSleeveUp={voteSleeveUp}
        voteSleeveDown={voteSleeveDown}
/>)
       }
      </ThemeContextProvider>
    </>
  );
}

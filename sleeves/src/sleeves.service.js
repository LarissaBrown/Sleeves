import axios from 'axios'


export async function voteSleeveUp(id){
    return await axios.put(`http://localhost:9001/sleeves/${id}`)
  }
  
  export async function voteSleeveDown(id){
    await axios.put(`/vote/${id}`);
    setVote(prevVote => prevVote--)
  
  }
  
 
 export async function getSleeves(){
    //   axios.get('http://localhost:9001/sleeves')
    //   .then(res => setSleeves(res.data))
    //   .catch(err => console.log(err))
    return await axios.get('http://localhost:9001/sleeves')
    }
  
  
 export function addSleeve(newSleeve){
    axios.post('http://localhost:9001/sleeves', newSleeve)
    .then(res => {
      setSleeves(prevSleeves => [...prevSleeves, res.data])
     
    })
    .catch(err => console.log(err))
  }
  
  export function deleteSleeve(sleeveId){
    axios.delete(`http://localhost:9001/sleeves/${sleeveId}`)
    .then(res => {
      setSleeves(prevSleeves => prevSleeves.filter(movie => sleeveId._id !== sleeveId))
    })
    .catch(err => console.log(err))
  }



  
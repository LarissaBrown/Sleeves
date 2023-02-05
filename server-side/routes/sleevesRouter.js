const express = require('express')
const sleevesRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const sleeves = [
    {
        image : "./src/assets/allThatIWish.png",
        title: "Neil Tran All That I Wish",
        genre: "hiphop",
        vote: 0,
        _id: uuidv4()
    },
    {
        image: "./src/assets/beckMorningPhase.png",
        title: "Beck Morning Phase",
        genre: "indie",
        vote: 0,
        _id: uuidv4()
    },
    {
        image: "./src/assets/beatlesRevolver.png",
        title: "Beatles Revolver",
        genre: "beatles",
        vote: 0,
        _id: uuidv4()
    },  
    {
        image: "./src/assets/taylorSwiftLover.png",
        title: "Taylor Swift Lover",
        genre: "pop",
        vote: 0,
        _id: uuidv4()
    }
]

 
//GET ALL
sleevesRouter.get( "/", (req, res)=> {
        res.send(sleeves)
    })

//GET ONE
sleevesRouter.get("/:sleeveId", (req, res) => {
  const sleeveId = req.params.sleeveId
  const foundSleeve = sleeves.find(sleeve => sleeve._id === sleeveId)
  res.send(foundSleeve)
})

//GET By genre
sleevesRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredSleeves = sleeves.filter( sleeve => sleeve.genre === genre)
    res.send(filteredSleeves)
})

//Post One
sleevesRouter.post("/", (req, res)=> {
        const newSleeve = req.body
        newSleeve._id = uuidv4()
        sleeves.push(newSleeve)
        res.send(`Successfully added ${newSleeve.title} to the database`)
    })

sleevesRouter.delete("/:sleeveId", (req, res) => {
 const sleeveId = req.params.sleeveId
 const sleeveIndex = sleeves.findIndex(sleeve => sleeve._id === sleeveId)
 sleeves.splice(sleeveIndex, 1)
 res.send("Successfully deleted sleeve")
})


// sleevesRouter.put('/:sleeveId/vote', async (req, res ) => {
 
//     console.log(res.send(vote))
// })




module.exports = sleevesRouter
const express = require('express')
const app = express() 
const cors = require('cors');


app.use(express.json())

app.use(cors())
app.use("/sleeves", require("./routes/sleevesRouter.js"))


app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})
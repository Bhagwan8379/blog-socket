const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.use("/api/info", require("./routes/blog.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found 404" })
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "SERVER ERROR", error: RegExp.message })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("server Running🏃‍♀️🏃‍➡️")
    )

})
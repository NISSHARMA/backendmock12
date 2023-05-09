
const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRoute } = require("./Routes/userRoute")
const { dashboardRoute } = require("./Routes/dashboardRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", userRoute)
app.use("/employees", dashboardRoute)


app.listen(8000, async () => {
    try {
        await connection
        console.log("connected to database")
    } catch (error) {
        console.log(err)
    }
    console.log("port is running on 8000")
})

/*
{
  "firstName":"Nisha",
  "lastName":"Sharma",
  "email": "nisha@gmail.com",
  "department": "Marketing",
  "salary":20000
  
}
*/
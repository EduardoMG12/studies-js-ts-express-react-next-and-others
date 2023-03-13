import express from "express"
import routes from "./routes.js"


const app = express()

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.use(routes)

app.listen(3333, () => {
    console.log("server started")
    console.log("http://localhost:3333")
})

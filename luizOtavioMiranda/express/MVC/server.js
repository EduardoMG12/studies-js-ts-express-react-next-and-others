import express from "express"
import routes from "./routes.js"
import path from 'path';
global.__dirname = path.resolve('.')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public'))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3333, () => {
    console.log("server started")
    console.log("http://localhost:3333")
})

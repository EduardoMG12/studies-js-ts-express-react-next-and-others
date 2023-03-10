import express from "express"


const app = express()



app.get('/', (request, response) => {
    response.send(`
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; background-color: gray; width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing:border-box">
    <form action="/" method="POST" >
        <label style="font-size:32px; color: white">Name:</label><input type="text" name="name"/>
        <button>Submit</button>
    </form>
    <p style="font-size:32px; color: white">hello <b>world</b></p>
    </div>
    `)
})

app.post("/", (request, response) => {
    response.send(`
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; background-color: gray; width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing:border-box">
        <p style="font-size:32px; color: white">Recebi o <b>formulario</b></p>
    </div>`)
})


app.listen(3333, () => {
    console.log("server started")
    console.log("http://localhost:3333")
})

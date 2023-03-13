export const homePageGet = (request, response) => {
    response.send(`
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; background-color: gray; width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing:border-box">
    <form action="/" method="POST" >
        <label style="font-size:32px; color: white">Name:</label><input type="text" name="userName"/>
        <button>Submit</button>
    </form>
    <p style="font-size:32px; color: white">hello <b>world</b></p>
    </div>
    `)
}

export const homePagePost = ("/", (request, response) => {
    response.send(`
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; background-color: gray; width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing:border-box">
        <p style="font-size:32px; color: white">Recive form: <b>${request.body.userName != "" ? request.body.userName : "voce mandou o input vazio mano!?"}</b></p>
    </div>`)
})

export const homePageGetId = (request, response) => {
    request.params.userId ?
        response.send(
            ` <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; background-color: gray; width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing:border-box">
            <p style="font-size:32px; color: white">I am to the home with params id: ${request.params.userId}</p>
            </div>`
        )
        :
        response.send(`
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; background-color: gray; width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing:border-box">
    
    <p style="font-size:32px; color: white">I am to the home</b></p>
    </div>
    `)
}


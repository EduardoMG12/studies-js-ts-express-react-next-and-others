export const homePageGet = (request, response) => {
    response.render('index')
}

export const homePagePost = ("/", (request, response) => {
    response.send(`
    <div style="display: flex; align-items: center; flex-direction: column; justify-content: center; background-color: gray; width: 100vw; height: 100vh; margin: 0; padding: 0; box-sizing:border-box">
        <p style="font-size:32px; color: white">Recive form: <b>${request.body.userName != "" ? request.body.userName : "voce mandou o input vazio mano!?"}</b></p>
    </div>`)
})


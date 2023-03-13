export const contactPageGetId = (request, response) => {
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


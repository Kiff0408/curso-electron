const { app, BrowserWindow } = require("electron")

app.whenReady()
    .then(function () {

        const janela = new BrowserWindow({
            autoHideMenuBar: true,
            height: 600,
            width: 800,
            resizable: false
        })
        janela.loadFile("./public/index,html")
    })
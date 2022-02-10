const { app, BrowserWindow } = require('electron')

let window = BrowserWindow | null

const createWindow = () => {
  window = new BrowserWindow({
    show: false,
    width: 1520,
    height: 1000,
    minWidth: 1440,
    minHeight: 920,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: false
    }
  })

  window.on('closed', () => {})

  window.loadURL('http://localhost:3000')

  window.once('ready-to-show', () => window.show())
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// let mainWindow: BrowserWindow | null

// const createMainWindow = () => {
//   mainWindow = new BrowserWindow({
//     width: 1440,
//     height: 920,
//     minWidth: 1440,
//     minHeight: 920,
//     show: false,
//     backgroundColor: 'white',
//     webPreferences: {
//       nodeIntegration: false
//     }
//   })
//   const startURL = 'http://localhost:3000'

//   mainWindow.loadURL(startURL)

//   mainWindow.once('ready-to-show', () => mainWindow?.show())

//   mainWindow.on('closed', () => {})
// }

// app.whenReady().then(() => {
//   createMainWindow()

//   app.on('activate', () => {
//     if (!BrowserWindow.getAllWindows().length) {
//       createMainWindow()
//     }
//   })
// })

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

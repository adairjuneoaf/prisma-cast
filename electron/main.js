const { app, BrowserWindow } = require('electron')
const { isDev } = require('electron-is-dev')
const { path } = require('path')

let window

const createWindow = () => {
  window = new BrowserWindow({
    show: false,
    width: 1520,
    height: 1000,
    minWidth: 1440,
    minHeight: 920,
    skipTaskbar: true,
    icon: 'public/icon.png',
    webPreferences: {
      nodeIntegration: false
    }
  })

  window.on('closed', () => {
    win = null
  })

  window.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  window.webContents.openDevTools()

  window.setOverlayIcon('public/ico.png', 'Icone da aplicação.')

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

const { app, BrowserWindow } = require('electron')
const processMessage = require('./processMessage')

// 创建窗口
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 页面直接使用node的能力 用于引入node模块 执行命令
    },
  })
  // 加载页面
  win.loadFile('./src/index.html')
  win.webContents.openDevTools() // 打开控制台
  // 通信逻辑   
  const ProcessMessage = new processMessage(win)
  ProcessMessage.init()
}

// app ready 创建窗口
app.whenReady().then(createWindow)

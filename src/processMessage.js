const { ipcMain } = require('electron')
class ProcessMessage {
  /**
   * 进程通信
   * @param {*} win 创建的窗口
   */
  constructor(win) {
    this.win = win
    this.isActive = false
  }
  init() {
    this.watch()
  }
  // 初始化路径
  initPath() {
    this.updatePath(initPath)
  }
  // 监听执行的命令
  watch() {
    // 页面准备好了
    ipcMain.on('page-ready', () => {
      this.sendFocus()
    })
    // 监听是否聚焦
    this.win.on('focus', () => {
      this.isActive = true
      this.sendFocus()
    })
    this.win.on('blur', () => {
      this.isActive = false
      this.sendFocus()
    })
  }
  sendFocus() {
    this.win.webContents.send('win-focus', this.isActive)
  }
}

module.exports = ProcessMessage

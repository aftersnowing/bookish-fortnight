const { remote } = require("electron");
const { BrowserWindow, ipcRenderer } = remote;

let subWindow;

function createWindow() {
  if (typeof subWindow !== "object") {
    subWindow = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: {
        nodeIntegration: true
      }
    });
  }

  subWindow.loadFile("../sub.html");

  subWindow.on("closed", function() {
    subWindow = undefined;
  });
}

ipcRenderer.send("testMsg", "Hello World!");
module.exports = { createWindow };

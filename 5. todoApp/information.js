const { remote } = require("electron");
const { BrowserWindow } = remote;

let infoWindow;

function createWindow() {
  if (typeof infoWindow !== "object") {
    infoWindow = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: {
        nodeIntegration: true
      }
    });
  }

  infoWindow.loadFile("../information.html");

  infoWindow.on("closed", function() {
    infoWindow = undefined;
  });
}

module.exports = { createWindow };

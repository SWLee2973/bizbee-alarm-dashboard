import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow | undefined;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
  });

  mainWindow.loadURL("http://localhost:3000");
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = undefined;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === undefined) {
    createWindow();
  }
});

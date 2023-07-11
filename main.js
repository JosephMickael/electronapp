// Import required modules from Electron
const { app, BrowserWindow } = require('electron');
// // Import electron-reload
// const electronReload = require('electron-reload');

// // Specify the paths to watch for changes
// electronReload(__dirname, {
//   electron: require('electron')
// });


// Create a new browser window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Allows the use of Node.js modules in the renderer process
    }
  });

  // Load the index.html file into the window
  win.loadFile('index.html');

  // Open the DevTools (optional)
  // win.webContents.openDevTools();
}

// Event: Called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  // Event: macOS-specific behavior when all windows are closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

// Event: Called when the application is activated (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

let mainWindow; // Declare mainWindow globally to prevent it from being garbage collected

function createWindow() {
  // Log the user data path to the console for debugging login issues
  console.log('Electron User Data Path:', app.getPath('userData'));

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200, // Initial width of the window
    height: 800, // Initial height of the window
    minWidth: 800, // Minimum width
    minHeight: 600, // Minimum height
    title: "Discord", // Title of the window
    icon: path.join(__dirname, 'icon.ico'), // Path to the application icon
    autoHideMenuBar: true, // Hides the menu bar by default (reappears on Alt key press)
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'), // Optional: If you need a preload script
      nodeIntegration: false, // It's safer to disable Node.js integration in the renderer
      contextIsolation: true, // Isolate the context of the preload script from the page
      webviewTag: true, // Enable <webview> tag if you plan to use it (not strictly needed for a simple wrapper)
    }
  });

  // Load discord.com/app directly.
  // This makes the Electron app act as a wrapper for the Discord web app.
  mainWindow.loadURL('https://discord.com/app');

  // Open external links in the default browser, not within the Electron app.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://')) { // Only open external https links
      shell.openExternal(url);
      return { action: 'deny' }; // Deny opening the link in a new Electron window
    }
    return { action: 'allow' }; // Allow other types of links (e.g., internal Electron links)
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There's, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
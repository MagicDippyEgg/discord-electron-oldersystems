const { contextBridge, ipcRenderer } = require('electron');
const { desktopCapturer } = require('electron'); // desktopCapturer is a main process module, but we can call it here.

// Expose a function to the renderer process to get screen sources
contextBridge.exposeInMainWorld('electronAPI', {
  getScreenSources: async () => {
    // This calls the main process's desktopCapturer to get screen sources.
    // We only need to expose specific methods, not the whole module.
    const sources = await ipcRenderer.invoke('get-screen-sources');
    return sources;
  }
});

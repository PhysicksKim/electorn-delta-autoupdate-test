import { ipcMain, BrowserWindow, app } from 'electron';

export const setupMainWindowIpcMainHandlers = (
  mainWindow: BrowserWindow | undefined,
  createMatchliveWindow: () => Promise<BrowserWindow | undefined>,
) => {
  ipcMain.on('open-matchlive-window', () => {
    createMatchliveWindow();
  });

  ipcMain.on(
    'main-window-control',
    (event, action: 'minimize' | 'quit-app') => {
      if (!mainWindow) return;

      switch (action) {
        case 'minimize':
          mainWindow.minimize();
          break;
        case 'quit-app':
          app.quit();
          break;
        default:
          console.log(`Unknown action: ${action}`);
      }
    },
  );

  ipcMain.on('to-app', (event, data) => {
    mainWindow!.webContents.send('to-app', data);
  });

  ipcMain.on('matchlive-react-ready', () => {
    mainWindow?.webContents.send('to-app', { type: 'SEND_SHOW_PHOTO' });
  });
};

export const setupMatchliveIpcMainHandlers = (
  matchliveWindow: BrowserWindow | undefined,
) => {
  if (!matchliveWindow) return;
  ipcMain.on('control-to-matchlive', async (event, action: string) => {
    switch (action) {
      case 'refresh':
        matchliveWindow.reload();
        break;
      case 'minimize':
        if (matchliveWindow.isMinimized()) {
          matchliveWindow.restore();
        } else {
          matchliveWindow.minimize();
        }
        break;
      case 'close':
        matchliveWindow.close();
        break;
      default:
        console.log(`Unknown action: ${action}`);
    }
  });

  ipcMain.on('to-matchlive', (event, data) => {
    matchliveWindow!.webContents.send('to-matchlive', data);
  });
};

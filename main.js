const { app, BrowserWindow, Menu} = require('electron');


function createWindow(){
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadFile('index.html')
}
//main menu
const createMainMenu = [
  {
    label: 'File',
    submenu: [
      {label: 'Open'},
      {label: 'Recent'},
      {label: 'Save As'},
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin',
        click(){app.quit();}
      }
    ]
  },
  {
    label: 'Project',
    submenu: [
      {label: 'ercms'},
      {label: 'eims'},
      {label: 'qrgen'}
    ]
  },
  {
    label: 'Preferences',
    submenu: [
      {label: 'Theme'},
      {label: 'Font'},
      {label: 'Settings'}
    ]
  },
  {
    label: 'Help',
    submenu: [{ label: 'Documentation'},
      {label: 'Github'},
      {label: 'Changelog'},
      {label: 'About Initialize'}
    ]
  }
];
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () =>{
    if(BrowserWindow.getAllWindows().length === 0){
      createWindow()
    }
  })
  const mainMenu = Menu.buildFromTemplate(createMainMenu);
  Menu.setApplicationMenu(mainMenu);
})
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
});
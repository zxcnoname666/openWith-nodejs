const cp = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('starting to build');
cp.exec('npm run build', (e) => {
    if(e) return console.error(e);

    const osString = (process.platform == 'darwin' ? 'mac': (process.platform == 'win32' ? 'win' : 'linux'));
    const targetDir = path.join(__dirname, 'bins');
    const targetPath = path.join(targetDir, osString + '.node');

    if(!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, {recursive:true});
    if(fs.existsSync(targetPath)) fs.rmSync(targetPath, {recursive:true});
    fs.copyFileSync(path.join(__dirname, 'build/Release/openWith.node'), targetPath);

    console.log('successfully builded');
});
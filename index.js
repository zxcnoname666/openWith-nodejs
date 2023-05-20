const path = require('path');
const fs = require('fs');

const bin = (() => {
    if(process.platform == 'win32'){
        return require('./bins/win.node');
    }

    const { exec } = require('child_process');
    switch (process.platform) {
        case 'darwin': return {
            open(path){
                exec('xdg-open ' + path);
                return true;
            }
        }
        case 'linux' || 'freebsd' || 'freebsd': return {
            open(path){
                exec('open ' + path);
                return true;
            }
        }
        default: return {
            open(_){
                console.log('[OpenWith] Your OS not supported - ' + process.platform);
                return false;
            }
        }
    }
})();

module.exports = class openWith {
    static open(file){
        file = path.normalize(file);
        if(!fs.existsSync(file)) return false;
        return bin.open(file);
    }
}
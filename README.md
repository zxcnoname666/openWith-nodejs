# OpenWith
<p align="center">
<a href="javascript:void(0)">
<img src="https://readme-typing-svg.herokuapp.com?font=Jost&pause=10000&color=DB33F7&center=true&vCenter=true&width=435&lines=Open+With">
</a>
</p>
<p align="center">
Open files where you want them
</p>

# Info
Opens a dialog window with the choice of application to open the file.

!! The dialog window opens only on Windows, on linux & darwin the file opens immediately.

#### Result:
<p align="center">
<a href="javascript:void(0)">
<img src="https://github.com/fydne/openWith-nodejs/assets/121295212/e9e4353c-a8d0-4a62-879d-b8b041eb4432">
</a>
</p>

# Example code
```js
const openWith = require('open-with');

const result = openWith.open(__dirname + '/index.js');
```
```js
const openWith = require('open-with');
const path = require('path');

const result = openWith.open(path.join(__dirname, 'index.js'));
```

<p align="center">
<a href="javascript:void(0)">
<img src="https://profile-counter.glitch.me/openWith-nodejs/count.svg" width="200px" />
</a>

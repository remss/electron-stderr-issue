const { spawn } = require('child_process');
const path = require('path');
const os = require('os')

const bin = os.platform() == 'win32' ? "electron.exe" : "electron"
const binPath = path.join('node_modules', 'electron', 'dist', bin)
const cmd = spawn(binPath, ['main.js']);

cmd.stdout.on('data', (data) => {
  console.log(`stdout << ${JSON.stringify(data.toString('utf8'))}`);
});
cmd.stderr.on('data', (data) => {
  console.log(`stderr << ${JSON.stringify(data.toString('utf8'))}`);
});

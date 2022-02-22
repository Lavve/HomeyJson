'use strict';

const fs = require('fs');
const path = './backup_files/';

const sections = ['devices', 'folders', 'variables', 'alarms', 'zones'];
let flows = fs.readFileSync(path + 'flows.json', 'utf8');

for (let i in sections) {
  const json = JSON.parse(fs.readFileSync(path + sections[i] + '.json', 'utf8'));
  for (let item in json) {
    const rgx = new RegExp(json[item].id, 'g');
    flows = flows.replace(rgx, json[item].name);
  }
}
const flowJson = JSON.parse(flows);

if (process.argv.length === 2) {
  fs.unlink(path + '_flows_names.json', e => { });
  fs.writeFile(path + '_flows_names.json', flows, err => {
    if (err) { console.log(err); return };
    console.log('---');
    console.log(`New file is located here: "${path}_flows_names.json"`);
    console.log('---');
  });
} else if (process.argv.length === 3) {
  const cloudId = JSON.parse(fs.readFileSync(path + 'system.json', 'utf8')).cloudId;

  console.log('---');
  console.log(`"${process.argv[2]}" is found in the following flows:`);
  console.log('---');

  for (let row in flowJson) {
    const data = JSON.stringify(flowJson[row]);
    if (data.includes(process.argv[2])) {
      console.log(`${flowJson[row].name} :: https://my.homey.app/homeys/${cloudId}/flows/${row}`);
    }
  }
  console.log('---');
}

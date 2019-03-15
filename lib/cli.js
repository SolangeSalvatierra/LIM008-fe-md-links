#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _stats = require("./models/stats.js");

const path = process.argv[2];
const validate = process.argv[3];
const status = process.argv[4];

if (validate === '--validate' && status === '--stats' || status === '--stats' && validate === '--validate') {
  (0, _index.mdLinks)(path, {
    validate: true
  }).then(res => {
    (0, _stats.statsLinks)(res).then(res => console.log(res));
    (0, _stats.statLinksBroken)(res).then(res => console.log(res));
  }).catch(error => console.log(error));
} else if (validate === '--validate') {
  (0, _index.mdLinks)(path, {
    validate: true
  }).then(res => res.forEach(objLinks => console.log(`file: ${objLinks.file}, \nhref : ${objLinks.href}, \nvalue : ${objLinks.value}, \nstatus: ${objLinks.status}, \ntext: ${objLinks.text}`))).catch(error => console.log(error));
} else if (validate === '--stats') {
  (0, _index.mdLinks)(path).then(res => {
    (0, _stats.statsLinks)(res).then(response => console.log(response));
  }).catch(error => console.log(error));
} else {
  (0, _index.mdLinks)(path).then(res => res.forEach(objLinks => console.log(`file: ${objLinks.file} \nLink: ${objLinks.href} \ntext: ${objLinks.text}`))).catch(err => console.log(err));
}
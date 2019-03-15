#!/usr/bin/env node
import {mdLinks} from './index.js';
import {statsLinks, statLinksBroken} from './models/stats.js';

const path = process.argv[2];
const validate = process.argv[3];
const status = process.argv[4];

if (validate === '--validate' && status === '--stats' || status === '--stats' && validate === '--validate') {
  mdLinks(path, {validate: true}) 
    .then(res => {
      statsLinks(res).then(res => console.log(res));
      statLinksBroken(res).then(res => console.log(res));
    })
    .catch(error => console.log(error));
} else if (validate === '--validate') {
  mdLinks(path, {validate: true})
    .then(res => res.forEach(objLinks => 
      console.log(`file: ${objLinks.file}, \nhref : ${objLinks.href}, \nvalue : ${objLinks.value}, \nstatus: ${objLinks.status}, \ntext: ${objLinks.text}`)
    ))
    .catch(error => console.log(error));
} else if (validate === '--stats') {
  mdLinks(path)
    .then(res => { 
      statsLinks(res)
        .then(response => console.log(response));
    })
    .catch(error => console.log(error));
} else {
  mdLinks(path)
    .then(res => res.forEach((objLinks) => 
      console.log(`file: ${objLinks.file} \nLink: ${objLinks.href} \ntext: ${objLinks.text}`)))
    .catch(err => console.log(err));
}


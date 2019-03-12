"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statLinksBroken = exports.statsLinks = exports.pathAbsMD = void 0;

var _validate = require("./validate.js");

const pathAbsMD = [{
  href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'
}, {
  href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'
}, {
  href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'
}];
exports.pathAbsMD = pathAbsMD;

const statsLinks = arrObjLinks => {
  const validate = (0, _validate.validateLinks)(arrObjLinks);
  return new Promise((res, rej) => {
    validate.then(links => {
      const total = links.length;
      const uniqueLinks = [...new Set(links.map(links => links.href))].length;
      res(`Total : ${total} Unique: ${uniqueLinks}`);
    }).catch(error => rej(error));
  });
};

exports.statsLinks = statsLinks;

const statLinksBroken = arrObjLinks => {
  const validate = (0, _validate.validateLinks)(arrObjLinks);
  return new Promise((res, rej) => {
    validate.then(link => {
      const filterBroken = link.filter(links => links.value === 'Fail');
      res(`Broken: ${filterBroken.length}`);
    }).catch(error => rej(error));
  });
};

exports.statLinksBroken = statLinksBroken;
statsLinks(pathAbsMD).then(result => console.log(result)); // statLinksBroken(pathAbsMD).then((result) => console.log(result));
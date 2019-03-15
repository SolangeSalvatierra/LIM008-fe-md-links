"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

const fetch = require('node-fetch');
/**
 * @function {array de objetos con href, title, text} 
 * @param {archivo MD} path
 * @return {links validos OK y fallidos FAIL}
 */


const validateLinks = arrObjec => {
  const resulArray = arrObjec.map(links => new Promise((resolve, reject) => {
    fetch(links.href).then(stat => {
      if (stat.status >= 200 && stat.status < 400) {
        links.status = stat.status;
        links.value = 'OK';
        resolve(links);
      } else {
        links.status = stat.status;
        links.value = 'Fail';
        resolve(links);
      }
    }).catch(error => {
      links.status = '';
      links.value = 'No Found';
      resolve(links);
    });
  }));
  return Promise.all(resulArray);
}; // validateLinks([{ href: 'https://github.com/soumak77llll/firebase-mock',
//   text: 'firebase-mock',
//   file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md' },
// { href: 'https://www.google.com',
//   text: '1234567890-1234567890-1234567890-1234567890-123456',
//   file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'},
// { href: 'https://cvcvcxbb',
//   text: '1234567890-1234567890-1234567890-1234567890-123456',
//   file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'}]).then((result) => console.log(result));


exports.validateLinks = validateLinks;
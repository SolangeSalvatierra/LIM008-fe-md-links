const linkCheck = require('link-check');
let paths = require('path');
const fs = require('fs');
import {getMDContent} from './src/models/links.js';

export const verifyLink = (array) => {
// console.log(array);
  array.forEach(element => {
    // console.log(element.href);
    linkCheck(element.href, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      let valor = '';
      if (result.statusCode === 200) {
        valor = 'ok';
      } 
      if (result.statusCode === 404) {
        valor = 'fail';
      }
      // poner esta informacion dentro de un array 
      console.log(`${result.link}   ${element.file}   ${element.text}   ${result.statusCode}${valor}`);
    });
  });
};
verifyLink(getMDContent(pathAbsMD));
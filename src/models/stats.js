import {getMDContent} from './src/models/links.js';

export const statsLinks = (array) => {
  let arrLinks = [];
  array.forEach(element => {
    arrLinks.push(element.href);
  });
  console.log('Total: ', arrLinks.length);
  // console.log('Broken: ',arrLinks.unique);
  //  Array.from(new Set(arrLinks))
  console.log('Unique: ', [...new Set(arrLinks)].length);
};
statsLinks(getMDContent(pathAbsMD));

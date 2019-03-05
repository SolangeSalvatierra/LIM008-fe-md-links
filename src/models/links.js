import { fstat } from 'fs';

let paths = require('path');
const fs = require('fs');
const myMarked = require('marked');
const linkCheck = require(' link-check ');   


export const evaluatePath = (path) => {
  return (paths.isAbsolute(path));
};
// export const evaluatePath = (path) => {
//   const typePath = paths.isAbsolute(path);
//   console.log(typePath);
//   return typePath;
// };

export const transformToAbsPath = (path) => {
  return (paths.resolve(path));
};

export const recognizeIfIsFile = (pathAbs) => { 
  return (fs.statSync(pathAbs).isFile());
};

export const validateExtMD = (pathAbs) => { 
  return (paths.extname(pathAbs));
};

export const getMDContent = (pathAbsMD) => {
  const data = (fs.readFileSync(pathAbsMD, 'utf8'));
  let extraclink = [];
  const renderer = new myMarked.Renderer();
  renderer.link = (href, title, text) => {
    extraclink.push({href, text, file: pathAbsMD });
    return '';
  };

  myMarked(data, {renderer});
  return extraclink;
};

// export const verifyLink = (href) => {
//   const link = linkCheck(href, (err, result) => {
//     if (err) {
//       console.error(error);
//       return;
//     }
//     console.log(`${result.link} is ${result.status}`);
//   });
// };

export const verifyLink = (err, result) => {
  
}
import { fstat } from 'fs';

let paths = require('path');
const fs = require('fs');
const myMarked = require('marked');


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
  const data = (fs.readFileSync(pathAbsMD, 'utf8').toString());
  let extraclink = [];
  const renderer = new myMarked.Renderer();
  renderer.extraclink = (href, title, text) => {
    extraclink.push({href, text, file: pathAbsMD });
    return '';
  };

  myMarked(data, {renderer});
  return extraclink;
};

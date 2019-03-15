import {evaluatePath, transformToAbsPath, contenFileMD, getMDContent} from './models/links.js';
import {validateLinks} from './models/validate.js';

export const mdLinks = (path, options) => {
  let pathAbs;
  if (!evaluatePath(path)) {
    pathAbs = transformToAbsPath(path);
  } else {
    pathAbs = path;
  };
  return new Promise((resolve) => {
    if (!options.validate) {
      resolve(getMDContent(contenFileMD(pathAbs)));
    } if (options.validate) {
      resolve(validateLinks(getMDContent(contenFileMD(pathAbs))));
    } 
  });
};


// mdLinks('test\\pruebastest', {validate: true})
//   .then(res => console.log(res));
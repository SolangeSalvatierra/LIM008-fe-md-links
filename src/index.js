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
    if (options === undefined) {
      resolve(getMDContent(contenFileMD(pathAbs)));
    } if (options.validate) {
      resolve(validateLinks(getMDContent(contenFileMD(pathAbs))));
    } 
  });
};

// mdLinks('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest', {validate: true})
//   .then(res => console.log(res));

// mdLinks('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest')
//   .then(res => console.log(res));

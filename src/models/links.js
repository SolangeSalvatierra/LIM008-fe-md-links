let path = require('path');
const fs = require('fs');
const myMarked = require('marked');
// const pathAbsMD = 'C:\\Users\\Maria Paula\\Desktop\\markdown\\README.md';

/**
 * @function {para saber si la ruta es absoluta} 
 * @param {la ruta ingresada es una cadena string} path
 * @return {retornar un valor boleando}
 */
export const evaluatePath = (pathEvaluate) => {
  return path.isAbsolute(pathEvaluate);
};

/**
 * @function {para convertir una ruta relativa a ruta absoluta} 
 * @param {la ruta ingresada es una cadena string} path
 * @return {retornar una cadena string}
 */
export const transformToAbsPath = (pathRelative) => {
  return path.resolve(pathRelative);
};

export const routeIsDirectory = (pathAbs) => {
  return fs.lstatSync(pathAbs).isDirectory();
};

export const routeIsFile = (pathAbs) => {
  return fs.lstatSync(pathAbs).isFile();
};

/**
 * @function {verifica si es un archivo MD} 
 * @param {la ruta del archivo} path
 * @return {boleando, tru si es MD / false }
 */
export const validateExtMD = (pathAbs) => {
  return path.extname(pathAbs) === '.md';
};

// RECURSIVIDAD con directorio
/**
 * @function {concatena ruta y nombre}
 * @param {ruta absoluta}
 * @param {Debería retornar un array con todos las rutas MD}
 */
export const contenFileMD = (route) => {
  let arrMD = [];
  if (routeIsFile(route)) {
    if (validateExtMD(route)) {
      arrMD.push(route);
    } 
  } if (routeIsDirectory(route)) {
    let arrFile = fs.readdirSync(route);
    arrFile.forEach((fileName) => {
      arrMD = arrMD.concat(contenFileMD(path.join(route, fileName)));
    });
  };
  return arrMD;
};

// console.log(contenFileMD(`${process.cwd()}\\test\\pruebastest`));

/**
 * @function {captura los elemento de los archivos MD} 
 * @param {archivo MD} path
 * @return {un array de objetos con href, title, text}
 */
export const getMDContent = (arrMD) => {
  let arrLinks = [];
  arrMD.map((routeMD) => {
    let data = (fs.readFileSync(routeMD, 'utf8'));
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
      text = text.slice(0, 50);
      arrLinks.push({ href, text, file: routeMD });
    };
    myMarked(data, { renderer });
  });
  return arrLinks;
};

// console.log(getMDContent([ 
//   'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Fail.md',
//   'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
//   'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md' 
// ]));


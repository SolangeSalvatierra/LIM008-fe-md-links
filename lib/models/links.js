"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMDContent = exports.validateExtMD = exports.readsDirectory = exports.transformToAbsPath = exports.evaluatePath = void 0;

let paths = require('path');

const fs = require('fs');

const myMarked = require('marked');

const pathAbsMD = 'C:\\Users\\Maria Paula\\Desktop\\markdown\\README.md';
/**
 * @function {para saber si la ruta es absoluta} 
 * @param {la ruta ingresada es una cadena string} path
 * @return {retornar un valor boleando}
 */

const evaluatePath = pathEvaluate => {
  return paths.isAbsolute(pathEvaluate);
};
/**
 * @function {para convertir una ruta relativa a ruta absoluta} 
 * @param {la ruta ingresada es una cadena string} path
 * @return {retornar una cadena string}
 */


exports.evaluatePath = evaluatePath;

const transformToAbsPath = pathRelative => {
  return paths.resolve(pathRelative);
}; // RECURSIVIDAD con directorio

/**
 * @function {arrir directorio} 
 * @param {la ruta del archivo} path
 * @return {array,con nombres de los archivos}
 */


exports.transformToAbsPath = transformToAbsPath;

const readsDirectory = router => {
  let filePathArray = [];
  const arrayFileNames = fs.readdirSync(router); // return array con nombres de los elementos del directorio

  arrayFileNames.forEach(fileName => {
    // recorro cada elemento del arreglo
    let arrayOfFileRoute = paths.join(router, fileName); // concatena la ruta con archivo

    const stat = fs.statSync(arrayOfFileRoute); // devuelve propiedades de cada archivo

    if (stat.isDirectory()) {
      // si el elemento es un directorio
      filePathArray = filePathArray.concat(readsDirectory(arrayOfFileRoute)); // volver a leer si es un directorio
    } else {
      filePathArray.push(arrayOfFileRoute);
    }
  });
  return filePathArray;
};
/**
 * @function {verifica si es un archivo MD} 
 * @param {la ruta del archivo} path
 * @return {boleando, tru si es MD / false }
 */


exports.readsDirectory = readsDirectory;

const validateExtMD = pathAbs => {
  return paths.extname(pathAbs);
};
/**
 * @function {captura los elemento de los archivos MD} 
 * @param {archivo MD} path
 * @return {un array de objetos con href, title, text}
 */


exports.validateExtMD = validateExtMD;

const getMDContent = pathAbsMD => {
  const data = fs.readFileSync(pathAbsMD, 'utf8');
  let arrLinks = [];
  const renderer = new myMarked.Renderer();

  renderer.link = (href, title, text) => {
    text = text.slice(0, 50);
    arrLinks.push({
      href,
      text,
      file: pathAbsMD
    });
  };

  myMarked(data, {
    renderer
  });
  return arrLinks;
}; // console.log(getMDContent('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'));


exports.getMDContent = getMDContent;
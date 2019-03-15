"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _links = require("./models/links.js");

var _validate = require("./models/validate.js");

const mdLinks = (path, options) => {
  let pathAbs;

  if (!(0, _links.evaluatePath)(path)) {
    pathAbs = (0, _links.transformToAbsPath)(path);
  } else {
    pathAbs = path;
  }

  ;
  return new Promise(resolve => {
    if (options === undefined) {
      resolve((0, _links.getMDContent)((0, _links.contenFileMD)(pathAbs)));
    }

    if (options.validate) {
      resolve((0, _validate.validateLinks)((0, _links.getMDContent)((0, _links.contenFileMD)(pathAbs))));
    }
  });
}; // mdLinks('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest', {validate: true})
//   .then(res => console.log(res));
// mdLinks('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest')
//   .then(res => console.log(res));


exports.mdLinks = mdLinks;
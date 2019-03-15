"use strict";

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
    if (!options.validate) {
      resolve((0, _links.getMDContent)((0, _links.contenFileMD)(pathAbs)));
    }

    if (options.validate) {
      resolve((0, _validate.validateLinks)((0, _links.getMDContent)((0, _links.contenFileMD)(pathAbs))));
    }
  });
};

module.exports = mdLinks;
mdLinks('test\\pruebastest', {
  validate: true
}).then(res => console.log(res));
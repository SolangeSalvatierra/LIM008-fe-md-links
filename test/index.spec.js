import {
  evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  validateExtMD,
  getMDContent,
  verifyLink,

} from '../src/models/links.js';

let paths = require('path');

describe('evaluatePath', () => {
  it('debería ser igual a una función', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('debería retornar true si la ruta es absoluta', () => {
    expect(evaluatePath('C:\\mi-ruta-absoluta')).toEqual(true);
  });
  it('debería retornar false si la ruta es relativa', () => {
    expect(evaluatePath('.\\mi-ruta-relativa')).toEqual(false);
  });
});

describe('transformToAbsPath', () => {
  it('debería ser una función', () => {
    expect(typeof transformToAbsPath).toBe('function');
  });
  it('deberia retornar dato tipo string', () => {
    expect(typeof transformToAbsPath('C:\\mi-ruta-absoluta')).toEqual('string');
  });
  it('debería retornar una ruta absoluta al ingresar una ruta relativa', () => {
    expect(transformToAbsPath('.\\mi-ruta-relativa')) .toEqual(paths.normalize('D:\\PROYECTOS solange\\Markdown Links\\LIM008-fe-md-links\\mi-ruta-relativa'));
    // expect(transformToAbsPath('.\\mi-ruta-relativa')).toEqual(paths.normalize('D:\\data ddd\\LABORATORIA\\Markdown\\LIM008-fe-md-links\\mi-ruta-relativa'));
  });
});

describe('recognizeIfIsFile', () => {
  it('debería ser una función', () => {
    expect(typeof recognizeIfIsFile).toBe('function');
  });
  it.skip('debería retornar un valor tipo booleando', () => {
    expect(recognizeIfIsFile('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/test')).toEqual(false) ;
  }); 
});

describe('validateExtMD', () => {
  it('debería ser una función', () => {
    expect(typeof validateExtMD).toBe('function');
  });
  it('debería retornar .md', () => {
    expect(validateExtMD('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/README.md')).toEqual('.md');
  });
});

describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });
  // it.only('Debería retornar un dato de tipo string', () => {
  // expect(typeof getMDContent('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/README.md')).toEqual('string');
  // });
  // console.log(getMDContent('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/README.md'));

  it('Debería convertir un archivo .MD a HTML', () => {
    // expect(typeof getMDContengetMDContentt('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/README.md')).toEqual('object');
    expect(typeof getMDContent('D:\\PROYECTOS solange\\Markdown Links\\LIM008-fe-md-links\\README.md')).toEqual('object');
  });
  console.log(getMDContent('D:\\PROYECTOS solange\\Markdown Links\\LIM008-fe-md-links\\README.md'));
});

describe('verifyLink', () => {
  it.only('debería ser una función', () => {
    expect(typeof verifyLink).toBe('function');
  });
  
  it('Debería convertit un archivo .MD a HTML', () => {
    // expect(typeof getMDContengetMDContentt('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/README.md')).toEqual('object');
    expect(typeof verifyLink('D:\\PROYECTOS solange\\Markdown Links\\LIM008-fe-md-links\\README.md')).toEqual('object');
  });
  // console.log(getMDContent('D:\\PROYECTOS solange\\Markdown Links\\LIM008-fe-md-links\\README.md'));
});
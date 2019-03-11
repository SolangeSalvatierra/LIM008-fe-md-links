import {
  evaluatePath,
  transformToAbsPath,
  validateExtMD,
  readsDirectory,
  getMDContent,
} from '../src/models/links.js';
import { link } from 'fs';

let paths = require('path');

const output = [
  'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Fail.md',
  'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md',
  'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Otros\\ruta.js',
  'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md' 
];
const output1 = [
  {href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md' },
  { href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md' },
  { href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md' },
  { href: 'http://bxwz.09games.com/significadodeloscolores',
    text: 'sigcolor',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md' },
  { href: 'mailto:front@end.la',
    text: 'front@end.la',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md' },
  { href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
    text: 'mock-cloud-firestore',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md' } 
];

describe('evaluatePath', () => {
  it('debería ser igual a una función', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('debería retornar true si la ruta es absoluta', () => {
    expect(evaluatePath('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test')).toEqual(true);
  });
  it('debería retornar false si la ruta es relativa', () => {
    expect(evaluatePath('.\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test')).toEqual(false);
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
    expect(transformToAbsPath('.\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test')) .toEqual(paths.normalize('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test'));
    // expect(transformToAbsPath('.\\mi-ruta-relativa')).toEqual(paths.normalize('D:\\data ddd\\LABORATORIA\\Markdown\\LIM008-fe-md-links\\mi-ruta-relativa'));
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

describe('readsDirectory', () => {
  it('debería ser una función', () => {
    expect(typeof readsDirectory).toBe('function');
  });
  it('Debería poder recorrer los archivos del directorio', () => {
    expect(readsDirectory('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest')).toEqual(output);
  });
});


describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });
  // console.log(getMDContent('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/README.md'));

  it('Debería retornar un array de objetos con href, text, file', () => {
    // expect(typeof getMDContengetMDContentt('D:/data ddd/LABORATORIA/Markdown/LIM008-fe-md-links/README.md')).toEqual('object');
    expect(getMDContent('D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Ok.md')).toEqual(output1);
  });
  // console.log(getMDContent('D:\\PROYECTOS solange\\Markdown Links\\LIM008-fe-md-links\\README.md'));
});



import {
  evaluatePath,
  transformToAbsPath,
  validateExtMD,
  contenFileMD,
  getMDContent,
} from '../src/models/links.js';
import { link } from 'fs';

let paths = require('path');

const ouput2 = [ 
  `${process.cwd()}\\test\\pruebastest\\Fail.md`,
  `${process.cwd()}\\test\\pruebastest\\Ok.md`,
  `${process.cwd()}\\test\\pruebastest\\Readme.md` 
];

const ouput3 = [ { href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: `${process.cwd()}\\test\\pruebastest\\Fail.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md`},
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'http://bxwz.09games.com/significadodeloscolores',
  text: 'sigcolor',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'mailto:front@end.la',
  text: 'front@end.la',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: `${process.cwd()}\\test\\pruebastest\\Ok.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://www.google.com',
  text: '1234567890-1234567890-1234567890-1234567890-123456',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'http://bxwz.09games.com/significadodeloscolores',
  text: 'sigcolor',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'mailto:front@end.la',
  text: 'front@end.la',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://github.com/soumak77llll/firebase-mock',
  text: 'firebase-mock',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` },
{ href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: `${process.cwd()}\\test\\pruebastest\\Readme.md` } ];

describe('evaluatePath', () => {
  it('debería ser igual a una función', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('debería retornar true si la ruta es absoluta', () => {
    expect(evaluatePath(`${process.cwd()}\\test`)).toEqual(true);
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
    expect(transformToAbsPath('.\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test')) .toEqual(paths.normalize(`${process.cwd()}\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test`));
  });
});


describe('contenFileMD', () => {
  it('debería ser una función', () => {
    expect(typeof contenFileMD).toBe('function');
  });
  it('Debería retornar un array con todos las rutas MD', () => {
    expect(contenFileMD(`${process.cwd()}\\test\\pruebastest`)).toEqual(ouput2);
  });
});


describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });

  it('Debería retornar un array de objetos con href, text, file', () => {
    expect(getMDContent(ouput2)).toEqual(ouput3);
  });
});



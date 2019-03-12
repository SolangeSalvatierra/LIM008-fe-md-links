import {validateLinks} from './validate.js';
export const pathAbsMD = [
  { href: 'https://github.com/soumak77llll/firebase-mock',
    text: 'firebase-mock',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md' },
  { href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'},
  { href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    file: 'D:\\PROYECTOS-solange\\Markdown-Links\\LIM008-fe-md-links\\test\\pruebastest\\Readme.md'}
];

export const statsLinks = (arrObjLinks) => {
  const validate = validateLinks(arrObjLinks);
  return new Promise((res, rej) => {
    validate.then((links) => {
      const total = links.length;
      const uniqueLinks = [...new Set(links.map(links => links.href))].length;
      res(`Total : ${total} Unique: ${uniqueLinks}`);
    }).catch(error => rej(error));
  });
};

export const statLinksBroken = (arrObjLinks) => {
  const validate = validateLinks(arrObjLinks);
  return new Promise((res, rej) => {
    validate.then((link) => {
      const filterBroken = link.filter(links => links.value === 'Fail');
      res(`Broken: ${filterBroken.length}`);
    }
    ).catch(error => rej(error));
  });
};


statsLinks(pathAbsMD).then((result) => console.log(result));
// statLinksBroken(pathAbsMD).then((result) => console.log(result));

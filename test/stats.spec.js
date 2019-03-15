import {statsLinks, statLinksBroken, pathAbsMD} from '../src/models/stats.js';

const ouput = 'Total : 3 \nUnique: 2';

describe('statsLinks', () => {
  it('debería ser igual a una función', () => {
    expect(typeof statsLinks).toBe('function');
  });
});
  

test('Debería retornar el total de links y cuantos de los links no se repiten', (done) => {
  statsLinks(pathAbsMD).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
});

describe('statLinksBroken', () => {
  it('debería ser igual a una función', () => {
    expect(typeof statLinksBroken).toBe('function');
  });
});
  
test('Debería contar cuantos links son broken', (done) => {
  statLinksBroken(pathAbsMD).then((respuesta) => {
    expect(respuesta).toEqual('Broken: 1');
    done();
  });
});


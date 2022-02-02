import insertExample from './../Insertadores/insertadores.js';

/*
  =>  Ejemplos de HTML.
*/

// Ejemplo de HTML #1 
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML1'),
  etiqueta: 'link',
  atributos: {
    rel: 'stylesheet',
    href: './IconeJz/src/iconejz.css'
  },
});

// Ejemplo de HTML #2
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML2'),
  etiqueta: 'script',
  atributos: {
    src: './IconeJz/src/iconejz.js'
  },
});

// Ejemplo de HTML #3
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML3'),
  etiqueta: 'jz-m',
});

// Ejemplo de HTML #4
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML4'),
  etiqueta: 'jz-m',
  atributos: {
    f: 'transparent',
    c: '#9500FF',
  }
});

// Ejemplo de HTML #5
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML5'),
  etiqueta: 'jz-x',
  atributos: {
    f: 'transparent',
    c: 'red',
    b: '50%',
    o: '0.3',
  }
});

// Ejemplo de HTML #6
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML6'),
  etiqueta: 'jz-play',
  atributos: {
    ['class']: 'iconPlay',
    c: 'gold',
    s: '40px',
  }
});

// Ejemplo de HTML #7
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML7'),
  etiqueta: 'jz-wng',
  atributos: {
    f: 'transparent',
    c: '#9500FF',
  }
});

// Ejemplo de HTML #8
insertExample.html({
  elemento: document.querySelector('.ejemplo-HTML8'),
  etiqueta: 'jz-wng',
  atributos: {
    f: 'transparent',
    t: '#CACACA',
    c: '#9500FF',
  }
});

/*
  =>  Ejemplos de CSS.
*/


// Ejemplo de CSS #1
insertExample.css({
  elemento: document.querySelector('.ejemplo-CSS1'),
  selector: ':root',
  propiedades: {
    ['--color-iconejz']: '#29FFAA',
  }  
});
'use strict';

const versionElement = document.querySelector('.header__version');

import('https://cdn.jsdelivr.net/npm/iconejz@latest/src/data/version.data.js')
  .then((module) => {
    const version = module.default;
    versionElement.innerText = version;
  })
  .catch((err) => {});

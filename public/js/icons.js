'use strict';

const iconList = window.IconeJz.getIconNames();
const main = document.querySelector('.main');

iconList.forEach((iconName) => {
  const icon = document.createElement('icon-card');
  icon.setAttribute('icon-name', iconName);
  main.append(icon);
});

/** @module components/floating-menu */

/**
 * Create a dropdown menu.
 * @extends HTMLElement
 */
const FloatingMenu = class extends HTMLElement {
  /** 
   * Enables the shadow DOM.
   */
  constructor () {
    super();
    
    this._root = this.attachShadow({ mode: 'open' });
  }
  
  /**
   * Renders the menu content.
   */
  _render () {
    const floatingMenu = document.createElement('div');
    floatingMenu.setAttribute('part', 'floating-menu');

    const menuIcon = document.createElement('icone-jz');
    menuIcon.setAttribute('is', 'menu');
    menuIcon.setAttribute('part', 'floating-menu__toggle');

    floatingMenu.append(menuIcon);

    const menuItemsData = [
      {
        is: 'moon--e',
        title: 'Change Theme',
      },
      {
        is: 'information',
        title: 'Examples',
        href: '/pages/examples.html',
      },
      {
        is: 'heart',
        title: 'Github Repository',
        href: 'https://www.github.com/OWLjz18/IconeJz'
      },
      {
        is: 'magnifying-glass',
        title: 'Icons',
        href: '/pages/icons.html'
      },
      {
        is: 'home',
        title: 'Home',
        href: '/index.html'
      },
      {
        is: 'instagram',
        title: 'Author Instagram',
        href: 'https://www.instagram.com/owljz18'
      },
      {
        is: 'github',
        title: 'Author Github',
        href: 'https://www.github.com/OWLjz18'
      },
      {
        is: 'email',
        title: 'Author Email',
        href: 'mailto:owl.jz18@gmail.com'
      },
    ];

    menuItemsData.forEach((itemData, index) => {
      const menuItem = document.createElement('li');
      menuItem.setAttribute('part', 'floating-menu__item');
      menuItem.setAttribute('title', itemData.title);
      menuItem.style.setProperty('--id', index);

      const icon = document.createElement('icone-jz');
      icon.setAttribute('is', itemData.is);
      icon.setAttribute('part', 'floating-menu__icon')

      if (itemData.is === 'moon--e') {
        icon.setAttribute('class', 'floating-menu__theme-icon');
      }

      if (!itemData.href) {
        menuItem.append(icon);
        floatingMenu.append(menuItem);
        return;
      }

      const itemLink = document.createElement('a');
      itemLink.setAttribute('part', 'floating-menu__link')
      itemLink.href = itemData.href;

      itemLink.append(icon);
      menuItem.append(itemLink);
      floatingMenu.append(menuItem);
    });

    this._root.append(floatingMenu);
  }
  
  /**
   * Makes the menu openable and closeable.
   */
  _openAndClose () {
    const menu = this._root.querySelector('[part="floating-menu"]');
    const iconMenu = this._root.querySelector('[part="floating-menu__toggle"]');
    const items = this._root.querySelectorAll('[part="floating-menu__item"]');
    
    iconMenu.addEventListener('click', (event) => {
      if (this._isTheMenuRecentlyMoved) {
        return;
      }

      this.classList.toggle('open');
      iconMenu.toggleContent('x');

      (this.classList.contains('open'))
        ? items.forEach(item => item.setAttribute('part', 'floating-menu__item floating-menu__item--visible'))
        : items.forEach(item => item.setAttribute('part', 'floating-menu__item'))
    });
  } 

  /** 
   * Allows you to change the theme of the page.
   */
  async _changeTheme () {
    const storage = window.localStorage;
    const container = document.querySelector('.container');
    const themeIcon = this._root.querySelector('.floating-menu__theme-icon');
    const preferenceColor = window.matchMedia('(prefers-color-scheme: dark)');

    const setDarkTheme = async () => {
      await themeIcon.changeContentFor('sun--e', { asyncMode: true });
      container.classList.add('container--dark-theme');
      storage.setItem('IconeJzTheme', 'dark');
    };

    const setLightTheme = async () => {
      await themeIcon.changeContentFor('moon--e', { asyncMode: true });
      container.classList.remove('container--dark-theme');
      storage.setItem('IconeJzTheme', 'light');
    };

    if (storage.getItem('IconeJzTheme') === 'dark') {
      setDarkTheme();
    }

    themeIcon.addEventListener('click', async () => {
      (themeIcon.contentName === 'moon--e')
        ? setDarkTheme()
        : setLightTheme();
    });

    preferenceColor.addEventListener('change', (event) => {
      const isDarkTheme = event.matches;

      (isDarkTheme)
        ? setDarkTheme()
        : setLightTheme();
    });
  }
  
  /**
   * Allows you to drag and drop the menu.
   */
  _dragAndDrop () {
    this._isMenuPressed = false;
    const menu = this._root.querySelector('[part="floating-menu"]');
    const iconMenu = this._root.querySelector('[part="floating-menu__toggle"]');

    const menuSize = parseFloat(getComputedStyle(menu).width);
    const iconSize = parseFloat(getComputedStyle(iconMenu).width);
    const spaceBetweenMenuAndIcon = (menuSize - iconSize) / 2;

    const minLimitOfTheCoordX = spaceBetweenMenuAndIcon - (iconSize / 4);
    const maxLimitOfTheCoordX = innerWidth - minLimitOfTheCoordX;
    const minLimitOfTheCoordY = spaceBetweenMenuAndIcon - (iconSize / 4);
    const maxLimitOfTheCoordY = innerHeight - minLimitOfTheCoordY;

    const moveMenu = (clientX, clientY) => {
      if (this._isMenuPressed) {
        const coordX = clientX;
        const coordY = clientY;

        if (
          (coordX >= minLimitOfTheCoordX && coordX <= maxLimitOfTheCoordX)
          && (coordY >= minLimitOfTheCoordY && coordY <= maxLimitOfTheCoordY)
        ) {
          this.style.left = `${(coordX - spaceBetweenMenuAndIcon) - (iconSize / 2)}px`;
          this.style.top = `${(coordY - spaceBetweenMenuAndIcon) - (iconSize / 2)}px`;

          this._isTheMenuRecentlyMoved = true;
        }
      }
    };

    iconMenu.addEventListener('mousedown', () => this._isMenuPressed = true);
    iconMenu.addEventListener('touchstart', () => this._isMenuPressed = true);

    iconMenu.addEventListener('mouseup', () => {
      this._isMenuPressed = false
      setTimeout(() => this._isTheMenuRecentlyMoved = false);
    });
    iconMenu.addEventListener('touchend', () => {
      this._isMenuPressed = false
      setTimeout(() => this._isTheMenuRecentlyMoved = false);
    });

    iconMenu.addEventListener('mousemove', ({ clientX, clientY }) => moveMenu(clientX, clientY));
    iconMenu.addEventListener('touchmove', (event) => {
      const { clientX, clientY } = event.touches[0];

      event.preventDefault();
      moveMenu(clientX, clientY);
    });
  }

  /** 
   * It is executed when connecting the element to the document.
   */
  connectedCallback () {
    this._render();
    this._openAndClose();
    this._changeTheme();
    this._dragAndDrop();
  }
};

customElements.define('floating-menu', FloatingMenu);

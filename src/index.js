import { Menu, BeverageMenu } from './js/menu';
import Card from './js/MenuCard';
import Section from './js/Section';
import './styles/styles.scss';
import tempMenu from './assets/pdfs/Ohana_Specials.pdf';

window.addEventListener('DOMContentLoaded', () => {
// GLOBAL FUNCTIONS ====================

function scrollToPosition(e) {
  e.preventDefault();
  const idTag = e.target.href.split('#')[1];

  const desiredLocation = document.getElementById(
    idTag.replace(/%20/gi, ' ')
  ).offsetTop;
  window.scrollTo(0, desiredLocation - 100);
}


// TEMP MENU METHODS =============================

const navLinks = document.querySelectorAll('.main-nav div ul li a');
navLinks.forEach(link => link.addEventListener('click', scrollToPosition))

// TODO: uncomment this in menu page code after removing from here
const menuDownload = document.getElementById('menu-download');
menuDownload['download'] = 'Ohana_Menu';
menuDownload['href'] = `${tempMenu}`;
const menuBtn = document.getElementById('menu-btn');
console.log(menuBtn)
menuBtn.addEventListener('click', scrollToPosition)

  // =================================
  // ==  MENU START
  // =================================
  if (document.URL.includes('/menu.html')) {
    // Sushi Menu Content ================

    const menuContentDiv = document.getElementById('menu-content');
    const menuHeaders = Object.keys(Menu);
    const sections = [];

    for (let header of menuHeaders) {
      const className = header.toLowerCase().split(' ').join('-');
      const sectionObj = new Section(`${header}`);
      menuContentDiv.appendChild(sectionObj.createSection());
      sections.push({
        wrapper: document.querySelector(`.${className}-section .wrapper`),
        header,
      });
    }

    sections.forEach((section) => {
      Menu[section.header].forEach((item) => {
        if (
          `${section.wrapper.innerHTML}`.includes('Appetizers') ||
          `${section.wrapper.innerHTML}`.includes('Nigiri')
        ) {
          const menuItem = new Card(item);
          const el = menuItem.createLongCard();
          section.wrapper.appendChild(el);
        } else if (`${section.wrapper.innerHTML}`.includes('Course Menu')) {
          const menuItem = new Card(item);
          const el = menuItem.createCourseCard();
          section.wrapper.appendChild(el);
        } else if (`${section.wrapper.innerHTML}`.includes('Desserts')) {
          const menuItem = new Card(item);
          const el = menuItem.createLongCard();
          section.wrapper.appendChild(el);
        } else {
          const menuItem = new Card(item);
          const el = menuItem.createMenuCard();
          section.wrapper.appendChild(el);
        }
      });
    });

    // Beverage Menu Content

    const beverageSectionWrapper = document.querySelector(
      '#beverages .wrapper'
    );
    const beveragesHeaders = Object.keys(BeverageMenu.Beverages);
    const beverageSections = [];

    for (let header of beveragesHeaders) {
      const className = header.toLowerCase().split(' ').join('-');
      const sectionObj = new Section(`${header}`);
      beverageSectionWrapper.appendChild(sectionObj.createSection());
      beverageSections.push({
        wrapper: document.querySelector(`.${className}-section .wrapper`),
        header,
      });
    }

    beverageSections.forEach((section) => {
      section.wrapper.classList.add('beverages-section');
      BeverageMenu.Beverages[section.header].forEach((item) => {
        const menuItem = new Card(item);
        const el = menuItem.createLongCard();
        el.classList.add('drink');
        section.wrapper.appendChild(el);
      });
    });

    // MENU NAV ======================

    const menuNav = document.querySelectorAll('#menu-nav a');

    menuNav.forEach((navLink) => {
      navLink.addEventListener('click', scrollToPosition);
    });

    // TEMP MENU MODAL OPEN ============
    const tempMenuDiv = document.getElementById('modal');
    const modalClose = document.getElementById('modal__close');

    setTimeout(() => {
      openModal();
    }, 3000);

    function openModal() {
      tempMenuDiv.classList.add('modal-open');
      modalClose.addEventListener('click', closeModal);
    }

    function closeModal() {
      tempMenuDiv.classList.remove('modal-open');
    }

    // const menuDownload = document.getElementById('menu-download');
    // menuDownload['download'] = 'Ohana_Menu';
    // menuDownload['href'] = `${tempMenu}`;

    // =================================
    // ==  MENU END
    // =================================
  }
}); // DOMContentLoaded

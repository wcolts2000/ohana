import { Menu, BeverageMenu } from './js/menu';
import Card from './js/MenuCard';
import Section from './js/Section';
import './styles/styles.scss';

window.addEventListener('DOMContentLoaded', () => {
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
  }

  // Beverage Menu Content

  const beverageSectionWrapper = document.querySelector('#beverages .wrapper');
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

  function scrollToPosition(e) {
    e.preventDefault();
    const idTag = e.target.href.split('#')[1];
    const desiredLocation = document.getElementById(idTag.replace(/%20/gi, ' '))
      .offsetTop;
    console.dir(desiredLocation);
    window.scrollTo(0, desiredLocation - 150);
  }
  // =================================
  // ==  MENU END
  // =================================
}); // DOMContentLoaded

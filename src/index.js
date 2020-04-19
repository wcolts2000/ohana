import { Menu, BeverageMenu } from './js/menu';
import Card from './js/MenuCard';
import Section from './js/Section';
import './styles/styles.scss';

window.addEventListener('DOMContentLoaded', () => {  
  // =================================
  // ==  MENU START
  // =================================
  if (document.URL.includes('/menu.html')) {
  
    // MENU NAV ======================
  
    const hamburgerBackplate = document.getElementById('hamburger-backplate');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.querySelector('.menu-nav-mobile');
    const mobileMenuItems = document.querySelectorAll('.menu-nav-mobile ul li');
    const closeIcon = document.getElementById('close-menu');
    
    hamburgerBackplate.addEventListener('click', openMenu);
    closeIcon.addEventListener('click', closeMenu);
    function openMenu() {
      hamburgerBackplate.classList.add('open');
      hamburger.classList.add('open');
      mobileMenu.classList.add('open');
    }
    
    function closeMenu() {
      hamburgerBackplate.classList.remove('open');
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
    
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    })
  
    // Sushi Menu Content ================
  
    const menuContentDiv = document.getElementById('menu-content');
    const menuHeaders = Object.keys(Menu);
    const sections = [];
  
    for (let header of menuHeaders) {
      const className = header.toLowerCase().split(" ").join("-");
      const sectionObj = new Section(`${header}`);
      menuContentDiv.appendChild(sectionObj.createSection());
      sections.push({
        wrapper: document.querySelector(`.${className}-section .wrapper`),
        header
      });
    }
  
    sections.forEach(section => {
      Menu[section.header].forEach(item => {

        if (`${section.wrapper.innerHTML}`.includes('Appetizers') || `${section.wrapper.innerHTML}`.includes('Nigiri')) 
        {
          const menuItem = new Card(item);
          const el = menuItem.createLongCard();
          section.wrapper.appendChild(el);
        } 
         else if(`${section.wrapper.innerHTML}`.includes('Course Menu')) {
          const menuItem = new Card(item);
          const el = menuItem.createCourseCard();
          section.wrapper.appendChild(el);
        }

        else if(`${section.wrapper.innerHTML}`.includes('Desserts')) {
          const menuItem = new Card(item);
          const el = menuItem.createLongCard();
          section.wrapper.appendChild(el);
        }
        else 
        {
          const menuItem = new Card(item);
          const el = menuItem.createMenuCard();
          section.wrapper.appendChild(el); 

        }
      })

    }) 
  }

  // Beverage Menu Content

  const beverageSectionWrapper = document.querySelector('#beverages .wrapper');
  
  const beveragesHeaders = Object.keys(BeverageMenu.Beverages);
  const beverageSections = [];

  console.log(beveragesHeaders)
  
    for (let header of beveragesHeaders) {
      const className = header.toLowerCase().split(" ").join("-");
      const sectionObj = new Section(`${header}`);
      beverageSectionWrapper.appendChild(sectionObj.createSection());
      beverageSections.push({
        wrapper: document.querySelector(`.${className}-section .wrapper`),
        header
      });
    }
    
    beverageSections.forEach(section => {
      section.wrapper.classList.add('beverages-section')
      BeverageMenu.Beverages[section.header].forEach(item => {
        
          const menuItem = new Card(item);
          const el = menuItem.createLongCard();
          el.classList.add('drink')
          section.wrapper.appendChild(el); 
      })

    })
  // =================================
  // ==  MENU END
  // =================================
  
}) // DOMContentLoaded

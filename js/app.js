// ====================================
// =========== MENU START =============
// ====================================

class Card {

  constructor(obj) {
    this.title = obj.title;
    this.price = obj.price;
    this.long = obj.long;
    this.hand = obj.hand;
    this.inside = obj.inside;
    this.top = obj.top
    this.spicy = obj.spicy;
  }

  createElement(el, className) {
    const container = document.createElement(`${el}`);
    container.classList.add(className);
    return container;
  };

  addText(el, text) {
    el.innerText = text;
    return el;
  }

  addHtml(el, html) {
    el.innerHTML = html
  }

  createLongCard() {
    // const wrapper = this.createElement("div", "long-card__wrapper");
    const card = this.createElement("div", "long-card");
    this.addHtml(card, `<p>${this.title}</p><span></span><p>${this.price}</p>`);
    // card.appendChild(wrapper);
    return card;
  }

  createMenuCard() {
    const card = this.createElement("div", "menu-card");
    if (this.spicy) {
      const span = this.createElement("span", "spicy");
      this.addText(span, "*")
      card.appendChild(span);
    }
    const title = this.createElement("p", "menu-card__title");
    const long = this.createElement("p", "menu-card__long");
    const hand = this.createElement("p", "menu-card__hand");
    const inside = this.createElement("p", "menu-card__inside");
    this.addText(title, this.title);
    this.addText(long, `${this.long} Hand Roll`);
    this.addText(hand, `${this.hand} Long Roll`);
    this.addText(inside, `Inside: ${this.inside}`);
    card.appendChild(title);
    card.appendChild(long);
    card.appendChild(hand);
    card.appendChild(inside);
    if (this.top) {
      const top = this.createElement("p", "menu-card__title");
      this.addText(top, `Top: ${this.top}`);
      card.appendChild(top);
    } 
    return card;
  }      
}

const menu = {
  appetizers: [
    {
      title: "Mussels (2pc)",
      price: "$3.50",
    },
    {
      title: "Pot Stickers",
      price: "$3.00",
    },
    {
      title: "Spicy Chicken (Skewers 2pc)",
      price: "$3.50",
    },
    {
      title: "Calamari Rings",
      price: "$3.00",
    },
    {
      title: "Edamame",
      price: "$3.50",
    },
    {
      title: "Miso Soup",
      price: "$3.00",
    },
    {
      title: "Seaweed Soup",
      price: "$3.50",
    },
    {
      title: "Yakiton",
      price: "$3.00",
    },
  ],
  nigiri: [
    {
      title: "Maguro (tuna)",
      price: "$3.50",
    },
    {
      title: "Tadaki (seared tuna)",
      price: "$3.75",
    },
    {
      title: "Albacore (white tuna)",
      price: "$3.75",
    },
    {
      title: "Hamachi (yellowtail)",
      price: "$3.75",
    },
    {
      title: "Ika (squid)",
      price: "$3.75",
    },
    {
      title: "Ikura (salmon roe)",
      price: "$4.00",
    },
    {
      title: "Tako (octopus)",
      price: "$4.00",
    },
    {
      title: "Hotate Gai (scallop)",
      price: "$4.00",
    },
    {
      title: "Hokki Gai (surf clam)",
      price: "$3.75",
    },
    {
      title: "Ebi (shrimp)",
      price: "$3.50",
    },
    {
      title: "Saki (salmon)",
      price: "$3.75",
    },
    {
      title: "Cajun Salmon",
      price: "$4.00",
    },
    {
      title: "Tai (red snapper)",
      price: "$3.75",
    },
  ],
  raw: [
    {
      spicy: true,
      title: "Teka Maki",
      long: "$5.95",
      hand: "$4.95",
      inside: "tuna",
      top: "",
    },
    {
      spicy: false,
      title: "Teka Maki",
      long: "$5.95",
      hand: "$4.95",
      inside: "tuna",
      top: "",
    },
    {
      spicy: false,
      title: "Spicy Tuna",
      long: "5.95",
      hand: "4.95",
      inside: "spicy tuna",
      top: "green onions and hot sauce",
    },
    {
      spicy: true,
      title: "Spicy Tuna",
      long: "5.95",
      hand: "4.95",
      inside: "spicy tuna",
      top: "green onions",
    },
  ]
}

if(document.URL.includes("/menu.html")){

  
  // SECTIONS
  const appetizerSection = document.querySelector('.appetizer-nigiri-section .left');
  const nigiriSection = document.querySelector('.appetizer-nigiri-section .right');
  const rawSushiSection = document.querySelector('.raw-cooked-sushi-section .wrapper');
  
  for (let item of menu.appetizers) {
    const menuItem = new Card(item);
    const el = menuItem.createLongCard();
    appetizerSection.appendChild(el);
  }
  
  for (let item of menu.nigiri) {
    const menuItem = new Card(item);
    const el = menuItem.createLongCard();
    nigiriSection.appendChild(el);
  }
  
  for (let item of menu.raw) {
    const menuItem = new Card(item);
    const el = menuItem.createMenuCard();
    rawSushiSection.appendChild(el);
  }
}
  
// ====================================
// =========== MENU END ===============
// ====================================

  
// ====================================
// =========== NAV START ==============
// ====================================

const hamburgerBackplate = document.getElementById("hamburger-backplate");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".menu-nav-mobile");
const closeIcon = document.getElementById("close-menu");

hamburgerBackplate.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu)

function openMenu() {
  hamburgerBackplate.classList.add("open");
  hamburger.classList.add("open");
  mobileMenu.classList.add("open");
}

function closeMenu() {
  hamburgerBackplate.classList.remove("open");
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
}
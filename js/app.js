// document.onload(
  
//   (function() {
    
    // MENU LONG-CARD GENERATOR
    class Card {

      constructor(obj) {
        this.title = obj.title;
        this.price = obj.price;
        this.extra = obj.extra;
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

      createLongCard() {
        const title = this.createElement("p", "long-card__title");
        this.addText(title, this.title);
        const price = this.createElement("p", "long-card__price");
        this.addText(price, this.price);
        const wrapper = this.createElement("div", "long-card__wrapper");
        wrapper.appendChild(title);
        wrapper.appendChild(price);
        if (this.extra) {
          const extra = this.createElement("span", "long-card__extra");
          this.addText(extra, this.extra);
          wrapper.appendChild(extra);
        }
        const card = this.createElement("div", "long-card");
        card.appendChild(wrapper);
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
        this.addText(inside, this.inside);
        card.appendChild(title);
        card.appendChild(long);
        card.appendChild(hand);
        card.appendChild(inside);
        if (this.top) {
          const top = this.createElement("p", "menu-card__title");
          this.addText(top, this.top);
          card.appendChild(top);
        } 
        return card;
      }      
    }

    const menu = {
      appetizers: [
        {
          title: "Mussels",
          price: "$3.50",
          extra: "(2pc)"
        },
        {
          title: "Pot Stickers",
          price: "$3.00",
        },
        {
          title: "Spicy Chicken",
          price: "$3.50",
          extra: "(Skewers 2pc)"
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

     // SECTIONS
    const appetizerSection = document.querySelector('.appetizer-nigiri-section .left');
    const nigiriSection = document.querySelector('.appetizer-nigiri-section .right');
    const rawSushiSection = document.querySelector('.raw-cooked-sushi-section .wrapper');

    // console.group("appetizer")
    console.dir(appetizerSection)
    // console.groupEnd()
    // console.group("nigiri")
    console.dir(nigiriSection)
    // console.groupEnd()
    // console.group("rawSushi")
    console.dir(rawSushiSection)
    // console.groupEnd()
    for (let item of menu.appetizers) {
      const menuItem = new Card(item);
      const el = menuItem.createLongCard();
      appetizerSection.appendChild(el);
    }
    // console.log(menu.appetizers[0])
    // const mussels = new Card(menu.appetizers[0]);
    // console.log(mussels)

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

//   })()
  
// )
export default class Card {
  constructor(obj) {
    this.title = obj.title;
    this.price = obj.price;
    this.long = obj.long;
    this.hand = obj.hand;
    this.inside = obj.inside;
    this.top = obj.top;
    this.raw = obj.raw;
    this.sauce = obj.sauce;
    this.content = obj.content
    this.kids = obj.kids;
  }
  
  createElement(el, className) {
    const container = document.createElement(`${el}`);
    container.classList.add(className);
    return container;
  }
  
  addText(el, text) {
    el.innerText = text;
    return el;
  }
  
  addHtml(el, html) {
    el.innerHTML = html;
  }
  
  createLongCard() {
    const card = this.createElement('div', 'long-card');
    this.addHtml(card, `<p>${this.title}</p><span></span><p>${this.price}</p>`);
    return card;
  }
  
  createMenuCard() {
    const card = this.createElement('div', 'menu-card');
    const header = this.createElement('div', 'menu-card__header');
    const spacer = this.createElement('span', '&nbsp;');
    const title = this.createElement('p', 'menu-card__title');
    const ingredients = this.createElement('div', 'menu-card__ingredients');
    const inside = this.createElement('p', 'menu-card__inside');
    let template = '';
    if (this.raw) {
      template = `<span>*</span>${this.title}`
    } else {
      template = `${this.title}`
    }
    this.addHtml(title, template);
    this.addText(inside, `Inside: ${this.inside}`);
    header.appendChild(title);
    header.appendChild(spacer);
    if(this.long) {
      const long = this.createElement('p', 'menu-card__long');
      this.addText(long, `${this.long} Long Roll`);
      header.appendChild(long);
    }
    if(this.hand) {
      const hand = this.createElement('p', 'menu-card__hand');
      this.addText(hand, `${this.hand} Hand Roll`);
      header.appendChild(hand);
    }

    card.appendChild(header);
    ingredients.appendChild(inside);
    if (this.top) {
      const top = this.createElement('p', 'menu-card__title');
      this.addText(top, `Top: ${this.top}`);
      ingredients.appendChild(top);
    }
    if (this.sauce) {
      const sauce = this.createElement('p', 'menu-card__sauce');
      this.addText(sauce, `Sauce: ${this.sauce}`);
      ingredients.appendChild(sauce);
    }
    card.appendChild(ingredients)
    return card;
  }

  createCourseCard() {
    const card = this.createElement('div', 'menu-card');
    const header = this.createElement('div', 'menu-card__header');
    const title = this.createElement('p', 'menu-card__title');
    const spacer = this.createElement('span', '&nbsp;');
    const price = this.createElement('p', 'menu-card__price');
    const ingredients = this.createElement('div', 'menu-card__ingredients');
    const inside = this.createElement('p', 'menu-card__inside');
    let template = '';
    if (this.raw) {
      template = `<span>*</span>${this.title}`
    } else {
      template = `${this.title}`
    }
    this.addHtml(title, template);
    this.addText(inside, this.content);
    header.appendChild(title);
    header.appendChild(spacer);
    this.addText(price, this.price);
    header.appendChild(price);
    card.appendChild(header);
    ingredients.appendChild(inside);
    if (this.kids) {
      const kids = this.createElement('p', 'menu-card__kids');
      this.addText(kids, this.kids);
      ingredients.appendChild(kids);
    }
    card.appendChild(ingredients)
    return card;
  }
}
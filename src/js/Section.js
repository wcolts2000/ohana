export default class Section {
  constructor(headerTitle) {
    this.headerTitle = headerTitle;
    this.className = headerTitle.toLowerCase().split(" ").join("-");
  }

  createSection() {
    const sectionEl = document.createElement('section');
    const classList = [`${this.className}-section`, 'menu-section']
    sectionEl.classList.add(...classList);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const heading = document.createElement('h3');
    heading.innerText = this.headerTitle;
    wrapper.appendChild(heading);
    sectionEl.appendChild(wrapper);
    sectionEl.id = this.headerTitle;
    return sectionEl;
  }
}
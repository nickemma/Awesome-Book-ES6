export default class Navigation {
  constructor() {
    this.year = document.querySelector('.year');
    this.container = document.querySelector('.container');
    this.bookList = document.querySelector('.bokk');
    this.contact = document.querySelector('.contact');
    this.first = document.querySelector('.list');
    this.second = document.querySelector('.add');
    this.third = document.querySelector('.contact-me');
  }

  view() {
    this.first.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.style.display = 'block';
      this.bookList.style.display = 'none';
      this.contact.style.display = 'none';
    });

    this.second.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.style.display = 'none';
      this.bookList.style.display = 'flex';
      this.contact.style.display = 'none';
    });

    this.third.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.style.display = 'none';
      this.bookList.style.display = 'none';
      this.contact.style.display = 'block';
    });
  }
}

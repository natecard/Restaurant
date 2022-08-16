import loadHome from './content.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav')

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active')
};

function createHeader () {
  const header = document.createElement('header');
  header.classList.add = ('header')
  const restoName = document.createElement('h1')
  restoName.textContent = 'THE LUCKY PEACH'

  header.appendChild(restoName);
  header.appendChild(createNav());

  return header
};

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav')
  document.body.appendChild(nav);

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home'
    homeBtn.classList.add('button-nav')
    homeBtn.classList.add('button')
    homeBtn.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) return;
      setActiveButton(homeBtn);
      loadHome()
    });

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu'
    menuBtn.classList.add('button-nav')
    menuBtn.classList.add('button')
    menuBtn.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) return;
      setActiveButton(menuBtn);
      loadMenu()
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact'
    contactBtn.classList.add('button-nav')
    contactBtn.classList.add('button')
    contactBtn.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) return;
      setActiveButton(contactBtn);
      loadContact()
    });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav
};

function createBody() {
  const main = document.createElement('main')
  main.classList.add('main');
  main.setAttribute('id','main');
  return main
};

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = (`website built by natecard`);

  const githubLink = document.createElement('a');
  githubLink.href = "https://github.com/natecard"


  const githubIcon = document.createElement('i')
  githubIcon.classList.add('fa-brands');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon)
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer
}

function intializeSite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createBody());
  content.appendChild(createFooter());
  setActiveButton(document.querySelector('.button-nav'));
  loadHome();
};

export default intializeSite;
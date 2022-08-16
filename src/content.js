function pageContent() {
  const content = document.createElement('div');
  content.appendChild(createPara('Thank you for choosing to join us at the Lucky Peach.'));
  content.appendChild(createPara('We welcome you and your guests for a very wonderful evening.'));
  content.appendChild(createPara('We specialize in local ingredients sourced, ramen dishes with our pork shoulder, we passionately make all broths fresh each day.'));
  content.appendChild(createPara('Enjoy our ever rotating selection of craft beer, some Japanese beers, and local favourites.'));
  return content
};

function createPara (text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  paragraph.classList.add('home-para')
  return paragraph;
};

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = ('')
  main.appendChild(pageContent());
};

export default loadHome;
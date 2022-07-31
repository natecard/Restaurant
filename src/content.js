function pageContent() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const bodyText = document.createElement('p');
  //const credit = document.createElement('p')


  title.textContent = ('Welcome to the Lucky Peach')
  bodyText.innerText = ('Thank you for choosing to join the Lucky Peach, \ we welcome you and your guests for a very wonderful evening.');
  //credit.textContent = ('Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>')

  title.style.color = 'white'
  bodyText.style.color = 'white'


  content.appendChild(title)
  content.appendChild(bodyText)
  //content.appendChild(credit)
  document.body.style.backgroundImage = "url('../src/resto.jpg')"

  return content
};
document.body.appendChild(pageContent());
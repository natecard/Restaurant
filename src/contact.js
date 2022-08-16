function contact() {
  const contact = document.createElement('div');
  contact.classList.add('contact-body');
  contact.appendChild(createPara('Thank you for choosing the Lucky Peach, we appreciate feedback on your experience at our restaurant. If you have any feedback to give or questions about the menu please reach out here:'))
  contact.appendChild(createPara('RESERVATIONS:')).classList.add('caps');
  contact.appendChild(createPara('# 555-555-1234 Email: reservations@luckypeachresto.com'));
  contact.appendChild(createPara('MANAGER:')).classList.add('caps');
  contact.appendChild(createPara('#: 555-555-5555 Email: manager@luckypeachresto.com'));
  contact.appendChild(createPara('ADDRESS:')).classList.add('caps');
  contact.appendChild(createPara('123 Fake St, Real Town, Real State, Real Real'));
  return contact
}

function createPara (text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
};
function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(contact());
  }
export default loadContact;
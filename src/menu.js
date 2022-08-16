function menu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createMenuItem(
    "SHIO",
    "Refreshing salt based shio broth with slow roasted pork shoulder, menma, scallions, nori, bonita."
  ))
  menu.appendChild(createMenuItem(
    "SPICY SHIO",
    "Spicy shio broth with a choice of slow roasted pork shoulder or braised chicken thighs."
  ))
  menu.appendChild(createMenuItem(
    "MISO",
    "Special miso tare broth with slow roasted pork shoulder, beansprouts, scallions, sesame seeds."
    ))
  menu.appendChild(createMenuItem(
    "SPICY MISO",
    "Spicy miso broth with slow roasted pork shoulder, spicy bean paste, , scallions, chili flakes, bok choy."
    ))
  menu.appendChild(createMenuItem(
    "SHOYU",
    "Savoury soy based shoyu broth with pork shoulder, soy sauce, soft boiled egg, scallions, nori."
  ))
  menu.appendChild(createMenuItem(
  "BLACK TONKOTSU",
  "Hakata style pork bone broth with blackened garlic oil and tonkotsu toppings."
  ))
  return menu
}

function createMenuItem(title, description) {
  const menuItem = document.createElement('div')
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2')
  foodName.textContent = title;
  foodName.classList.add('item')

  const foodDescription = document.createElement('p')
  foodDescription.textContent = description;
  foodDescription.classList.add('description')

  menuItem.appendChild(foodName)
  menuItem.appendChild(foodDescription)
  return menuItem
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(menu());
}
export default loadMenu;
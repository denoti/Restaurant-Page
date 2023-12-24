import '../index.css';

const arr = [{ pork: 'images/pork.jpg' }, { chicken: 'images/chicken.jpg' }];

const menu = document.createElement('section');

// Create a heading for the page
const heading = document.createElement('h1');
heading.textContent = 'MENU';

// Create a title for the page
const title = document.createElement('h2');
title.textContent = 'Food';

// Function to create food Descriptions
function createMenuItem(args) {
  args.forEach((arg, index) => {
    let key = Object.keys(arg);
    let imageUrl = arg[key];
    console.log(imageUrl);
    console.log(key[0]);

    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const image = document.createElement('img');

    h3.textContent = key[0];
    p.textContent = '';
    image.src = `${imageUrl}`;
    image.alt = `${key[0]}`;

    div.append(h3, p, image);
    menu.append(div);
  });
}
menu.append(heading, title);

createMenuItem(arr);

menu.classList.add('hidden');
export default menu;

import '../index.css';

const contact = document.createElement('section');

const h1 = document.createElement('h1');
h1.textContent = 'Contact Us';

const contactInfor = document.createElement('div');
const nameTitle = document.createElement('h2');
const infor = document.createElement('p');

nameTitle.textContent = 'Dennis Otieno';
infor.textContent = 'email: otidennis98@gmail.com';
contactInfor.append(nameTitle, infor);
contact.append(h1, contactInfor);

contact.classList.add('hidden');
export default contact;

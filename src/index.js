import home from './home/home';
import contact from './Contact/contacts';
import menu from './Menu/menu';

const tabs = document.createElement( 'nav' );
function createTabs ( [...args] ) {
    args.forEach( ( arg, index ) => {
        const button = document.createElement( 'button' )
        button.textContent = arg
        button.addEventListener( 'click', () => {
            if ( index === 0 ) {
                home.classList.remove( 'hidden' );
                contact.classList.add( 'hidden' );
                menu.classList.add('hidden');
            } else if ( index === 1 ) {
                home.classList.add('hidden');
                contact.classList.add('hidden');
                menu.classList.remove('hidden');
            } else {
                home.classList.add('hidden');
                contact.classList.remove('hidden');
                menu.classList.add('hidden');
            }
            
            
        })
        tabs.append(button)
    })
}

createTabs(['Home', 'Menu', 'Contact'])

const mainBody = document.querySelector('#content');

mainBody.append(tabs,home, menu, contact);



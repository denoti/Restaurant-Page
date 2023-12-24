import '../index.css'

const home = document.createElement( 'main' );

// RESTAURANT HEADER
const heading = document.createElement('h1');
heading.textContent = `Denoti's Kitchen`;

// Information about the Restaurant
const restInfo = document.createElement('div');
const restPara = document.createElement('p');
restPara.textContent = `
    Nestled in the heart of a bustling city, "Denoti's Kitchen" is a culinary gem that beckons food enthusiasts with its innovative and diverse menu. The restaurant's ambiance is a harmonious blend of modern sophistication and cozy charm, creating an inviting atmosphere for guests to indulge in a memorable dining experience. Renowned for its commitment to using locally-sourced, fresh ingredients, the menu at Denoti's Kitchen boasts a range of delectable dishes that showcase the culinary prowess of the talented chefs. From exquisitely crafted appetizers to mouth-watering main courses, each dish is a work of art that tantalizes the taste buds. The attentive and friendly staff ensures that guests feel welcomed and cared for, adding a personal touch to the dining affair. Whether for a romantic evening, a celebratory gathering, or a casual meal with friends, Denoti's Kitchen offers a gastronomic journey that transcends the ordinary, making it a beloved destination for those seeking a remarkable culinary adventure.
`;
restInfo.append(restPara);

// WORKING SCHEDULE OF THE RESTAURANT
const restHours = document.createElement('div');
const restHrTxt = document.createElement('h2');
const restDays = document.createElement('ul');

restHrTxt.textContent = 'Hours';
function makeListItems([...args]) {
  args.forEach((arg) => {
    const li = document.createElement('li');
    li.textContent = arg;
    restDays.append(li);
  });
}

makeListItems([
  'Sunday: 8am - 8pm',
  'Monday: 6am - 6pm',
  'Tuesday: 6am - 6pm',
  'Wednesday: 6am - 6pm',
  'Thursday: 6am - 10pm',
  'Friday: 6am - 10pm',
  'Saturday: 8am - 10pm',
]);

restHours.append(restHrTxt, restDays);

// RESTAURANT LOCATION
const restLoc = document.createElement('div');
const restHead = document.createElement('h2');
const restLocation = document.createElement('p');

restHead.textContent = 'Location';
restLocation.textContent = 'Babadogo Lane, Ruaraka. Nairobi.';
restLoc.append(restHead, restLocation);

home.append( heading, restInfo, restHours, restLoc );
home.classList.remove('hidden');
export default home;

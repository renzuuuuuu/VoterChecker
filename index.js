

function ageChecker() {

var yourName = document.querySelector('#name').value;
var yourAge = parseInt(document.querySelector('#age').value);
let minAge = 18;
var hiValue = "Hi ";

if(yourAge >= minAge) {
    alert (hiValue + yourName + 'You are eligible to vote');
    
   } else {
    alert (hiValue + yourName +'You are too young to vote');
   }

   
}
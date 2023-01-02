let homeNumber = document.getElementById('homeNumber');
let homePlusOne = document.getElementById('homePlusOne');
let homePlusTwo = document.getElementById('homePlusTwo');
let homePlusThree = document.getElementById('homePlusThree');
// console.log(homePlusOne)
let guestNumber = document.getElementById('guestNumber');
let guestPlusOne = document.getElementById('guestPlusOne');
let guestPlusTwo = document.getElementById('guestPlusTwo');
let guestPlusThree = document.getElementById('guestPlusThree');
// console.log(guestPlusThree)
// Home
let numHome = +homeNumber.textContent;
// console.log(numHome)
function goalOneHome() {
  numHome += 1;
  homeNumber.textContent = numHome;
}
function goalTwoHome() {
  numHome += 2;
  homeNumber.textContent = numHome;
}
function goalThreeHome() {
  numHome += 3;
  homeNumber.textContent = numHome;
}
// Guest
let numGuest = +guestNumber.textContent;
// console.log(numHome)
function goalOneGuest() {
  numGuest += 1;
  guestNumber.textContent = numGuest;
}
function goalTwoGuest() {
  numGuest += 2;
  guestNumber.textContent = numGuest;
}
function goalTwoGuest() {
  numGuest += 3;
  guestNumber.textContent = numGuest;
}

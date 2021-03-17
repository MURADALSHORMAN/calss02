'use strict';


let score = 0;



alert('we will play the giessing game');


let myName = prompt('what is my name ?').toUpperCase();
// function 1
function userName (){
if (myName === 'MURAD') {
  alert('your answer is correct');
  score++;
}
else { alert('your answer is wrong'); }
// end function 1
}

//function 2
function userAge(){
let myAge = prompt('what is my age ?');

// eslint-disable-next-line eqeqeq

if (myAge === 32) {
  alert('your answer is correct');
  score++;
}
else { alert('your answer is wrong'); }
//end function 2
}


// function 3
function userJob(){
let myJob = prompt('what is my job ?').toLowerCase();
if (myJob === 'web devloper') {
  alert('your answer is correct');
  score++;
}
else { alert('your answer is wrong'); }
//end function 3
}

//function 4
function userEducation(){
let myEdu = prompt('what is my education ?').toLowerCase();

if (myEdu === 'engineer') {
  alert('your answer is correct');
  score++;
}
else {
  alert('your answer is wrong');
}

 //end function 4
}

 //function 5
 function userTall (){
let myTall = prompt('what is my tall ?');

if (myTall === 165) {
  alert('your answer is correct');
  score++;
}
else {
  alert('your answer is wrong');
}
// end function 5
 }
let usernumber;

////function 6
function guess (){
for (let j = 6; j > 0; j--) {
  let i = j;
  usernumber = prompt('please guess the number between 0 to 100');
  if (usernumber > 22) {
    alert('that is too high you have' + --i + 'attempts');
  }

  if (usernumber < 22) {
    alert('that is too low you have ' + --i + 'attempts');
  }
  if (usernumber === 22) {
    alert('this is a correct answer');
    j = 0;
    score++;
  }
}
//end function 6
}

//function 7
function myPlaces (){
if (usernumber !== 22) {
  alert('the correct answer is 22');
}

let places = ['irbid', 'aqba', 'petra', 'jarsh', 'deadsea', 'azrq', 'almazar'];

for (let x = 6; x > 0; x--) {

  let userplace = prompt('please guess the place you have' + x + 'attempts ').toLowerCase();

  for (let a = 0; a < 7; a++) {
    console.log(userplace);
    if (userplace.toString() === places[a]) {
      alert('your answer is correct');
      score++;
      a = 7;
      x = 0;
    }
    else {
      alert('your answer is wrong');
      a = 7;
    }

  }

}
// end function 7
}

userName ();
userAge ();
userEducation ();
userJob ();
userTall ();
guess ();
myPlaces ();

// eslint-disable-next-line no-unused-vars
let r =places.toString;

alert('your score is' + score);








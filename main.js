'use strict';

var names = prompt('Who is taking my quiz?');
alert('Alright ' + names + ' lets do this!');
//console.log(names + 'is taking my quiz.');


var q1 = prompt('Is my name Brandon?');
q1 = q1.toLowerCase();

if(q1 === 'yes' || q1 === 'y') {
  alert('Wow you got it right?');
  //console.log('My name is brandon');

} else {alert('Do you even know my name??');
}


var q2 = prompt('Am I from Seattle?');
q2 = q2.toLowerCase();

if(q2 === 'no' || q2 === 'n') {
  alert('Look at you go another right answer!');
  //console.log('No Im from Florida.');

} else {alert('Again can you read?');
}


var q3 = prompt('Is Fallout my favorite game series?');
q3 = q3.toLowerCase();

if(q3 === 'yes' || q3 === 'y') {
  alert('Your on a roll with this.');
  //console.log('Yes my favorite game series is Fallout.');

} else {alert('You should probably stop here.');
}


var q4 = prompt('Did I have a mentor?');
q4 = q4.toLowerCase();

if(q4 === 'yes' || q4 === 'y') {
  alert('You really are paying attention good job!');
  //console.log('My Mentors name is Stewart.');

} else {alert('You arent reading are you?');
}


var q5 = prompt('Do I attend CodeFellows?');
q5 = q5.toLowerCase();

if(q5 === 'yes' || q5 === 'y') {
  alert('That one was easy!');
  //console.log('Well yes I attend CodeFellows we are in class right now.');

} else {alert('Wow you got that wrong?');
}
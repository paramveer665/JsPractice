'use strict';
const btnOpen = document.querySelectorAll('.show-modal');
const btClose = document.querySelector('.close-modal');
const overylay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

console.log(btnOpen);

for (let i = 0; i < btnOpen.length; i++) console.log(btnOpen[i].textContent);

'use strict';

const bag = new Pic ('bag', 'imgs/bag.jpg');
const banana = new Pic ('banana', 'imgs/banana.jpg');
const bathroom = new Pic ('bathroom', 'imgs/bathroom.jpg');
const boots = new Pic ('boots', 'imgs/boots.jpg');
const breakfast = new Pic ('breakfast', 'imgs/breakfast.jpg');
const bubblegum = new Pic ('bubblegum', 'imgs/bubblegum.jpg');
const chair = new Pic ('chair', 'imgs/chair.jpg');
const cthulhu = new Pic ('cthulhu', 'imgs/cthulhu.jpg');
const dogDuck = new Pic ('dogDuck', 'imgs/dogDuck.jpg');
const dragon = new Pic ('dragon', 'imgs/dragon.jpg');
const pen = new Pic ('pen', 'imgs/pen.jpg');
const pet = new Pic ('pet', 'imgs/pet-sweep.jpg');
const scissors = new Pic ('scissors', 'imgs/scissors.jpg');
const shark = new Pic ('shark', 'imgs/shark.jpg');
const sweep = new Pic ('sweep', 'imgs/sweep.png');
const tauntaun = new Pic ('tauntaun', 'imgs/tauntaun.jpg');
const unicorn = new Pic ('unicorn', 'imgs/unicorn.jpg');
const usb = new Pic ('usb', 'imgs/usb.gif');
const water = new Pic ('water', 'imgs/water-can.jpg');
const wine = new Pic ('wine', 'imgs/wine-glass.jpg');

const picArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, pet, scissors, shark, sweep, tauntaun, unicorn, usb, water, wine];

//function declaration declaring properties and values
function Pic (type, src) {
    this.type = type;
    this.src = src;
    this.picked = 0;
}
//function expression expressing that it will render a prototype of a Pic.
//create image element
//give the element some stuff including src
//return element
Pic.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src = this.src;
    return ele;
};


for (let i = 0; i < 3; i++){
    appendRandomPic();
}

const survey = document.getElementById('survey');

function clickHandler (e){
    const clickedPic = e.target;
    if (clickedPic.id === 'survey'){
        return;
    }

    for (let i = 0; i < picArray.length; i++){
        const PicClass = clickedPic.classList.value;
        if (picArray[i].type === PicClass) {
            picArray[i].wasClicked();
            console.log('Number of clicks', picArray[i].clicked);
        }
        //to remove three pictures on each click  get an array of all html elements loop through three items in a pic array remove each element in that array.
        const survey = document.getElementById('survey');

        while(survey.firstChild){
            survey.removeChild(survey.firstChild);
        }
    }
    document.querySelectorAll('img');
    const images = document.querySelectorAll('img');
    console.log (images);


    for (let i = 0; i < 3; i++){
        appendRandomPic();
    }
};

survey.addEventListener('click', clickHandler);

function appendRandomPic (){
    const survey = document.getElementById('survey');
    const randomPic = picArray[ Math.floor(Math.random() * picArray.length)];
    const randomPicEle = randomPic.render();

    survey.appendChild(randomPicEle);
}

// function shuffleArray(picArray) {
//     let i = picArray.length - 1;
//     for (; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = picArray[i];
//       picArray[i] = picArray[j];
//       picArray[j] = temp;
//     }
//     return picArray;
// }
// console.log (picArray);

// function shuffleArray()




// function appendRandomPic () {
//     const tempArray = [];
//     const select = document.getElementById('select');
//     for (let i = 0; i < 3; i++){
//         const randomPic = pics[Math.floor(Math.random())];localStorage;
//
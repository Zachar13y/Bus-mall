
// const imageArray = ['imgs/bathroom.jpg', 'imgs/boots.jpg', 'imgs/breakfast.jpg', 'imgs/bubblegum.jpg', 'imgs/chair.jpg', 'imgs/cthulhu.jpg', 'imgs/dog-duck.jpg', 'imgs/dragon.jpg', 'imgs/pen.jpg', 'imgs/pet-sweep.jpg', 'imgs/scissors.jpg', 'imgs/shark.jpg', 'imgs/sweep.jpg', 'imgs/tauntaun.jpg', 'imgs/unicorn.jpg', 'imgs/usb.gif', 'imgs/water-can.jpg', 'imgs/wine-glass.jpg'];
// let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
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

function Pic (type, src) {
    this.type = type;
    this.src = src;
    this.picked = 0;
};
Pic.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src = this.src;
    return ele;
};
//create image element
//give the element some stuff including src
//return element

// const ele = document.createElement('Pic'['type', 'src']);
for (let i = 0; i < 3; i++){
    appendRandomPic();
}

const show = document.getElementById('show');

function clickHandler (e) {
    const clickedPic = e.target;

    if (clickedPic.id === 'show') return;


    for (let i = 0; i < picArray.length; i++){
        const PicClass = clickedPic.classList.value;
        if (picArray[i].type === PicClass) {
            picArray[i].wasClicked();
            console.log('Number of clicks', picArray[i].clicked);
        }
    }
    clickedPic.remove();
};

show.addEventListener('click', clickHandler);

function appendRandomPic (){
    const show = document.getElementById('show');
    const randomPic = picArray[ Math.floor(Math.random() * picArray.length)];
    const randomPicEle = randomPic.render();

    show.appendChild(randomPicEle);
}

clickHandler();
// appendRandomPic();
console.log (picArray);

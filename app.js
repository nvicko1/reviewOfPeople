'use strict';

const image = document.querySelector('.img-container');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const btns = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

const btnsLeft = btns.childNodes[1];
const btnsRight = btns.childNodes[3];

let startNumber = 0;

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const getRandomInt = function () {
  return Math.floor(Math.random() * 4);
};

const startPage = function (number) {
  image.innerHTML = `<img src="${reviews[number].img}" id="person-img" alt="" />`;
  author.innerHTML = `${reviews[number].name}`;
  job.innerHTML = `${reviews[number].job}`;
  info.innerHTML = `${reviews[number].text}`;
};
startPage(startNumber);

const switchManRight = function () {
  startNumber++;

  if (startNumber > 3) {
    startNumber = 0;
  }
  image.innerHTML = `<img src="${reviews[startNumber].img}" id="person-img" alt="" />`;

  author.innerHTML = `${reviews[startNumber].name}`;

  job.innerHTML = `${reviews[startNumber].job}`;

  info.innerHTML = `${reviews[startNumber].text}`;
};

const switchManLeft = function () {
  startNumber--;

  if (startNumber < 0) {
    startNumber = 3;
  }
  image.innerHTML = `<img src="${reviews[startNumber].img}" id="person-img" alt="" />`;
  author.innerHTML = `${reviews[startNumber].name}`;
  job.innerHTML = `${reviews[startNumber].job}`;
  info.innerHTML = `${reviews[startNumber].text}`;
};

const randomRevie = function () {
  let randomNum = getRandomInt();
  startNumber = randomNum;
  image.innerHTML = `<img src="${reviews[randomNum].img}" id="person-img" alt="" />`;
  author.innerHTML = `${reviews[randomNum].name}`;
  job.innerHTML = `${reviews[randomNum].job}`;
  info.innerHTML = `${reviews[randomNum].text}`;
};

btnsRight.addEventListener('click', switchManRight);
btnsLeft.addEventListener('click', switchManLeft);
randomBtn.addEventListener('click', randomRevie);

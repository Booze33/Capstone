const feature = document.querySelector('.feature');
const speakers = {
  FirstSpeaker: {
    image: 'images/speaker_01 1 (1).png',
    name: 'Yochai Benkler',
    position: 'Berkman Profesor of Art and Center Goal',
    text: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  SecondSpeaker: {
    image: 'images/speaker_01 1 (7).png',
    name: 'Kilnam Chou',
    position: 'Dean of Art and Fitness',
    text: 'He has been leading all open source projects',
  },

  ThirdSpeaker: {
    image: 'images/speaker_01 1 (2).png',
    name: 'SohYeong Noh',
    position: 'Executive Director',
    text: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  FourthSpeaker: {
    image: 'images/speaker_01 1 (3).png',
    name: 'Julia Leda',
    position: 'President Executive Affairs',
    text: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },

  FifthSpeaker: {
    image: 'images/speaker_01 1 (4).png',
    name: 'Lila Tretikov',
    position: 'President Executive Wikimedia Foundation',
    text: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },

  SixthSpeaker: {
    image: 'images/speaker_01 1 (5).png',
    name: 'Ryan Merkley',
    position: 'President Executive Wikimedia Foundation',
    text: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
};

const firstGrid = document.createElement('div');
const imgSec = document.createElement('div');
const firstImage = document.createElement('img');
const firstDiv = document.createElement('div');
const firstName = document.createElement('h2');
const firstPosition = document.createElement('div');
const firstText = document.createElement('p');
firstText.innerText = speakers.FirstSpeaker.text;
firstPosition.innerText = speakers.FirstSpeaker.position;
firstPosition.className = 'orange';
firstName.innerText = speakers.FirstSpeaker.name;
firstDiv.appendChild(firstName);
firstDiv.appendChild(firstPosition);
firstDiv.appendChild(firstText);
firstDiv.className = 'div-g';
firstGrid.className = 'j-grid';
firstImage.src = speakers.FirstSpeaker.image;
imgSec.appendChild(firstImage);
firstGrid.appendChild(imgSec);
firstGrid.appendChild(firstDiv);
feature.appendChild(firstGrid);

const secondGrid = document.createElement('div');
const secondImgSec = document.createElement('div');
const secondImage = document.createElement('img');
const secondDiv = document.createElement('div');
const secondName = document.createElement('h2');
const secondPosition = document.createElement('div');
const secondText = document.createElement('p');
secondText.innerText = speakers.SecondSpeaker.text;
secondPosition.innerText = speakers.SecondSpeaker.position;
secondPosition.className = 'orange';
secondName.innerText = speakers.FirstSpeaker.name;
secondDiv.appendChild(secondName);
secondDiv.appendChild(secondPosition);
secondDiv.appendChild(secondText);
secondDiv.className = 'div-g';
secondGrid.className = 'j-grid';
secondImage.src = speakers.SecondSpeaker.image;
secondImgSec.appendChild(secondImage);
secondGrid.appendChild(secondImgSec);
secondGrid.appendChild(secondDiv);
feature.appendChild(secondGrid);

const thirdGrid = document.createElement('div');
const thirdImgSec = document.createElement('div');
const thirdImage = document.createElement('img');
const thirdDiv = document.createElement('div');
const thirdName = document.createElement('h2');
const thirdPosition = document.createElement('div');
const thirdText = document.createElement('p');
thirdText.innerText = speakers.ThirdSpeaker.text;
thirdPosition.innerText = speakers.ThirdSpeaker.position;
thirdPosition.className = 'orange';
thirdName.innerText = speakers.ThirdSpeaker.name;
thirdDiv.appendChild(thirdName);
thirdDiv.appendChild(thirdPosition);
thirdDiv.appendChild(thirdText);
thirdDiv.className = 'div-g';
thirdGrid.className = 'j-grid';
thirdImage.src = speakers.ThirdSpeaker.image;
thirdImgSec.appendChild(thirdImage);
thirdGrid.appendChild(thirdImgSec);
thirdGrid.appendChild(thirdDiv);
feature.appendChild(thirdGrid);

const fourthGrid = document.createElement('div');
const fourthImgSec = document.createElement('div');
const fourthImage = document.createElement('img');
const fourthDiv = document.createElement('div');
const fourthName = document.createElement('h2');
const fourthPosition = document.createElement('div');
const fourthText = document.createElement('p');
fourthText.innerText = speakers.FourthSpeaker.text;
fourthPosition.innerText = speakers.FourthSpeaker.position;
fourthPosition.className = 'orange';
fourthName.innerText = speakers.FourthSpeaker.name;
fourthDiv.appendChild(fourthName);
fourthDiv.appendChild(fourthPosition);
fourthDiv.appendChild(fourthText);
fourthDiv.className = 'div-g';
fourthGrid.className = 'j-grid';
fourthImage.src = speakers.FourthSpeaker.image;
fourthImgSec.appendChild(fourthImage);
fourthGrid.appendChild(fourthImgSec);
fourthGrid.appendChild(fourthDiv);
feature.appendChild(fourthGrid);

const fifthGrid = document.createElement('div');
const fifthImgSec = document.createElement('div');
const fifthImage = document.createElement('img');
const fifthDiv = document.createElement('div');
const fifthName = document.createElement('h2');
const fifthPosition = document.createElement('div');
const fifthText = document.createElement('p');
fifthText.innerText = speakers.FifthSpeaker.text;
fifthPosition.innerText = speakers.FifthSpeaker.position;
fifthPosition.className = 'orange';
fifthName.innerText = speakers.FifthSpeaker.name;
fifthDiv.appendChild(fifthName);
fifthDiv.appendChild(fifthPosition);
fifthDiv.appendChild(fifthText);
fifthDiv.className = 'div-g';
fifthGrid.className = 'j-grid';
fifthImage.src = speakers.FifthSpeaker.image;
fifthImgSec.appendChild(fifthImage);
fifthGrid.appendChild(fifthImgSec);
fifthGrid.appendChild(fifthDiv);
feature.appendChild(fifthGrid);

const sixthGrid = document.createElement('div');
const sixthImgSec = document.createElement('div');
const sixthImage = document.createElement('img');
const sixthDiv = document.createElement('div');
const sixthName = document.createElement('h2');
const sixthPosition = document.createElement('div');
const sixthText = document.createElement('p');
sixthText.innerText = speakers.SixthSpeaker.text;
sixthPosition.innerText = speakers.SixthSpeaker.position;
sixthPosition.className = 'orange';
sixthName.innerText = speakers.SixthSpeaker.name;
sixthDiv.appendChild(sixthName);
sixthDiv.appendChild(sixthPosition);
sixthDiv.appendChild(sixthText);
sixthDiv.className = 'div-g';
sixthGrid.className = 'j-grid';
sixthImage.src = speakers.SixthSpeaker.image;
sixthImgSec.appendChild(sixthImage);
sixthGrid.appendChild(sixthImgSec);
sixthGrid.appendChild(sixthDiv);
feature.appendChild(sixthGrid);

const deskClick = document.querySelector('.click');
const deskHome = document.getElementById('home');
const deskAbout = document.getElementById('about');
const deskClickTo = document.querySelector('.click-to');

deskClick.addEventListener('click', () => {
  deskHome.style.display = 'none';
  deskAbout.style.display = 'block';

  deskClickTo.addEventListener('click', () => {
    deskHome.style.display = 'block';
    deskAbout.style.display = 'none';
  });
});

const mobileFeature = document.querySelector('.featured');
const mobileSpeakers = {
  FirstSpeaker: {
    image: 'images/speaker_01 1 (1).png',
    name: 'Yochai Benkler',
    position: 'Berkman Profesor of Art and Center Goal',
    text: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  SecondSpeaker: {
    image: 'images/speaker_01 1 (7).png',
    name: 'Kilnam Chou',
    position: 'Dean of Art and Fitness',
    text: 'He has been leading all open source projects',
  },

  ThirdSpeaker: {
    image: 'images/speaker_01 1 (2).png',
    name: 'SohYeong Noh',
    position: 'Executive Director',
    text: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  FourthSpeaker: {
    image: 'images/speaker_01 1 (3).png',
    name: 'Julia Leda',
    position: 'President Executive Affairs',
    text: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },

  FifthSpeaker: {
    image: 'images/speaker_01 1 (4).png',
    name: 'Lila Tretikov',
    position: 'President Executive Wikimedia Foundation',
    text: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },

  SixthSpeaker: {
    image: 'images/speaker_01 1 (5).png',
    name: 'Ryan Merkley',
    position: 'President Executive Wikimedia Foundation',
    text: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
};

const mobileFirstGrid = document.createElement('div');
const mobileImgSec = document.createElement('div');
const mobileFirstImage = document.createElement('img');
const mobileFirstDiv = document.createElement('div');
const mobileFirstName = document.createElement('h2');
const mobileFirstPosition = document.createElement('div');
const mobileFirstText = document.createElement('p');
mobileFirstText.innerText = mobileSpeakers.FirstSpeaker.text;
mobileFirstPosition.innerText = mobileSpeakers.FirstSpeaker.position;
mobileFirstPosition.className = 'orange';
mobileFirstName.innerText = mobileSpeakers.FirstSpeaker.name;
mobileFirstDiv.appendChild(mobileFirstName);
mobileFirstDiv.appendChild(mobileFirstPosition);
mobileFirstDiv.appendChild(mobileFirstText);
mobileFirstDiv.className = 'div-g';
mobileFirstGrid.className = 'j-grid';
mobileFirstImage.src = mobileSpeakers.FirstSpeaker.image;
mobileImgSec.appendChild(mobileFirstImage);
mobileFirstGrid.appendChild(mobileImgSec);
mobileFirstGrid.appendChild(mobileFirstDiv);
mobileFeature.appendChild(mobileFirstGrid);

const mobileSecondGrid = document.createElement('div');
const mobileSecondImgSec = document.createElement('div');
const mobileSecondImage = document.createElement('img');
const mobileSecondDiv = document.createElement('div');
const mobileSecondName = document.createElement('h2');
const mobileSecondPosition = document.createElement('div');
const mobileSecondText = document.createElement('p');
mobileSecondText.innerText = mobileSpeakers.SecondSpeaker.text;
mobileSecondPosition.innerText = mobileSpeakers.SecondSpeaker.position;
mobileSecondPosition.className = 'orange';
mobileSecondName.innerText = mobileSpeakers.SecondSpeaker.name;
mobileSecondDiv.appendChild(mobileSecondName);
mobileSecondDiv.appendChild(mobileSecondPosition);
mobileSecondDiv.appendChild(mobileSecondText);
mobileSecondDiv.className = 'div-g';
mobileSecondGrid.className = 'j-grid';
mobileSecondImage.src = mobileSpeakers.SecondSpeaker.image;
mobileSecondImgSec.appendChild(mobileSecondImage);
mobileSecondGrid.appendChild(mobileSecondImgSec);
mobileSecondGrid.appendChild(mobileSecondDiv);
mobileFeature.appendChild(mobileSecondGrid);

const mobileThirdGrid = document.createElement('div');
const mobileThirdImgSec = document.createElement('div');
const mobileThirdImage = document.createElement('img');
const mobileThirdDiv = document.createElement('div');
const mobileThirdName = document.createElement('h2');
const mobileThirdPosition = document.createElement('div');
const mobileThirdText = document.createElement('p');
mobileThirdText.innerText = mobileSpeakers.ThirdSpeaker.text;
mobileThirdPosition.innerText = mobileSpeakers.ThirdSpeaker.position;
mobileThirdPosition.className = 'orange';
mobileThirdName.innerText = mobileSpeakers.ThirdSpeaker.name;
mobileThirdDiv.appendChild(mobileThirdName);
mobileThirdDiv.appendChild(mobileThirdPosition);
mobileThirdDiv.appendChild(mobileThirdText);
mobileThirdDiv.className = 'div-g';
mobileThirdGrid.className = 'j-grid';
mobileThirdImage.src = mobileSpeakers.ThirdSpeaker.image;
mobileThirdImgSec.appendChild(mobileThirdImage);
mobileThirdGrid.appendChild(mobileThirdImgSec);
mobileThirdGrid.appendChild(mobileThirdDiv);
mobileFeature.appendChild(mobileThirdGrid);

const mobileFourthGrid = document.createElement('div');
const mobileFourthImgSec = document.createElement('div');
const mobileFourthImage = document.createElement('img');
const mobileFourthDiv = document.createElement('div');
const mobileFourthName = document.createElement('h2');
const mobileFourthPosition = document.createElement('div');
const mobileFourthText = document.createElement('p');
mobileFourthText.innerText = mobileSpeakers.FourthSpeaker.text;
mobileFourthPosition.innerText = mobileSpeakers.FourthSpeaker.position;
mobileFourthPosition.className = 'orange';
mobileFourthName.innerText = mobileSpeakers.FourthSpeaker.name;
mobileFourthDiv.appendChild(mobileFourthName);
mobileFourthDiv.appendChild(mobileFourthPosition);
mobileFourthDiv.appendChild(mobileFourthText);
mobileFourthDiv.className = 'div-g';
mobileFourthGrid.className = 'j-grid';
mobileFourthImage.src = mobileSpeakers.FourthSpeaker.image;
mobileFourthImgSec.appendChild(mobileFourthImage);
mobileFourthGrid.appendChild(mobileFourthImgSec);
mobileFourthGrid.appendChild(mobileFourthDiv);
mobileFeature.appendChild(mobileFourthGrid);

const mobileFifthGrid = document.createElement('div');
const mobileFifthImgSec = document.createElement('div');
const mobileFifthImage = document.createElement('img');
const mobileFifthDiv = document.createElement('div');
const mobileFifthName = document.createElement('h2');
const mobileFifthPosition = document.createElement('div');
const mobileFifthText = document.createElement('p');
mobileFifthText.innerText = mobileSpeakers.FifthSpeaker.text;
mobileFifthPosition.innerText = mobileSpeakers.FifthSpeaker.position;
mobileFifthPosition.className = 'orange';
mobileFifthName.innerText = mobileSpeakers.FifthSpeaker.name;
mobileFifthDiv.appendChild(mobileFifthName);
mobileFifthDiv.appendChild(mobileFifthPosition);
mobileFifthDiv.appendChild(mobileFifthText);
mobileFifthDiv.className = 'div-g';
mobileFifthGrid.className = 'j-grid';
mobileFifthImage.src = mobileSpeakers.FifthSpeaker.image;
mobileFifthImgSec.appendChild(mobileFifthImage);
mobileFifthGrid.appendChild(mobileFifthImgSec);
mobileFifthGrid.appendChild(mobileFifthDiv);
mobileFeature.appendChild(mobileFifthGrid);

const mobileSixthGrid = document.createElement('div');
const mobileSixthImgSec = document.createElement('div');
const mobileSixthImage = document.createElement('img');
const mobileSixthDiv = document.createElement('div');
const mobileSixthName = document.createElement('h2');
const mobileSixthPosition = document.createElement('div');
const mobileSixthText = document.createElement('p');
mobileSixthText.innerText = mobileSpeakers.SixthSpeaker.text;
mobileSixthPosition.innerText = mobileSpeakers.SixthSpeaker.position;
mobileSixthPosition.className = 'orange';
mobileSixthName.innerText = mobileSpeakers.SixthSpeaker.name;
mobileSixthDiv.appendChild(mobileSixthName);
mobileSixthDiv.appendChild(mobileSixthPosition);
mobileSixthDiv.appendChild(mobileSixthText);
mobileSixthDiv.className = 'div-g';
mobileSixthGrid.className = 'j-grid';
mobileSixthImage.src = mobileSpeakers.SixthSpeaker.image;
mobileSixthImgSec.appendChild(mobileSixthImage);
mobileSixthGrid.appendChild(mobileSixthImgSec);
mobileSixthGrid.appendChild(mobileSixthDiv);
mobileFeature.appendChild(mobileSixthGrid);

const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

const take = document.querySelector('.take');
const don = document.querySelector('.don');
const MobileAbout = document.getElementById('mobile-about');
const mobileHome = document.getElementById('mobile-home');
take.addEventListener('click', () => {
  MobileAbout.style.display = 'block';
  mobileHome.style.display = 'none';
});

don.addEventListener('click', () => {
  MobileAbout.style.display = 'none';
  mobileHome.style.display = 'block';
});

const aboutBtn = document.querySelector('.about-burger');
const aboutMenu = document.querySelector('.about-nav');

aboutBtn.addEventListener('click', () => {
  aboutBtn.classList.toggle('is-active');
  aboutMenu.classList.toggle('is-active');
});
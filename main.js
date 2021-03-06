const featuredSpeakersContainer = document.querySelector('.speakers-container');
const featuredSpeakers = document.querySelector('.speakers');
const speakerInfo = [
  {
    name: 'Betsy Nunoo',
    image: './assets/images/betsy.jfif',
    profession: 'CEO of Hackfiery, Studies Computer science at Turkey',
    about: 'Betsy Nunoo, is currently doing her Masters in computer science. She publised papers on the use of quantum computers',
  },
  {
    name: 'Paul Kofi Osei',
    image: './assets/images/paul.jpg',
    profession: 'Co-founder of Hackfiery, owns a coding hub that trains youth in cloud services',
    about: 'Paul Kofi, osei, is currently doing his PhD in cloud computing. He is the author of cloud computing now!. The bestseller of New york times',
  },
  {
    name: 'Dowell Wisdom',
    image: './assets/images/jayden.jpg',
    profession: 'Software Engineer, Facebook',
    about: 'Dowell Wisdom, owns and maintains an open source library known as jscript. He is a publisher and author of several books on programming',
  },
  {
    name: 'Sharon Dassah',
    image: './assets/images/sharon.jfif',
    profession: 'Co-founder of Hackfiery and Dropbox',
    about: 'Sharon Dassah, is currently doing his Masters in cloud computing in New Mexico. He is the author of cloud computing now!. The bestseller of New york times',
  },
  {
    name: 'Julliet Ibrahim',
    image: './assets/images/ceo.jpg',
    profession: 'Software Engineer, Google developer',
    about: 'Peter Sikpa, owns and maintains an open source library known as jscript. He is a publisher and author of several books on programming',
  },
  {
    name: 'Thomas Bright',
    image: './assets/images/thomas.jpg',
    profession: 'Full Stack Developer, Microverse',
    about: 'Jayden Brown, owns and maintains an open source library known as jscript. He is a publisher and author of several books on programming',
  },
];

function featuredSectionTitle() {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Featured Speakers';
  h2.className = 'speakers-section-title';
  return h2;
}

function horizontalLine() {
  const hr = document.createElement('hr');
  hr.className = 'speakers-line';
  return hr;
}

function speakersCardImage(data) {
  const { image } = data;
  const img = document.createElement('img');
  img.src = image;
  img.className = 'img-fluid speaker-image';
  return img;
}

function speakerName(data) {
  const { name } = data;
  const h2 = document.createElement('h2');
  h2.className = 'speaker-name';
  h2.innerHTML = name;

  return h2;
}

function speakerProfession(data) {
  const { profession } = data;
  const p = document.createElement('p');
  p.className = 'speaker-profession';
  p.innerHTML = profession;

  return p;
}

function speakerLine() {
  const hr = document.createElement('hr');
  hr.className = 'speaker-content-line';

  return hr;
}

function aboutSpeaker(data) {
  const { about } = data;
  const p = document.createElement('p');
  p.className = 'about-speaker';
  p.innerHTML = about;

  return p;
}

function moreButton() {
  const button = document.createElement('button');
  button.innerHTML = 'More <i class="bi bi-chevron-down button-icon"></i>';
  button.className = 'more-button';
  button.setAttribute('data-aos', 'fade-up');

  return button;
}

function createSpeaker(data) {
  const speakersCard = document.createElement('div');
  const speakerCardTextContent = document.createElement('div');

  speakerCardTextContent.className = 'speaker-card-text-content';
  speakersCard.className = 'speakers-card';
  speakersCard.setAttribute('data-aos', 'zoom-in');
  speakerName(data);
  speakerProfession(data);
  speakerLine();
  aboutSpeaker(data);

  speakerCardTextContent
    .append(speakerName(data), speakerProfession(data), speakerLine(), aboutSpeaker(data));
  speakersCard.append(speakersCardImage(data), speakerCardTextContent);

  return speakersCard;
}

featuredSpeakersContainer
  .append(featuredSectionTitle(), horizontalLine(), featuredSpeakers, moreButton());

for (let i = 0; i < speakerInfo.length; i += 1) {
  const data = speakerInfo[i];
  featuredSpeakers.append(createSpeaker(data));
}

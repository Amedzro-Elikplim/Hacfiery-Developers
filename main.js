const featuredSpeakers = document.querySelector('.speakers');
const speakersCard = document.createElement('div');
const speakerCardTextContent = document.createElement('div');

speakerCardTextContent.className = 'speaker-card-text-content';
speakersCard.className = 'speakers-card';

const speakerInfo = [
  {
    name: 'Betsy Nunoo',
    image: './assets/images/betsy.jfif',
    profession: 'CEO of Hackfiery, Studies Computer science at Turkey Institute of Computer science',
    about: 'Betsy Nunoo, is currently doing her Masters in computer science. She publised papers on the use of quantum computers to solve immigration problems',
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

function speakersCardImage() {
  const img = document.createElement('img');
  img.src = './assets/images/betsy.jfif';
  img.className = 'img-fluid speaker-image';
  return img;
}

function speakerName() {
  const h2 = document.createElement('h2');
  h2.className = 'speaker-name';
  h2.innerHTML = 'Betsy Nunoo';

  return h2;
}

function speakerProfession() {
  const p = document.createElement('p');
  p.className = 'speaker-profession';
  p.innerHTML = 'CEO of Hackfiery, Studies Computer science at Turkey Institute of Computer science';

  return p;
}

function speakerHrLine() {
  const hr = document.createElement('hr');
  hr.className = 'speaker-content-line';

  return hr;
}

function aboutSpeaker() {
  const p = document.createElement('p');
  p.className = 'about-speaker';
  p.innerHTML = 'Betsy Nunoo, is currently doing her Masters in computer science. She publised papers on the use of quantum computers to solve immigration problems';

  return p;
}

speakerCardTextContent.append(speakerName(), speakerProfession(), speakerHrLine(), aboutSpeaker());
speakersCard.append(speakersCardImage(), speakerCardTextContent);
featuredSpeakers.append(featuredSectionTitle(), horizontalLine(), speakersCard);

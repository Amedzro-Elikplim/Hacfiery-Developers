const featuredSpeakers = document.querySelector('.speakers');

function featuredSectionTitle() {
  const title = document.createElement('h2');
  title.innerHTML = "Featured Speakers"
  return title;
}

function horizontalLine() {
  const hr = document.createElement('hr');
  hr.className = 'line';
  return hr;
}

const options = {weekday : 'long', day: 'numeric', month: 'long', year: 'numeric'};
const YEAR = {year: 'numeric'};

document.querySelector('#lastModified').textContent = document.lastModified;
document.querySelector('#year').textContent = new Date().toLocaleDateString('en-US', YEAR);

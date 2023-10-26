const options = {weekday : 'long', day: 'numeric', month: 'long', year: 'numeric'};
const YEAR = {year: 'numeric'};

document.querySelector('#lastModified').textContent = document.lastModified;
document.querySelector('#year').textContent = new Date().toLocaleDateString('en-US', YEAR);

// For Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// For showing invitation picture
const d = new Date();
let day = d.getDay();

if (day === 1 || day === 2 || day === 4) {
    const image = document.querySelector('.hero');
    const main = document.querySelector('#index_main');

    let figure = document.createElement('figure');
    image.setAttribute('src', 'images/meet-invite.webp');
    image.setAttribute('alt', 'An invitation to meet and greet');

    const content = document.createElement('button');
    content.textContent = '❌';

    content.addEventListener('click', () => {
        image.setAttribute('src', 'images/hero.webp');
        image.setAttribute('alt', 'A hero banner with a picture of city traffic and welcoming words');
        content.setAttribute('id', 'remove');
    })

    main.appendChild(content)
    image.classList.add('invite');
}

// For showing active page
let current = 0;
for (let i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'current';


const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        //console.table(data);
        displayProphets(data.prophets);
    }
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');

        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet['name']} ${prophet['lastname']}`;

        let birthDate = document.createElement('p');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        let birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        let portrait = document.createElement('img');
        portrait.setAttribute('src', `${prophet['imageurl']}`);
        portrait.setAttribute('alt', 'Portrait of a prophet');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('wdith', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}
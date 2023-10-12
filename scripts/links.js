const baseURL = "https://mistshard.github.io/wdd230/";
const linksURL = "https://mistshard.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data.weeks);
        displayLinks(data.weeks);
    }
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        let card = document.querySelector('#assignment-links');

       
        week.forEach(links => {
            let week = document.createElement('li');
            week.textContent = `${links.week}: `;
            links.link.forEach(a_block => {
                let url_title = document.createElement('a');
                url_title.setAttribute('href', a_block.url);

                let link_divider = " | ";

                if (a_block === links.link[-1]) {
                    link_divider = "";
                }

                url_title.textContent = `${a_block.title}${link_divider}`;


                week.appendChild(url_title);
                card.appendChild(week);
            })
        })

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

getLinks(linksURL);
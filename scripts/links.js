const baseURL = "https://mistshard.github.io/wdd230/";
const linksURL = "https://mistshard.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        //console.log(data.weeks);
        displayLinks(data.weeks);
    }
}

function displayLinks(weeks) {
    //console.log(weeks);
    weeks.forEach(a_week => {
        let card = document.querySelector('#assignment-links');
        let list_element = document.createElement('li');
        list_element.textContent = `${a_week.week}:`;

        //console.log(a_week);
        all_links = a_week.links;

        all_links.forEach(link_title => {
            let links = link_title.url;
            //console.log(links);

            let link_url = document.createElement('a');
            link_url.setAttribute('href', link_title.url);
            link_url.style.color = 'navy';
            // if(link_title.title === link_title[-1]) {
            //     console.log('last one');
            // }else {console.log('not last');}

            link_url.textContent = ` ${link_title.title} |`;

            list_element.appendChild(link_url);
            card.appendChild(list_element);
            
        });
            
        })
    }

getLinks(linksURL);
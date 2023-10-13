
const btn = document.querySelector('#mode');
const main = document.querySelector('main');
const card = document.querySelector('#one');
const card2 = document.querySelector('#two');
const h2 = document.querySelector('h2');
const body = document.querySelector('body');
const link = document.querySelectorAll('li>a');
const b_link = document.querySelectorAll('body > main > section > ul > li > a');
//console.log(b_link);

btn.addEventListener('click', () => {
    if (btn.textContent == 'Dark Mode') {
        main.style.background = '#36454F';
        main.style.color = 'white';
        h2.style.color = 'white';
        card.style.background = '#36454F';
        card2.style.background = '#36454F';
        card2.style.boxShadow = 'none';
        card.style.boxShadow = 'none';
        btn.textContent = 'Light Mode';
        body.style.background = 'black';

        b_link.forEach(element => {
            element.style.color = 'white';
            element.hover
        });
    } else {
        btn.textContent = 'Dark Mode';
        main.style.background = 'white';
        main.style.color = 'black';
        h2.style.color = 'rgb(65, 25, 25)';
        card.style.background = 'aliceblue';
        card2.style.background = 'aliceblue';
        card2.style.boxShadow = '10px 10px 10px rgb(87, 84, 84)';
        card.style.boxShadow = '10px 10px 10px rgb(87, 84, 84)';
         body.style.background = 'white';
         b_link.forEach(element => {
            element.style.color = 'rgb(65, 25, 25)';
            element.hover
        });
    }
})

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const visitsDisplay = document.querySelector("#visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!. Come back alot!!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

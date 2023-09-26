
const btn = document.querySelector('#mode');
const main = document.querySelector('main');
const card = document.querySelector('#one');
const card2 = document.querySelector('#two');
const h2 = document.querySelector('h2');
const body = document.querySelector('body');
const link = document.querySelectorAll('li>a');
const b_link = document.querySelectorAll('body > main > section > ul > li > a');

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
            element.style.color = 'red';
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

// const date = document.querySelector("#date");

// // Long hand method ... building day and month names from built-in date methods.
// const daynames = [
// 	"Sunday",
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday"
// ];
// const months = [
// 	"Jan",
// 	"Feb",
// 	"Mar",
// 	"Apr",
// 	"May",
// 	"Jun",
// 	"Jul",
// 	"Aug",
// 	"Sep",
// 	"Oct",
// 	"Nov",
// 	"Dec"
// ];
// const d = new Date();
// const dayName = daynames[d.getDay()];
// const monthName = months[d.getMonth()];
// const year = d.getFullYear();
// const fulldate = `${monthName} ${d.getDate()}, ${year}`;
// let oLastModif = (document.lastModified);
// //document.getElementById("date").textContent = oLastModif;
// document.getElementById("year").textContent = year;

//Using ToLocalDateString()

const options = {weekday : 'long', day: 'numeric', month: 'long', year: 'numeric'};
const YEAR = {year: 'numeric'};

document.querySelector('#lastModified').textContent = document.lastModified;
document.querySelector('#year').textContent = new Date().toLocaleDateString('en-US', YEAR);



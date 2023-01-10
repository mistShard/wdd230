const date = document.querySelector("#date");

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${monthName} ${d.getDate()}, ${year}`;
let oLastModif = new Date(document.lastModified);
document.getElementById("date").textContent = oLastModif;
if (Date.parse(document.lastModified) > parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*=\s*([^;]*).*$)|^.*$/, "$1") || "0")) {
    document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;
    alert("This page has changed!");
  }
  


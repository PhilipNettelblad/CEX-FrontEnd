weatherData();


async function weatherData(){

let response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Gothenburg&limit=5&appid=99201bb13f2ece9baccca561b565172d');
let weather = await response.json();
}

/*document.querySelector('#Result');
let p = document.createElement('p');
document.querySelector('#Result').appendChild(p);

//let weatherElement = document.querySelector();

const apiKey = '99201bb13f2ece9baccca561b565172d';
let params = new URLSearchParams({
    q: 'New York',
    units: 'metric',
    appid: apiKey,
});
*/
const fetchData = async cityName => {
    const keys = 'a21168532785fb5768a5a18f6bd7f286'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys}&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
};

const displayData = data => {
    console.log(data);
    document.getElementById('city').innerText = data.name
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('weather').innerText = data.weather[0].main

};

const searchByCity = () => {
    const cityName = document.getElementById('input-field').value;
    fetchData(cityName);
}



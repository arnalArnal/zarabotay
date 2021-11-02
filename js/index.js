const MainLeft = document.querySelector('.Moscow')
MainLeft.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=946eb4a4d72dd907a1d201ba481e7242')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.tem').innerHTML = Math.round(data.main.temp - 273) + '&deg'
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'm/s'
        
    }) 
    .catch(function () {
    })
})

const MainLeft1 = document.querySelector('.London')
MainLeft1.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=946eb4a4d72dd907a1d201ba481e7242')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.tem').innerHTML = Math.round(data.main.temp - 273) + '&deg'
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'm/s'
        
    }) 
    .catch(function () {
    })
})

const MainLeft2 = document.querySelector('.Tokyo')
MainLeft2.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=946eb4a4d72dd907a1d201ba481e7242')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.tem').innerHTML = Math.round(data.main.temp - 273) + '&deg'
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'm/s'
        
    }) 
    .catch(function () {
    })
})

const MainLeft4 = document.querySelector('.Istanbul')
MainLeft4.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=946eb4a4d72dd907a1d201ba481e7242')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.tem').innerHTML = Math.round(data.main.temp - 273) + '&deg'
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'm/s'
        
    }) 
    .catch(function () {
    })
})

const MainLeft5 = document.querySelector('.Bishkek')
MainLeft5.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=bishkek&appid=946eb4a4d72dd907a1d201ba481e7242')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.tem').innerHTML = Math.round(data.main.temp - 273) + '&deg'
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'm/s'
        
    }) 
    .catch(function () {
    })
})
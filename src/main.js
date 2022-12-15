let pEl = document.querySelectorAll('p');
let imgEl = document.querySelectorAll('.imgBox')[0];
const api_key = '132c4819a3edd9d062256ad974f08b29'
let city ='anyang-si'
const apiCall =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&lang=kr`

fetch(apiCall).then(function(res){
   return res.json();
}).then(function(data){
   return weatherChange(data);
})

let names = document.querySelectorAll('.pointer');

names.forEach((e)=>{
    e.addEventListener('click',()=>{
    console.log(e.dataset.itemtype);
    city=e.dataset.itemtype
    return getweather(city);
})
})
function getweather(city) {
    console.log(city);
    const apiCall =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&lang=kr`
    fetch(apiCall).then(function(res){
        return res.json();
    }).then(function(data){
    return weatherChange(data);
    })
}

setInterval(function(){
    let date = new Date();
    pEl[0].innerHTML=`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
    pEl[1].innerHTML=`${date.getHours()}시 ${date.getMinutes()}분`
});


function weatherChange(data) {
    console.log(data);
    let weather = data.weather[0];
    console.log(weather);
    let weather1;
    if(weather.main=="Clear"||weather.main=="Clouds"||weather.main=="Rain"||weather.main=="Snow"||weather.main=="Thunderstorm"||weather.main=="drizzle") {
        weather1=weather.main;
    }else {
        weather1 = 'etc';
    }
    console.log(weather1);
    pEl[2].innerHTML =data.name
    pEl[4].innerHTML = weather.main;
    pEl[3].innerHTML = `${Math.floor((data.main.temp-273.15)*10)/10}&deg;C`; 
    imgEl.innerHTML =`<img src="./src/images/${weather1}.svg" width="190px" height="122px"/>`

}
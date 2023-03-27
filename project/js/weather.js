const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY ="55bc30618850b501ff1f351276895262c";

navigator.geolocation.getCurrentPosition(geoOk,geoErr);
function  geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?let=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response)=>response.json())
              .then((data)=>{
                console.log(data);
                city.innerText =data.name;
                weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
              });
}
function geoErr(){
    alert("can't find you.NO weather info.");
}
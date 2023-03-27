"use strict"
function currentTime() {
    const date = new Date(); 
    let hh = date.getHours().toString().padStart(2,'0'); //padStart(targetLength [, padString]) --> padString은 공백일시 빈문자열 
    let mm = date.getMinutes().toString().padStart(2,'0');  //그러므로 뒤에 0이라고 해놓으면 시간이 10보다 아래이면 3에서 03으로 보이게해준다.
    let ss = date.getSeconds().toString().padStart(2,'0'); 
    let time = hh+":"+mm+":"+ss;
    
    document.getElementById("clock").textContent = time; // js에서 byId(''); #이나 .을 안붙임 이건 css에서 해당하는거
}
setInterval(currentTime,1000);  //1초간격으로 currentTime을 반복적으로 수행시켜준다 


'use strict';
function display(va){
    document.getElementById('result').value+=va;
    return va;
}
display(123);
function solve(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

function clearScreen(){
    document.getElementById('result').value='';
}
let f = document.querySelector('.keys').firstElementChild;
console.log(f);
f.addEventListener('click',function(){display(f.value);});
// f.onclick = function(){display(f.value);}; -> 프로퍼티 방식
window.onload=function(){
let buttons = document.getElementsByClassName('button');
let operators = document.getElementsByClassName('operator');
for(let button of buttons){
    let val = button.value;
    if(!button.className.includes('equal-sign')){
    button.addEventListener('click',()=>display(val));
    }
}
for(let oper of operators){
    let val=oper.value;
    oper.addEventListener('click',()=>display(val));
}
document.querySelector('.equal-sign').addEventListener('click',
    ()=>solve());
}
// window.onload document.onload
// 즉시 실행 함수



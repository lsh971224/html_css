
//img 폴더의 이미지 중 랜덤으로 선택해서 화면에 요소를 생성해서 추가 
const images=['0.jpg','1.jpg','2.jpg'];
const chosenImg = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement('img');
bgImg.src =`./img/${chosenImg}`;
document.body.appendChild(bgImg);
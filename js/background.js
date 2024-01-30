const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤한 이미지 출력

const bgImage = document.createElement("img"); //JS 에서 html요소를 생성 ()안에 "img" 가 있으므로 html내에 img 태그 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

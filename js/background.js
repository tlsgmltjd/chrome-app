const images = ["0.jpg", "1.jpg", "2.jpg"];

const choesnImage = images[Math.floor(Math.random() * images.length)];

// 요소 추가하기
const bgImage = document.createElement("img");
// 요소의 속성 추가하기
bgImage.src = `img/${choesnImage}`;

// 만든 요소를 body에 추가하기
document.body.append(bgImage);

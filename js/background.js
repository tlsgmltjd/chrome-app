const images = ["bgImg1", "bgImg2", "bgImg3"];

const choesnImage = images[Math.floor(Math.random() * images.length)];

// 요소 추가하기
// const bgImage = document.createElement("img");
const bg = document.querySelector("#backGround");
// 요소의 속성 추가하기
// bgImage.src = `img/${choesnImage}`;

bg.classList = choesnImage;

console.log(choesnImage);

// 만든 요소를 body에 추가하기
//  document.body.append(bgImage);

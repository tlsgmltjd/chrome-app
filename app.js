// id 선택
// const title = document.getElementById("title");
// title.innerText = "Got you!";

// class 선택
// const title = document.getElementsByClassName("hello");
//console.log(title);

// tag 선택
// const title = document.getElementsByTagName("h1");
// console.log(title);

// 좋음 이거 쓰셈 document.querySelector(".hello");
// const title = document.querySelector(".hello h1");
// console.log(title);

const h1 = document.querySelector("div.hello:first-child h1");
h1.style.color = "red";

// 이벤트 리스너 클릭
function handleTitleClick() {
  console.log("title was clicked");
}

function handleMouseEnter() {
  h1.innerHTML = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerHTML = "Mouse is gone";
}

function hadleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function hadleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All cool!");
}

// click 이벤트가 발생했을 때 뒤에 함수 실행 / 함수엔 () 괄호 넣으면 안됨!
h1.addEventListener("click", handleTitleClick);
// or
// h1.onclick = handleTitleClick;

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", hadleWindowResize);
window.addEventListener("copy", hadleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

////////////////////////////////////////////////////////////////////////////////

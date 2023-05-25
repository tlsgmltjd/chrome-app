const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

// interval : 매번 일어나야 하는 무언가
// setInterval(function, ms) : 매 시간마다 실행해주는 함수
// setInterval(sayHello, 2000);

// setTimeout(function, ms) : 일정시간 후 실행해주는 함수
// setTimeout(sayHello, 2000);

getClock();
setInterval(getClock, 1000);

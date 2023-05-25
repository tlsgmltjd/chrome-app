const quotes = [
  {
    quote: "김겸비 그만 만져",
    author: "더모먼트 신희성",
  },
  {
    quote: "문혜성 공부 해렴",
    author: "더모먼트 신희성",
  },
  {
    quote: "주은이 머리 부드럽다",
    author: "더모먼트 신희성",
  },
  {
    quote: "더 모먼트 화이팅",
    author: "더모먼트 신희성",
  },
  {
    quote: 'git add . git commit -m "commit message" git push',
    author: "더모먼트 신희성",
  },
  {
    quote: "허 허크얻ㄱ 킄 크킄킄크ㅡ큭",
    author: "더모먼트 신희성",
  },
  {
    quote: "우개개개개ㅐ개개개개객",
    author: "더모먼트 신희성",
  },
  {
    quote: "겸비가 옆에서 HYPE 한다",
    author: "더모먼트 신희성",
  },
  {
    quote: "오모리 김치찌개",
    author: "더모먼트 신희성",
  },
  {
    quote: "누리호 3차 발사 성공",
    author: "더모먼트 신희성",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math 객체의 random 매소드 : 0 ~ 1 사이의 난수

// round 매소드 : 반올림 해줌
// ceil 매소드 : 걍 하늘 끝 까지 높혀줌 ex. 1.1 -> 2
// floor 매소드 : 걍 바닥 까지 낮춰줌 ex. 1.9 -> 1

const toDayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuote.quote;
author.innerText = toDayQuote.author;

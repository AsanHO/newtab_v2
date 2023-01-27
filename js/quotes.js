const quotes = [
  {
    quote: "동기로는 매일할 수 없지만 규율로는 가능하다.",
    author: "jocko willink",
  },
  {
    quote: "있을 때 잘해라. 그러나 없을때는 당당하라",
    author: "李秉喆",
  },
  {
    quote: "There are trials, but there are no failures.",
    author: "鄭周永",
  },
  {
    quote: "Millionaires are made by processes, not events.",
    author: "Mj De Marco",
  },
  {
    quote: "The great company being built by great product",
    author: "Elon Musk",
  },
  {
    quote: "Артиллерия — бог современной войны.",
    author: "Ио́сиф Виссарио́нович Ста́лин",
  },
  {
    quote:
      "a man who wants to subdue fortuna must treat her like the woman she is, and approach her with boldness and roughness",
    author: "Niccolò Machiavelli",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Benedict Torvalds",
  },
  {
    quote:
      "꿈을 잃지 말고 확신 속에서 용기를 내며 그대가 처한 가혹한 현실에 과감히 도전하라",
    author: "Viktor Emil Frankl",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

var quoteHtml = document.getElementById("quoteHtml");

var quotes = [
  {
    quote: '"The best revenge is massive success."',
    author: "--Frank Sinatra",
  },
  {
    quote: '"You miss 100% of the shots you dont take."',
    author: "--Wayne Gretzy",
  },
  {
    quote:
      '"Resentment is like drinking poison and waiting for your enemies to die."',
    author: "--Nelson Mandela",
  },
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "-- Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    author: "-- Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "-- Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "-- Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "-- Mae West",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.",
    author: "-- Oscar Wilde",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "-- Andre Gide",
  },
  {
    quote:
      "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
    author: "-- Albert Einstein",
  },
];
var counter = [];

function showQuote() {
  if (counter.length === quotes.length) {
    counter = [];
  }

  do {
    var randomNum = Math.floor(Math.random() * quotes.length);
  } while (counter.indexOf(randomNum) !== -1);
  counter.push(randomNum);

  var box = `
    <h2>${quotes[randomNum].quote}</h2>
    <p>${quotes[randomNum].author}</p>
    `;
  quoteHtml.innerHTML = box;
  
}

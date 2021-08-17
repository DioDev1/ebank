const messagesArray = [
  {
    sender: "Thomas Johnson",
    lastMessage: "Hello, man. Give me $120, please. Cat gives birth...",
    date: "5 min ago",
    notSeen: 1,
    picture: "contacts/contact1.png",
  },
  {
    sender: "Steve Bruski",
    lastMessage:
      "Thanks. I really helped out. I'll give it the day after tom...",
    date: "Today, at 10:00",
    notSeen: 1,
    picture: "contacts/contact2.png",
  },
  {
    sender: "Anastasia Markus",
    lastMessage: "Return at least once in time 😈",
    date: "Yesterday, at 14:02",
    picture: "contacts/contact3.png",
  },
  {
    sender: "Anastasia Markus",
    lastMessage: "No, don’t ask me for a loan anymore. The freebie is over ✋",
    date: "Yesterday, at 13:45",
    picture: "contacts/contact4.png",
  },
  {
    sender: "e Banco",
    lastMessage: "Dear users, today at 00:00 the service will be unavaila...",
    date: "20 Dec, at 09:00",
  },
];

const articleFake = document.querySelector(".msg");
for (const articleData of messagesArray) {
  const articleHTMLClone = articleFake.cloneNode(true);
  document.querySelector("main").append(articleHTMLClone);
  articleHTMLClone.querySelector("h1").innerText = articleData.sender;
  articleHTMLClone.querySelector("h2").innerText = articleData.lastMessage;
  articleHTMLClone.querySelector("p").innerText = articleData.date;
  articleHTMLClone.style.backgroundImage = "url(" + articleData.picture + ")";
  articleHTMLClone.querySelector("h3").innerText = articleData.notSeen;
}
articleFake.remove();

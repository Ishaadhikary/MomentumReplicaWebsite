const auth = document.createElement("div");
auth.style.textAlign = "center";
updateQuotes();
setInterval(updateQuotes, 10000);
function updateQuotes() {
  let randomIndexQuotes = randomNumbers(quotesList);
  let authorShowing = authorList[randomIndexQuotes]; //to get the authors name
  const quoteShowing = quotesList[randomIndexQuotes]; //to get the quote
  quoteShowingId.textContent = quoteShowing; //adding the quote to the webpage
  auth.textContent = "-" + authorShowing;
  quoteShowingId.addEventListener("mouseenter", (e) => {
    quoteShowingId.append(auth); //adding the author to the page when the pointer is set on the quote
  });
  quoteShowingId.addEventListener("mouseleave", (e) => {
    quoteShowingId.removeChild(auth);
  }); //removing the authors name when the pointer is removed
}

function generateQuote() {
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex];

    let changeColor = COLORGENERATOR.length;
    let randomChange = Math.floor(Math.random() * changeColor);
    let randomColorChange = COLORGENERATOR[randomChange];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
    
    // Add the Quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat
    // Add the Author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + authorInApiFormat

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;

    document.body.style.backgroundColor = randomColorChange.body;
    document.getElementById("tweet-quote").style.color = randomColorChange.twitter;
    document.getElementById("quote-mark").style.color = randomColorChange.qmark;
    document.getElementById("header").style.backgroundColor = randomColorChange.header;
    document.getElementById("new-quote").style.backgroundColor = randomColorChange.button;    
    
    document.getElementById("new-quote").addEventListener("mouseover", function() {
        document.getElementById("new-quote").style.backgroundColor = randomColorChange.hoverbtn; 
    })

    document.getElementById("new-quote").addEventListener("mouseout", function() {
        document.getElementById("new-quote").style.backgroundColor = randomColorChange.button; 
    })
    
    document.getElementById("tweet-quote").addEventListener("mouseover", function() {
        document.getElementById("tweet-quote").style.color = randomColorChange.hovertweet; 
    })

    document.getElementById("tweet-quote").addEventListener("mouseout", function() {
        document.getElementById("tweet-quote").style.color = randomColorChange.twitter; 
    })
   
}
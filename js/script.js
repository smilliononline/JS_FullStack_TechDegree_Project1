// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {quote: "Strive not to be a success, but rather to be of value.", source: "Albert Einstein", citation: "forbes.com", year: "unknown"},
{quote: "I attribute my success to this: I never gave or took any excuse.", source: "Florence Nightengale", citation: "forbes.com", year: "1933"},
{quote: "The most difficult thing is the decision to act, the rest is merely tenacity", source: "Amelia Earhart", citation: "forbes.com", year: "unknown"},
{quote: "We become what we think about.", source: "Earl Nightengale", citation: "forbes.com", year: "1957"},
{quote: "Life is 10% what happens to me and 90% of how I react to it.", source: "Charles Swindoll", citation: "forbes.com", year: "2006"}
];

var numberOfQuotes = quotes.length;
console.log(numberOfQuotes); // tests that we see a random quote via console.



// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(){ // provides a random quote from quotes array.
    rand = Math.floor(Math.random()*numberOfQuotes);
    for (quote in quotes){
        return quotes[rand];
    }
}


// prints out a random quote
function printQuote(){
    var randomQuote = getRandomQuote();    
    var htmlStrings = "";

    htmlStrings += "<p class=\"quote\">" + randomQuote.quote + "</p>" + "<p class=\"source\">" + randomQuote.source + "<span class=\"citation\">" + randomQuote.citation + "</span>" + "<span class=\"year\">" + randomQuote.year + "</span>" + "</p>";
   

    document.getElementById('quote-box').innerHTML = htmlStrings; // writes quote

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var buttonClick = document.getElementById('loadQuote').addEventListener("click", function(){
    printQuote();
    colorChange();}, false) // clicks button for new quote

//document.getElementById('loadQuote').addEventListener( "click", colorChange,);

var colors = ["red", "blue", "green", "gray", "black"];
// array of colors for background

var randColors = function() {
    return Math.floor(Math.random() * colors.length);
}; // random color generator

function colorChange() {
    var index = randColors();
    var newColor = colors[index];
    document.querySelector('body').style.backgroundColor = newColor;
    
}

document.getElementById('loadQuote').addEventListener("click", function(){
    printQuote();
    colorChange();
}, false) // clicks button for new quote
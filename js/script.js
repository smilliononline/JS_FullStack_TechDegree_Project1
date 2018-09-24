// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [{quote1: "Sample Quote1 -Author, Year"},
{quote2: "Sample Quote2 -Author, Year"},
{quote3: "Sample Quote3 -Author, Year"},
{quote4: "Sample Quote4 -Author, Year"},
{quote5: "Sample Quote5 -Author, Year"}]


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array){
    rand = Math.floor((Math.random()*5)+1);
    return quotes[rand];
}


// Create the printQuote funtion and name it printQuote
function printQuote(){
    print = getRandomQuote();
    document.getElementById("quote-box")
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
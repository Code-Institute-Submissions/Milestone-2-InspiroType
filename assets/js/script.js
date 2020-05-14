const randomQuote = document.getElementById('randomQuote')
const userInput = document.getElementById('userInput');
const gameTimer = document.getElementById('timer');


let hardQuotes = [

    '“Life must be understood backward. But it must be lived forward” – Soren Kierkegaard',
    '“The greater the difficulty, the more glory in surmounting it” – Epicurus',
    '“That man is wisest who, like Socrates, realises that his wisdom is worthless” – Plato',
    '“The function of prayer is not to influence God, but rather to change the nature of the one who prays” – Soren Kierkegaard',
    '“If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things” – Rene Descartes',
    '“Freedom is secured not by the fulfilling of one\'s desires, but by the removal of desire” – Epictetus',
    '“The brave man is he who overcomes not only his enemies but his pleasures” – Democritus',
    '“A little philosophy inclineth man\'s mind to atheism; but depth in philosophy bringeth men\’s minds about to religion” – Sir Francis Bacon',
    '“The unexamined life is not worth living” – Socrates',
    '“We are what we repeatedly do. Excellence, then, is not an act, but a habit” – Aristotle',
    '“Without music, life would be a mistake.” ― Friedrich Nietzsche',
    '“Go to heaven for the climate and hell for the company.” ― Benjamin Franklin',
    '“How wonderful it is that nobody need wait a single moment before starting to improve the world.” ― Anne Frank',

]

let easyQuotes = [

    'life must be understood backward but it must be lived forward',
    'the greater the difficulty the more glory in surmounting it',
    'that man is wisest who like socrates realises that his wisdom is worthless',
    'the function of prayer is not to influence god but rather to change the nature of the one who prays',
    'if you would be a real seeker after truth it is necessary that at least once in your life you doubt as far as possible all things',
    'freedom is secured not by the fulfilling of ones desires but by the removal of desire',
    'the brave man is he who overcomes not only his enemies but his pleasures',
]


// Free Code Camp Lesson
function newQuote() {
    let randomNum = Math.floor(Math.random() * (easyQuotes.length));
    document.getElementById('randomQuote').innerHTML = easyQuotes[randomNum];
}


function handleKeyUp() {
    startTimer();
    spellCheck();
}

let timerRunning = false;
let interval;

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        var startTime = Date.now();

// stack overflow
        var interval = setInterval(function () {
            var elapsedTime = Date.now() - startTime;
            document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
        }, 100);
    }
}

function myStopFunction() {
    clearInterval(interval);
    timerRunning = false;
}
        

function spellCheck() {
   // alert("Spellcheck");
    // get the input from the text area (that the user has typed)
    let userInputText = document.getElementById('userInput').value
    console.log(userInputText);
    // check that input against the current quote, to see if they're equal
    let randomQuoteText = document.getElementById('randomQuote').innerText
    console.log(randomQuoteText);
    // if they're equal, do something (for starters, alert "correct!")
    if (userInputText === randomQuoteText) {
        alert("Correct");
    }

        /*    let userText = JSON.stringify(userInput);
            let randomQuote = JSON.stringify(randomQuote);

            if (userText === displayText) {
                document.getElementById('randomQuote').innerText = newQuote();
                document.getElementById('userInput').value = eraseText();
                alert("Sentences Match");
            };  */
}

function stopAndClearTimer() {
    // TODO implement and use
}






function submitQuote() {
    alert("SUCCESS - Thank You");
}
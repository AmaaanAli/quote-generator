const quoteData = [
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
    },
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
    },
    {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
    },
    {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
    }
];


let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector('.btn');


// picking random array
function getRandomQuotes(quote){
   return Math.floor(Math.random() * quote);
}

// get quote
// function getQuotes(){
//     let randomQuote = getRandomQuotes(quoteData.length);
//     document.getElementById('quote').innerHTML = quoteData[randomQuote].quote;
//     document.getElementById('author').innerHTML = quoteData[randomQuote].author;
//     speech.text = quoteData[randomQuote].quote;
//     window.speechSynthesis.speak(speech);
// }

btn.addEventListener("click", (e) => {
    let randomQuote = getRandomQuotes(quoteData.length);
    document.getElementById('quote').innerHTML = quoteData[randomQuote].quote;
    document.getElementById('author').innerHTML = quoteData[randomQuote].author;
    speech.text = quoteData[randomQuote].quote;
    window.speechSynthesis.speak(speech);
    speech.text = "by" + quoteData[randomQuote].author;
    window.speechSynthesis.speak(speech);
});

let voices = [];
let voiceSelect = document.querySelector('select');

// Selecting Voice
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((item, i) => (voiceSelect.options[i] = new Option(item.name, i)))
};

voiceSelect.addEventListener("change", (e) => {
    speech.voice = voices[voiceSelect.value];
});

// Adding Dark Theme

const darkMode = document.querySelector('#dark');
darkMode.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-theme");
});
// Use an array to hold the value of the quotes
var arrayOfQuotes = [
    {'author': 'Jim Rohn', 
    'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': ' Mahatma Gandhi', 
    'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Epictetus', 
    'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];


// Shuffle indices once and iterate through them without duplicates
let indices = [];
let current = 0;
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function generateQuote() {
    // If all quotes have been shown, reshuffle
    if (current === 0 || current >= indices.length) {
        indices = Array.from(arrayOfQuotes.keys());
        shuffle(indices);
        current = 0;
    }
    const randomIndex = indices[current];
    current++;
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[randomIndex].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[randomIndex].author}`;
}


// Define soundBtn and randomIndex in the correct scope
const soundBtn = document.querySelector('.sound');
let lastRandomIndex = null;

soundBtn.addEventListener('click', () => {
    // Use the last shown quote index
    let indexToSpeak = indices[Math.max(0, current - 1)];
    let utterance = new SpeechSynthesisUtterance(`"${arrayOfQuotes[indexToSpeak].quote}" by ${arrayOfQuotes[indexToSpeak].author}`);
    speechSynthesis.speak(utterance);
});
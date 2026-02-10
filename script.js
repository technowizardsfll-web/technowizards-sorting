// Quiz questions with FLL themes
const questions = [
    {
        question: "What is your favorite part of FLL?",
        answers: [
            { text: "Core Values", house: "hufflepuff" },
            { text: "Innovation Project", house: "gryffindor" },
            { text: "Robot Design", house: "ravenclaw" },
            { text: "Robot Game", house: "slytherin" }
        ]
    },
    {
        question: "What Mission is your favorite?",
        answers: [
            { text: "Silo", house: "gryffindor" },
            { text: "Angler Artifacts", house: "ravenclaw" },
            { text: "Mineshaft Explorer", house: "hufflepuff" },
            { text: "Precious Artifact", house: "slytherin" }
        ]
    },
    {
        question: "In your opinion, what is the best core value?",
        answers: [
            { text: "Innovation", house: "slytherin" },
            { text: "Inclusion", house: "hufflepuff" },
            { text: "Discovery", house: "ravenclaw" },
            { text: "Impact", house: "gryffindor" }
        ]
    },
    {
        question: "Why do you do FLL?",
        answers: [
            { text: "To challenge myself", house: "gryffindor" },
            { text: "To learn more about coding and other topics", house: "ravenclaw" },
            { text: "To be part of a team", house: "hufflepuff" },
            { text: "For bragging rights", house: "slytherin" }
        ]
    },
    {
        question: "What do you do when faced with a problem?",
        answers: [
            { text: "Immediately step up and try to solve it", house: "gryffindor" },
            { text: "Try to help out as much as possible", house: "hufflepuff" },
            { text: "Make a strategic plan", house: "ravenclaw" },
            { text: "Make the smart one do it", house: "slytherin" }
        ]
    }
];

let currentQuestion = 0;
let houseScores = {
    gryffindor: 0,
    ravenclaw: 0,
    hufflepuff: 0,
    slytherin: 0
};

const houseInfo = {
    gryffindor: {
        name: "GRYFFINDOR! 🦁",
        description: "You're bold and courageous in competition! You take risks on the robot table and aren't afraid to try ambitious strategies. Your bravery inspires your team to push boundaries and attempt what others won't."
    },
    ravenclaw: {
        name: "RAVENCLAW! 🦅",
        description: "You're innovative and clever in your approach! You love researching optimal solutions and engineering creative designs. Your intelligence and curiosity drive your team toward ingenious robot mechanisms and thoughtful innovation projects."
    },
    hufflepuff: {
        name: "HUFFLEPUFF! 🦡",
        description: "You're dedicated to teamwork and Core Values! You ensure everyone contributes and support other teams in the spirit of Gracious Professionalism. Your reliability and kindness make you the heart of your FLL team."
    },
    slytherin: {
        name: "SLYTHERIN! 🐍",
        description: "You're strategic and competitive in your play! You calculate point values, optimize efficiency, and focus on winning strategies. Your ambition and resourcefulness drive your team toward championship-level performance."
    }
};

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.house);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(house) {
    houseScores[house]++;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // Find the house with the highest score
    let maxScore = 0;
    let sortedHouse = '';
    
    for (const house in houseScores) {
        if (houseScores[house] > maxScore) {
            maxScore = houseScores[house];
            sortedHouse = house;
        }
    }
    
    // Handle ties by random selection
    const tiedHouses = Object.keys(houseScores).filter(house => houseScores[house] === maxScore);
    if (tiedHouses.length > 1) {
        sortedHouse = tiedHouses[Math.floor(Math.random() * tiedHouses.length)];
    }
    
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    const houseResultDiv = document.getElementById('house-result');
    houseResultDiv.textContent = houseInfo[sortedHouse].name;
    houseResultDiv.className = sortedHouse;
    
    document.getElementById('house-description').textContent = houseInfo[sortedHouse].description;
}

function restartQuiz() {
    currentQuestion = 0;
    houseScores = {
        gryffindor: 0,
        ravenclaw: 0,
        hufflepuff: 0,
        slytherin: 0
    };
    
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    
    loadQuestion();
}

// Start the quiz when page loads
window.onload = function() {
    loadQuestion();
};

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
        question: "A newer team asks for help at the competition. Your robot run is in 30 minutes. What do you do?",
        answers: [
            { text: "Dive right in and help them - supporting others is what makes FLL great!", house: "gryffindor" },
            { text: "Share the technical knowledge that could help them solve their specific issue", house: "ravenclaw" },
            { text: "Help them together as a team - this embodies Core Values perfectly", house: "hufflepuff" },
            { text: "Politely offer quick advice but prioritize your own team's preparation", house: "slytherin" }
        ]
    },
    {
        question: "Your team's robot design works, but another team has a cooler approach. What do you think?",
        answers: [
            { text: "We should try building their way - let's push ourselves to match their ambition!", house: "gryffindor" },
            { text: "Study their innovation and see if we can engineer an even better hybrid solution", house: "ravenclaw" },
            { text: "Our design works because we built it together - that's what matters most", house: "hufflepuff" },
            { text: "If ours scores well, stick with it - don't fix what isn't broken", house: "slytherin" }
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

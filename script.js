// Quiz questions with FLL themes
const questions = [
    {
        question: "Your team's robot keeps failing the same mission. What's your approach?",
        answers: [
            { text: "Try a completely different, bold design - sometimes you need to take big risks!", house: "gryffindor" },
            { text: "Research what successful teams did and engineer an optimal solution", house: "ravenclaw" },
            { text: "Work together to improve it step-by-step, making sure everyone understands", house: "hufflepuff" },
            { text: "Focus on the missions worth the most points - optimize for maximum score", house: "slytherin" }
        ]
    },
    {
        question: "It's competition day and you have 5 minutes before your robot run. What do you do?",
        answers: [
            { text: "Go for that risky mission you've only completed once - fortune favors the bold!", house: "gryffindor" },
            { text: "Review your programmed strategy and mentally simulate the optimal run sequence", house: "ravenclaw" },
            { text: "Gather the team for encouragement and make sure everyone feels confident", house: "hufflepuff" },
            { text: "Calculate exact point values and adjust strategy to guarantee maximum scoring", house: "slytherin" }
        ]
    },
    {
        question: "During the Innovation Project, your team disagrees on which problem to solve. How do you decide?",
        answers: [
            { text: "Choose the most challenging problem that others haven't attempted yet", house: "gryffindor" },
            { text: "Research deeply to find the most innovative and creative solution possible", house: "ravenclaw" },
            { text: "Pick a problem where everyone can contribute and make a real difference", house: "hufflepuff" },
            { text: "Select the problem with the clearest path to winning judges' recognition", house: "slytherin" }
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

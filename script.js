const quizQuestions = [
    {
        id: 1,
        question: "Hvilken enhet måler elektrisk strøm?",
        category: "Elektro",
        options: [
            "Volt",
            "Watt",
            "Ohm",
            "Ampere"
        ],
        correct: 3,
        feedback_correct: "Korrekt! Ampere er enheten som måler elektrisk strøm.",
        feedback_incorrect: "Feil! Ampere er enheten som måler elektrisk strøm."
    },
    {
        id: 2,
        question: "Hvilket vitamin får vi hovedsakelig fra sollys?",
        category: "Helse",
        options: [
            "Vitamin A",
            "Vitamin B",
            "Vitamin C",
            "Vitamin D"
        ],
        correct: 3,
        feedback_correct: "Ja, det er riktig!",
        feedback_incorrect: "Nei, det er ikke riktig."
    },
    {
        id: 3,
        question: "Hvilket system transporterer oksygen i kroppen?",
        category: "Idrettsfag",
        options: [
            "Fordøyelsessystemet",
            "Sirkulasjonssystemet",
            "Nervesystemet",
            "Hormonsystemet"
        ],
        correct: 1,
        feedback_correct: "Riktig! Sirkulasjonssystemet transporterer oksygen i kroppen.",
        feedback_incorrect: "Feil! Sirkulasjonssystemet transporterer oksygen i kroppen."
    },
    {
        id: 4,
        question: "Hva står RGB for i digital design?",
        category: "Medier og kommunikasjon",
        options: [
            "red, green, blue",
            "rapid, graphic, build",
            "render, graphic, base",
            "red, gradient, blend"
        ],
        correct: 0,
        feedback_correct: "Korrekt! RGB står for red, green, blue.",
        feedback_incorrect: "Feil! Plis sjekk hva RGB står for."
    },
    {
        id: 5,
        question: "Hva er retorikk?",
        category: "Påbygging til generell studiekompetanse",
        options: [
            "Læren om overbevisende kommunikasjon",
            "Matematikk",
            "Naturvitenskap",
            "Programmering"
        ],
        correct: 0,
        feedback_correct: "Helt riktig!",
        feedback_incorrect: "Nei, prøv igjen."
    },
    {
        id: 6,
        question: "Hva er CRM i salg?",
        category: "Slag, service og reiseliv",
        options: [
            "Customer Relationship Management",
            "Computer Retail Machine",
            "Customer Retail Method",
            "Commerce Retail Model"
        ],
        correct: 0,
        feedback_correct: "Korrekt!",
        feedback_incorrect: "Ikke helt riktig."
    },
    {
        id: 7,
        question: "Hva brukes en mikrometer til?",
        category: "Teknologi- og industrifag",
        options: [
            "Måle temperatur",
            "Måle svert små lengder nøyaktig",
            "Måle vekt",
            "Måle strøm"
        ],
        correct: 1,
        feedback_correct: "Ja, det er riktig!",
        feedback_incorrect: "Nei, prøv igjen."
    },
    {
        id: 8,
        question: "Hva betyr HTML?",
        category: "Informasjonsteknologi og medieproduksjon",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Transfer Media Link",
            "Home Tool Markup Language"
        ],
        correct: 0,
        feedback_correct: "Riktig! HTML står for HyperText Markup Language.",
        feedback_incorrect: "Feil! HTML står for HyperText Markup Language."
    },
    {
        id: 9,
        question: "Hva er Stortinget?",
        category: "Kombinasjonsklasse",
        options: [
            "Norges regjering",
            "Norges parlament(nasjonalforsamling)",
            "Norges høyesterett",
            "Norges kongehus"
        ],
        correct: 1,
        feedback_correct: "Korrekt!",
        feedback_incorrect: "Feil! Prøv igjen."
    },
    {
        id: 10,
        question: "Hva regnes som mobbing?",
        category: "Demokrati og medborgerskap",
        options: [
            "En enkelt krangel mellom venner",
            "Gjentatt negativ atferd mot en person over tid",
            "Å være uenig med noen",
            "Å gi konstruktiv kritikk"
        ],
        correct: 1,
        feedback_correct: "Ja, Elektrik er et fagfelt på Bleiker!",
        feedback_incorrect: "Nei, sjekk fagfeltene på Bleiker."
    },
    {
        id: 11,
        question: "Hva skjer i videoen?",
        options: [
            "Gul",
            "Sølv",
            "Mork metall",
            "Guldtøy"
        ],
        correct: 0,
        mediaType: "video",
        mediaSrc: "../video/Spørsmål1.mp4",
        feedback_correct: "Riktig!",
        feedback_incorrect: "Feil!"
    },
    {
        id: 12,
        question: "Hva skjer i videoen?",
        options: [
            "Svart",
            "Brun",
            "Ikke denne ivertfall",
            "Hvit"
        ],
        correct: 3,
        mediaType: "video",
        mediaSrc: "../video/Spørsmål2.mp4",
        feedback_correct: "Riktig!",
        feedback_incorrect: "Feil!"
    },
    {
        id: 13,
        question: "Hva skjer i videoen?",
        options: [
            "Grøn fordi det blå lyset reflekteres",
            "Rød fordi det blå lyset reflekteres",
            "Grøn fordi det røde lyset",
            "Grøn fordi det hvitelyset reflekteres"
        ],
        correct: 2,
        mediaType: "video",
        mediaSrc: "../video/Spørsmål3.mp4",
        feedback_correct: "Riktig!",
        feedback_incorrect: "Feil!"
    }
];

let quizState = {
    currentQuestion: 0,
    score: 0,
    answered: false,
    quizStarted: false,
    answers: []
};

const LOCAL_STORAGE_KEY = 'bleiker_quiz_scores';

document.addEventListener('DOMContentLoaded', function() {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', startQuiz);
    }


    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', function() {
            location.reload();
        });
    }
});

function startQuiz() {

    quizState.quizStarted = true;
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.answered = false;
    quizState.answers = [];

    document.getElementById('quiz-start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    displayQuestion();
}

function displayQuestion() {
    if (quizState.currentQuestion >= quizQuestions.length) {
        endQuiz();
        return;
    }

    const question = quizQuestions[quizState.currentQuestion];
    const progressPercent = ((quizState.currentQuestion) / quizQuestions.length) * 100;

    document.getElementById('question-counter').textContent =
        `Spørsmål ${quizState.currentQuestion + 1} av ${quizQuestions.length}`;

    document.getElementById('current-score').textContent = quizState.score;

    document.getElementById('question-text').textContent = question.question;

    const quizMediaDiv = document.getElementById('quiz-media');
    quizMediaDiv.innerHTML = '';

    if (question.mediaType === 'video') {
        const video = document.createElement('video');
        video.src = question.mediaSrc;
        video.controls = true;
        quizMediaDiv.appendChild(video);
    }

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = option;
        button.disabled = quizState.answered;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });

    document.getElementById('next-question-btn').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    quizState.answered = false;
}

function selectAnswer(selectedIndex) {
    if (quizState.answered) return;

    const question = quizQuestions[quizState.currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    const answerBtns = document.querySelectorAll('.answer-btn');
    const feedbackDiv = document.getElementById('feedback');

    quizState.answered = true;


    if (isCorrect) {
        quizState.score += 10;
    }

    feedbackDiv.style.display = 'block';
    feedbackDiv.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
    feedbackDiv.textContent = isCorrect ? question.feedback_correct : question.feedback_incorrect;

    document.getElementById('current-score').textContent = quizState.score;

    document.getElementById('next-question-btn').style.display = 'block';
}

function nextQuestion() {
    quizState.currentQuestion++;
    quizState.answered = false;

    if (quizState.currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    saveScore(quizState.score);

    document.getElementById('quiz-container').style.display = 'none';

    document.getElementById('results-screen').style.display = 'block';

    document.getElementById('final-score').textContent = quizState.score;
    
    displayLeaderboard();
}

function saveScore(score) {
    let scores = getScores();
    
    scores.push({
        score: score,
        date: new Date().toLocaleString('no-NO')
    });

    scores.sort((a, b) => b.score - a.score);

    if (scores.length > 100) {
        scores = scores.slice(0, 100);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(scores));
}

function getScores() {
    const scoresJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    return scoresJson ? JSON.parse(scoresJson) : [];
}

const nextBtn = document.getElementById('next-question-btn');
if (nextBtn) {
}


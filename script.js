// DAY 1
const questions = [
    {
        question: "What is the full name of the series' protagonist?",
        answers: [
            "Harry Potter",
            "Ronald Weasley",
            "Hermione Granger",
        ],
        correct: 0,
    },
    {
        question: "Which Hogwarts house values courage, bravery, and determination?",
        answers: [
            "Slytherin",
            "Gryffindor",
            "Ravenclaw",
        ],
        correct: 1,
    },
    {
        question: "Who is the headmaster of Hogwarts School of Witchcraft and Wizardry in the first book/film of the series?",
        answers: [
            "Severus Snape",
            "Minerva McGonagall",
            "Albus Dumbledore",
        ],
        correct: 2,
    },
    {
        question: "What is the main pet of Harry Potter?",
        answers: [
            "Owl",
            "Cat",
            "Toad",
        ],
        correct: 0,
    },
    {
        question: "What spell is used to conjure a person's Patronus?",
        answers: [
            "Avada Kedavra",
            "Expecto Patronum",
            "Wingardium Leviosa",
        ],
        correct: 1,
    },
    {
        question: "What is the profession of Hermione Granger's parents?",
        answers: [
            "Doctors",
            "Dentists",
            "Lawyers",
        ],
        correct: 2,
    },
    {
        question: "What is the name of the dark wizard who killed Harry Potter's parents?",
        answers: [
            "Lord Voldemort",
            "Bellatrix Lestrange",
            "Severus Snape",
        ],
        correct: 0,
    },
    {
        question: "What is the name of the famous Quidditch player who played as a Seeker on the Bulgarian team?",
        answers: [
            "Cedric Diggory",
            "Viktor Krum",
            "Oliver Wood",
        ],
        correct: 1,
    },
    {
        question: "What is the Marauder's Map?",
        answers: [
            "A map of constellations",
            "A map of treasures buried at Hogwarts",
            "A magical map that shows the location of people and rooms at Hogwarts",
        ],
        correct: 2,
    },
    {
        question: "What is the surname of the wizarding family that has a snake as their symbol?",
        answers: [
            "Black",
            "Malfoy",
            "Lestrange",
        ],
        correct: 1,
    },
];

const template = document.querySelector('template')
const quiz = document.getElementById('quiz')

// DAY 2
const corrects = new Set()
const totalQuestions = questions.length
const showTotal = document.querySelector('#hits span')
showTotal.textContent = (corrects.size + ' of ' + totalQuestions)

// DAY 1
// ---------- LOOP PARA SUBSTITUIR A PERGUNTA --------------
for (const item of questions) {

// --------- CLONANDO OS NÓS DENTRO DO TEMPLATE NO HTML ----------------
    const quizItems = template.content.cloneNode(true);

// --------- SUBSTITUINDO O CONTEUDO DO H2 PELA PERGUNTA DO ARRAY QUESTION
    quizItems.querySelector('h2').textContent = item.question;

// ---------- LOOP PARA SUBSTITUIR TODAS AS 3 ALTERNATIVAS ------------------
    for (let answers of item.answers) {

// ----------- CLONANDO OS NÓS DA TAG DT NO HTML -----------------
        const dt = quizItems.querySelector('dl dt').cloneNode(true);

// ----------- SUBSTITUINDO O CONTEUDO DO SPAN PELAS ALTERNATIVAS DO ARRAY ASWERS ----------------------         
        dt.querySelector('span').textContent = answers;

// DAY 2        
        dt.querySelector('input').setAttribute('name', 'Question-' + questions.indexOf(item));
        dt.querySelector('input').value = item.answers.indexOf(answers);
        dt.querySelector('input').onchange = (event) => {
            
            const isCorrect = event.target.value == item.correct

            corrects.delete(item)

            if (isCorrect) {
                corrects.add(item)
            }

            showTotal.textContent = (corrects.size + ' of ' + totalQuestions)
        }


//DAY 1
// ----------- COLOCA AS ALTERNATIVAS NA TELA ------------
        quizItems.querySelector('dl').appendChild(dt)
    }

// ----------- REMOVE DO HTML "Resposta A" -------------
    quizItems.querySelector('dl dt').remove()

// ----------- COLOCA A PERGUNTA NA TELA ---------------
    quiz.appendChild(quizItems)
}
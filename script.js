const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function startGame(){
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
incorrectAnswers = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer=> {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild 
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
 })
 if(shuffledQuestions.length > currentQuestionIndex + 1){
 nextButton.classList.remove('hide')
 } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')

 }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
    question: 'What is Peace last name?',
    answers: [
        {text: 'Lawrence', correct: false},
        { text: 'Enweriku', correct: true},
        { text: 'Isicheri', correct: false},
         { text: 'Chidi', correct: false}
    ]
    },
   
    {
     question: 'What does Peace major in?',
     answers: [
         {text: 'IT', correct: false},
         { text: 'IS', correct: false},
         { text: 'Computer Science', correct: true},
         { text: 'Mathematics', correct: false}
     ]
     },

     {
     question: 'How old is Peace?',
     answers: [
         {text: '20', correct: false},
         { text: '22', correct: false},
         { text: '19', correct: true},
         { text: '21', correct: false}
     ]
     },

     {
     question: 'what the name and model of Peace car?',
     answers: [
          {text: 'Honda Accord', correct: true},
          { text: 'Toyota Camry', correct: false},
          { text: 'Honda Civic', correct: false},
         { text: 'Tesla Model S', correct: false}
     ]
     },

     {
     question: 'How many Siblings does Peace have?',
     answers: [
           {text: '4', correct: false},
           { text: '0', correct: false},
           { text: '1', correct: false},
         { text: '2', correct: true}
     ]
     }
]
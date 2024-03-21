const questions = [
    {
        'que': "Which of the following is markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'd': "Hindi",
        'correct': "a"

    },
    {
        'que': "In which year the JavaScript was launched?",
        'a': "1955",
        'b': "1995",
        'c': "2000",
        'd': "2024",
        'correct': "b"

    },
    {
        'que': "What does CSS stands for?",
        'a': "Hyper Text Markup Language",
        'b': "Cascading Style Sheets",
        'c': "Html",
        'd': "None of the Above",
        'correct': "b"

    }
];

const total = questions.length
let wrong = 0;
let right = 0;
let index = 0;
const quebox = document.getElementById('qbox');
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index===total){
      return  endQuiz()
    }
    reset();
    const data = questions[index]
    quebox.innerHTML = `${index + 1})${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

}


function submit() {
    const data = questions[index]
    const ans = getanswer()
    if(ans === data.correct ){
        right++
    }else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

const getanswer = () => {
    let answer
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        });
        return answer;
}

const reset =()=>{
    optionInput.forEach(
        (input) => {
           input.checked = false;
        })
}

const endQuiz = ()=>{
    document.getElementById('box').innerHTML = 
    `<div style = text-align:center; >
    <h2> Thank You For Participating in the Quiz </h2>
    <h3>${right}/${total} are correct</h3>
    </div>`
  
}

loadQuestion()
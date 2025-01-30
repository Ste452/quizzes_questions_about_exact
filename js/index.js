let questions = {
    algebra: {
        explanation: "A Álgebra estuda operações matemáticas com símbolos e expressões.",
        question: "Se x² - 4 = 0, quais os valores de x?",
        options: ["±2", "0 e 4", "1 e -1"],
        answer: "±2",
        tip: ""
    },
    geometria: {
        explanation: "A Geometria estuda as propriedades e medidas de figuras e sólidos.",
        question: "Qual a soma dos ângulos internos de um hexágono?",
        options: ["720°", "540°", "360°"],
        answer: "720°",
        tip: ""
    },
    algebra2: {
        explanation: "",
        question: "",
        options: "",
        answer: "",
        tip: "" 
    },
    trigonometria: {
        explanation: "A Trigonometria analisa relações entre lados e ângulos em triângulos.",
        question: "Qual o valor do cosseno de 60°?",
        options: ["1/2", "√3/2", "1"],
        answer: "1/2",
        tip: ""
    },
    combinatoria: {
        explanation: "A Combinatória trata da contagem e organização de elementos em grupos.",
        question: "Quantos anagramas tem a palavra 'MATH'?",
        options: ["24", "12", "6"],
        answer: "24",
        tip: ""
    },
    matrizes: {
        explanation: "As matrizes são arranjos numéricos organizados em linhas e colunas.",
        question: "Qual o determinante da matriz [[2,3],[1,4]]?",
        options: ["5", "7", "8"],
        answer: "5",
        tip: ""
    },
    estatistica: {
        explanation: "A Estatística analisa e interpreta dados numéricos.",
        question: "Qual a média dos números 4, 8 e 10?",
        options: ["6", "7.111...", "7.333...", "8"],
        answer: "7.333...",
        tip: ""
    },
    calculo: {
        explanation: "O Cálculo estuda taxas de variação e acumulação de quantidades.",
        question: "Qual a derivada de f(x) = x²?",
        options: ["2x", "x²", "x"],
        answer: "2x",
        tip: ""
    }
};

let correctAnswers = 0;
let totalQuestions = 0;
let chart;

function loadTopic(topic) {
    document.getElementById("topic-title").innerText = topic.charAt(0).toUpperCase() + topic.slice(1);
    document.getElementById("explanation").innerText = questions[topic].explanation;

    let questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `<p>${questions[topic].question}</p>`;
    
    questions[topic].options.forEach(option => {
        questionContainer.innerHTML += `<input type="radio" name="answer" value="${option}"> ${option} <br>`;
    });

    questionContainer.dataset.correctAnswer = questions[topic].answer;
}

function checkAnswer() {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Selecione uma resposta!");
        return;
    }

    totalQuestions++;
    if (selectedAnswer.value === document.getElementById("question-container").dataset.correctAnswer) {
        correctAnswers++;
    }
    
    updateChart();
}

function updateChart() {
    let ctx = document.getElementById("progressChart").getContext("2d");

    if (!chart) {
        chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Corrects", "Wrongs"],
                datasets: [{
                    label: "Answers",
                    data: [correctAnswers, totalQuestions - correctAnswers],
                    backgroundColor: ["green", "red"]
                }]
            }
        });
    } else {
        chart.data.datasets[0].data = [correctAnswers, totalQuestions - correctAnswers];
        chart.update();
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // Original site language
      includedLanguages: 'en,pt,es,fr,de', // Allow languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
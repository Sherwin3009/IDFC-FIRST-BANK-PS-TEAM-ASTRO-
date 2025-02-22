const quiz = [
    {
        question: "What is a common red flag of a job scam?",
        ans1text: "A legitimate job offer",
        ans2text: "A request for upfront fees",
        ans3text: "A detailed job description",
        ans4text: "A known company name",
        answer: "A request for upfront fees",
    },
    {
        question: "What should you do if you receive a job offer that seems too good to be true?",
        ans1text: "Accept the offer immediately",
        ans2text: "Verify the company's legitimacy",
        ans3text: "Share your personal information",
        ans4text: "Ignore the offer",
        answer: "Verify the company's legitimacy",
    },
    {
        question: "What is a common tactic used by job scammers?",
        ans1text: "Offering high salaries with no experience required",
        ans2text: "Providing detailed job descriptions",
        ans3text: "Conducting multiple interview rounds",
        ans4text: "Offering remote work opportunities",
        answer: "Offering high salaries with no experience required",
    },
    {
        question: "What should you do if a job offer asks for your bank details upfront?",
        ans1text: "Provide the details",
        ans2text: "Ignore the request",
        ans3text: "Report it to the authorities",
        ans4text: "Share it with friends",
        answer: "Report it to the authorities",
    },
    {
        question: "What is a common sign of a fake job interview?",
        ans1text: "A professional email address",
        ans2text: "A request for payment to schedule the interview",
        ans3text: "A detailed job description",
        ans4text: "A known company name",
        answer: "A request for payment to schedule the interview",
    },
    {
        question: "What should you do if you suspect a job offer is a scam?",
        ans1text: "Accept the offer",
        ans2text: "Report it to the authorities",
        ans3text: "Share your personal information",
        ans4text: "Ignore the offer",
        answer: "Report it to the authorities",
    },
    {
        question: "What is a common tactic used by job scammers to gain trust?",
        ans1text: "Offering free training",
        ans2text: "Providing fake company websites",
        ans3text: "Conducting multiple interview rounds",
        ans4text: "Offering remote work opportunities",
        answer: "Providing fake company websites",
    },
    {
        question: "What should you do if a job offer asks for your personal information upfront?",
        ans1text: "Provide the information",
        ans2text: "Ignore the request",
        ans3text: "Report it to the authorities",
        ans4text: "Share it with friends",
        answer: "Report it to the authorities",
    },
    {
        question: "What is a common red flag of a fake job posting?",
        ans1text: "A legitimate job offer",
        ans2text: "A request for upfront fees",
        ans3text: "A detailed job description",
        ans4text: "A known company name",
        answer: "A request for upfront fees",
    },
    {
        question: "What is the best way to protect yourself from job scams?",
        ans1text: "Share your personal information",
        ans2text: "Verify the company's legitimacy",
        ans3text: "Accept all job offers",
        ans4text: "Ignore all job offers",
        answer: "Verify the company's legitimacy",
    }
];

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElements = document.querySelectorAll(".answer");

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

// Load the first question
loadQuestion();

// Function to load the current question
function loadQuestion() {
    question.textContent = quiz[currentQuestion].question;
    option_a.textContent = quiz[currentQuestion].ans1text;
    option_b.textContent = quiz[currentQuestion].ans2text;
    option_c.textContent = quiz[currentQuestion].ans3text;
    option_d.textContent = quiz[currentQuestion].ans4text;

    // Uncheck all radio buttons
    answerElements.forEach((element) => {
        element.checked = false;
    });
}

// Event listener for the submit button
submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if (checkedAns === null) {
        alert("Please select an answer");
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quiz.length) {
            // Load the next question
            loadQuestion();
        } else {
            // Show the custom alert box after all questions are answered
            showScoreAlert();
        }
    }
});

// Function to display the custom alert box
function showScoreAlert() {
    // Create the custom alert box dynamically
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";

    // Check if the user scored 10 out of 10
    if (score === quiz.length) {
        alertBox.innerHTML = `
            <p>Congratulations! You scored ${score} out of ${quiz.length}!</p>
            <div class="alert-buttons single-button">
                <button id="close-button">Close</button>
            </div>
        `;
    } else {
        alertBox.innerHTML = `
            <p>Your score is ${score} out of ${quiz.length}</p>
            <div class="alert-buttons">
                <button id="retry-button">Retry</button>
                <button id="close-button">Close</button>
            </div>
        `;
    }

    document.body.appendChild(alertBox);

    // Retry button functionality (only if score is not perfect)
    if (score !== quiz.length) {
        document.getElementById("retry-button").addEventListener("click", () => {
            currentQuestion = 0;
            score = 0;
            loadQuestion();
            document.body.removeChild(alertBox); // Remove the alert box
        });
    }

    // Close button functionality
    document.getElementById("close-button").addEventListener("click", () => {
        window.location.href = "quiz-level1.html"; // Redirect to the quiz selection page
    });
}
const quiz = [
    {
        question: "What is the primary goal of a tech support scam?",
        ans1text: "To sell products",
        ans2text: "To steal sensitive information",
        ans3text: "To provide tech support",
        ans4text: "To promote a website",
        answer: "To steal sensitive information",
    },
    {
        question: "What is a common tactic used by tech support scammers?",
        ans1text: "Sending fake emails",
        ans2text: "Making phone calls",
        ans3text: "Offering free gifts",
        ans4text: "Hosting webinars",
        answer: "Making phone calls",
    },
    {
        question: "What should you do if you receive a call from someone claiming to be from tech support?",
        ans1text: "Provide your personal information",
        ans2text: "Hang up and verify the caller's identity",
        ans3text: "Allow remote access to your device",
        ans4text: "Share the call details with friends",
        answer: "Hang up and verify the caller's identity",
    },
    {
        question: "What is a common red flag of a tech support scam?",
        ans1text: "A legitimate tech support request",
        ans2text: "A request for remote access to your device",
        ans3text: "A detailed explanation of the issue",
        ans4text: "A known company name",
        answer: "A request for remote access to your device",
    },
    {
        question: "What should you do if you accidentally allow remote access to a scammer?",
        ans1text: "Ignore it",
        ans2text: "Disconnect your device from the internet and report it",
        ans3text: "Share the details with friends",
        ans4text: "Continue using the device as normal",
        answer: "Disconnect your device from the internet and report it",
    },
    {
        question: "What is a common sign of a fake tech support website?",
        ans1text: "A legitimate-looking email address",
        ans2text: "A misspelled or suspicious URL",
        ans3text: "A request from a known contact",
        ans4text: "A payment request with no links",
        answer: "A misspelled or suspicious URL",
    },
    {
        question: "What should you do if you receive a pop-up message claiming your device is infected?",
        ans1text: "Click on the link in the message",
        ans2text: "Ignore the message",
        ans3text: "Call the number provided in the message",
        ans4text: "Share the message on social media",
        answer: "Ignore the message",
    },
    {
        question: "What is a common tactic used by tech support scammers to gain trust?",
        ans1text: "Offering free software",
        ans2text: "Providing fake company websites",
        ans3text: "Conducting multiple interview rounds",
        ans4text: "Offering remote work opportunities",
        answer: "Providing fake company websites",
    },
    {
        question: "What should you do if a tech support scammer asks for your personal information?",
        ans1text: "Provide the information",
        ans2text: "Ignore the request",
        ans3text: "Report it to the authorities",
        ans4text: "Share it with friends",
        answer: "Report it to the authorities",
    },
    {
        question: "What is the best way to protect yourself from tech support scams?",
        ans1text: "Share your personal information",
        ans2text: "Verify the caller's identity",
        ans3text: "Accept all tech support offers",
        ans4text: "Ignore all tech support offers",
        answer: "Verify the caller's identity",
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
        window.location.href = "quiz-level4.html"; // Redirect to the quiz selection page
    });
}
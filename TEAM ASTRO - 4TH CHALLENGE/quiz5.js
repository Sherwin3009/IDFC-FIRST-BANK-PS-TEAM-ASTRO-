const quiz = [
    {
        question: "What is the primary goal of a government impersonation scam?",
        ans1text: "To promote government welfare programs",
        ans2text: "To steal personal data or money",
        ans3text: "To provide free government services",
        ans4text: "To distribute free gifts to citizens",
        answer: "To steal personal data or money",
    },
    {
        question: "What is a common tactic used by government impersonation scammers?",
        ans1text: "Organizing public events",
        ans2text: "Calling and pretending to be from a government agency",
        ans3text: "Sending official-looking emails",
        ans4text: "Offering free training sessions",
        answer: "Calling and pretending to be from a government agency",
    },
    {
        question: "What should you do if you receive a call from someone claiming to be from the Income Tax department?",
        ans1text: "Allow them to access your computer remotely",
        ans2text: "End the call and verify their identity through official channels",
        ans3text: "Share your bank account details",
        ans4text: "Forward the call to your friends",
        answer: "End the call and verify their identity through official channels",
    },
    {
        question: "What is a common red flag of a government impersonation scam?",
        ans1text: "A detailed explanation of government policies",
        ans2text: "A demand for immediate payment or personal details",
        ans3text: "A legitimate request for information",
        ans4text: "A known government agency's official logo",
        answer: "A demand for immediate payment or personal details",
    },
    {
        question: "What should you do if you accidentally provide personal information to a scammer?",
        ans1text: "Discuss it with your friends",
        ans2text: "Report it to the authorities and monitor your accounts closely",
        ans3text: "Ignore the incident",
        ans4text: "Continue using your accounts as usual",
        answer: "Report it to the authorities and monitor your accounts closely",
    },
    {
        question: "What is a common sign of a fake government website?",
        ans1text: "A secure HTTPS connection",
        ans2text: "A URL with spelling errors or odd characters",
        ans3text: "A professional-looking email address",
        ans4text: "A request to download official documents",
        answer: "A URL with spelling errors or odd characters",
    },
    {
        question: "What should you do if you receive a message claiming your Aadhaar card is blocked?",
        ans1text: "Call the number provided in the message",
        ans2text: "Disregard the message and check the official UIDAI website",
        ans3text: "Click on the link in the message",
        ans4text: "Share the message on social media for awareness",
        answer: "Disregard the message and check the official UIDAI website",
    },
    {
        question: "What is a common tactic used by government impersonation scammers to gain trust?",
        ans1text: "Conducting free health camps",
        ans2text: "Creating fake government websites",
        ans3text: "Offering free software downloads",
        ans4text: "Providing remote job opportunities",
        answer: "Creating fake government websites",
    },
    {
        question: "What should you do if a scammer claims to be from the GST department and asks for payment?",
        ans1text: "Provide your bank details immediately",
        ans2text: "Ignore the request and report it to the authorities",
        ans3text: "Make the payment to avoid legal trouble",
        ans4text: "Forward the message to your family",
        answer: "Ignore the request and report it to the authorities",
    },
    {
        question: "What is the best way to protect yourself from government impersonation scams?",
        ans1text: "Accept all government-related communications",
        ans2text: "Verify the caller's identity through official sources",
        ans3text: "Share your personal information freely",
        ans4text: "Ignore all government-related messages",
        answer: "Verify the caller's identity through official sources",
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

// Function to shuffle answer options
function shuffleAnswers(question) {
    const answers = [
        { text: question.ans1text, value: question.ans1text },
        { text: question.ans2text, value: question.ans2text },
        { text: question.ans3text, value: question.ans3text },
        { text: question.ans4text, value: question.ans4text },
    ];

    // Shuffle the answers array
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    return answers;
}

// Load the first question
loadQuestion();

// Function to load the current question
function loadQuestion() {
    const currentQuiz = quiz[currentQuestion];
    const shuffledAnswers = shuffleAnswers(currentQuiz);

    question.textContent = currentQuiz.question;
    option_a.textContent = shuffledAnswers[0].text;
    option_b.textContent = shuffledAnswers[1].text;
    option_c.textContent = shuffledAnswers[2].text;
    option_d.textContent = shuffledAnswers[3].text;

    // Update the correct answer based on shuffled options
    quiz[currentQuestion].answer = currentQuiz.answer;

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
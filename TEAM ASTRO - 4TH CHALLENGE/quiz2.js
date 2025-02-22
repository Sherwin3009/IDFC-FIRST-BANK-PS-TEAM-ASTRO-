const quiz = [
    {
        question: "What is the most common type of UPI fraud?",
        ans1text: "Fake payment requests",
        ans2text: "Fake QR codes",
        ans3text: "Fake UPI IDs",
        ans4text: "All of the above",
        answer: "All of the above",
    },
    {
        question: "What should you do if you receive a payment request from an unknown number?",
        ans1text: "Accept the request",
        ans2text: "Ignore the request",
        ans3text: "Verify the sender's identity",
        ans4text: "Forward it to friends",
        answer: "Verify the sender's identity",
    },
    {
        question: "What is a common red flag of a UPI fraud?",
        ans1text: "A legitimate payment request",
        ans2text: "A request from a known contact",
        ans3text: "A request with a sense of urgency",
        ans4text: "A request with no links",
        answer: "A request with a sense of urgency",
    },
    {
        question: "What should you do if you accidentally scan a fake QR code?",
        ans1text: "Ignore it",
        ans2text: "Report it to your bank immediately",
        ans3text: "Share it with friends",
        ans4text: "Scan it again",
        answer: "Report it to your bank immediately",
    },
    {
        question: "What is the purpose of a UPI PIN?",
        ans1text: "To unlock your phone",
        ans2text: "To authorize transactions",
        ans3text: "To log in to your UPI app",
        ans4text: "To reset your password",
        answer: "To authorize transactions",
    },
    {
        question: "What should you do if you receive a fake UPI payment notification?",
        ans1text: "Click on the link in the notification",
        ans2text: "Ignore the notification",
        ans3text: "Report it to your bank",
        ans4text: "Share it on social media",
        answer: "Report it to your bank",
    },
    {
        question: "What is a common tactic used by UPI fraudsters?",
        ans1text: "Offering free gifts",
        ans2text: "Sending fake payment links",
        ans3text: "Providing tech support",
        ans4text: "Hosting webinars",
        answer: "Sending fake payment links",
    },
    {
        question: "What should you do if you suspect a UPI transaction is fraudulent?",
        ans1text: "Do nothing",
        ans2text: "Contact your bank immediately",
        ans3text: "Share the details on social media",
        ans4text: "Wait for the fraudster to contact you",
        answer: "Contact your bank immediately",
    },
    {
        question: "What is the best way to protect yourself from UPI fraud?",
        ans1text: "Share your UPI PIN with friends",
        ans2text: "Use strong passwords and enable two-factor authentication",
        ans3text: "Click on all payment links",
        ans4text: "Use the same UPI PIN for all accounts",
        answer: "Use strong passwords and enable two-factor authentication",
    },
    {
        question: "What is a common sign of a fake UPI ID?",
        ans1text: "A legitimate-looking email address",
        ans2text: "A misspelled or suspicious UPI ID",
        ans3text: "A request from a known contact",
        ans4text: "A payment request with no links",
        answer: "A misspelled or suspicious UPI ID",
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
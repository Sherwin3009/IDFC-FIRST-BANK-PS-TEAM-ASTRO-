const quiz = [
    {
        question: "What is the primary goal of a phishing scam?",
        ans1text: "To sell products",
        ans2text: "To steal sensitive information",
        ans3text: "To promote a website",
        ans4text: "To provide tech support",
        answer: "To steal sensitive information",
    },
    {
        question: "Which of the following is a common method used in phishing scams?",
        ans1text: "Sending fake emails",
        ans2text: "Making phone calls",
        ans3text: "Offering free gifts",
        ans4text: "Hosting webinars",
        answer: "Sending fake emails",
    },
    {
        question: "What should you do if you receive a suspicious email asking for personal information?",
        ans1text: "Reply with the requested information",
        ans2text: "Ignore the email",
        ans3text: "Verify the sender's identity",
        ans4text: "Forward it to your friends",
        answer: "Verify the sender's identity",
    },
    {
        question: "Which of the following is a red flag of a phishing email?",
        ans1text: "Proper grammar and spelling",
        ans2text: "A generic greeting like 'Dear Customer'",
        ans3text: "A legitimate sender email address",
        ans4text: "No links or attachments",
        answer: "A generic greeting like 'Dear Customer'",
    },
    {
        question: "What is the best way to protect yourself from phishing scams?",
        ans1text: "Share your passwords with friends",
        ans2text: "Click on links in suspicious emails",
        ans3text: "Use strong, unique passwords and enable two-factor authentication",
        ans4text: "Use the same password for all accounts",
        answer: "Use strong, unique passwords and enable two-factor authentication",
    },
    {
        question: "What is a common tactic used by phishing emails to trick victims?",
        ans1text: "Offering free vacations",
        ans2text: "Threatening account suspension",
        ans3text: "Providing tech support",
        ans4text: "Sharing funny memes",
        answer: "Threatening account suspension",
    },
    {
        question: "Which of the following is an example of a phishing attack?",
        ans1text: "A legitimate email from your bank",
        ans2text: "A fake email pretending to be from your bank",
        ans3text: "A promotional email from a trusted retailer",
        ans4text: "A newsletter from a known organization",
        answer: "A fake email pretending to be from your bank",
    },
    {
        question: "What should you do if you accidentally click on a link in a phishing email?",
        ans1text: "Ignore it and do nothing",
        ans2text: "Change your passwords immediately",
        ans3text: "Share the link with friends",
        ans4text: "Reply to the email",
        answer: "Change your passwords immediately",
    },
    {
        question: "Which of the following is NOT a sign of a phishing email?",
        ans1text: "Poor grammar and spelling",
        ans2text: "A sense of urgency",
        ans3text: "A legitimate sender email address",
        ans4text: "Requests for personal information",
        answer: "A legitimate sender email address",
    },
    {
        question: "What is the purpose of two-factor authentication (2FA) in preventing phishing attacks?",
        ans1text: "It makes your password stronger",
        ans2text: "It adds an extra layer of security",
        ans3text: "It hides your email address",
        ans4text: "It blocks all phishing emails",
        answer: "It adds an extra layer of security",
    }
];

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

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
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        } else {
            showScoreAlert();
        }
    }
});

function showScoreAlert() {
    // Create a custom alert box
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";

    // Check if the user scored 10 out of 10
    if (score === quiz.length) {
        alertBox.innerHTML = `
            <p>Congratulations! You scored ${score} out of ${quiz.length}!</p>
            <div class="alert-buttons">
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
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            document.body.removeChild(alertBox);
        });
    }

    // Close button functionality
    document.getElementById("close-button").addEventListener("click", () => {
        window.location.href = "quiz-level1.html"; // Navigate back to the quiz section
    });
}
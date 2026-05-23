function showOutput(message) {

    document.getElementById("outputCard").style.display = "block";

    document.getElementById("output").innerText = message;
}

/* SUMMARY */

function generateSummary() {

    showOutput(
        "📄 AI-generated summary will appear here..."
    );
}

/* QUIZ */

function generateQuiz() {

    showOutput(
        "❓ AI-generated quiz will appear here..."
    );
}

/* AI CHATBOT */

function askAI() {

    const question =
        document.getElementById("question").value;

    if (question.trim() === "") {

        alert("Please enter a question.");

        return;
    }

    showOutput(
        "🤖 AI Response for: " + question
    );
}

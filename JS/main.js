document.getElementById('openButton').addEventListener('click', function() {
    fetchCatFact();
    fetchCatImage();
});

function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').innerText = data.fact;
            document.getElementById('fact').style.display = 'block';
        });
}
function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById('catImage');
            catImage.src = data[0].url;
            catImage.style.display = 'block';
        })
}





document.addEventListener("DOMContentLoaded", function() {
    const askButton = document.getElementById("askCatButton");
    const inputField = document.getElementById("catQuestion");
    const chatBox = document.getElementById("catChatBox");

    const catReplies = [
        "Izdzer pienu un padomā vēlreiz.",
        "Vai tas tiešām tik svarīgi?",
        "Pajautā vēlāk, es guļu.",
        "Hmm... es par to padomāšu.",
        "Ej paspēlēties ar peli, un atgriezies vēlāk.",
        "Atbilde ir slēpta aiz dīvāna.",
        "Es šobrīd skatos pa logu, negribu domāt.",
        "Varbūt. Varbūt nē. Kurš to lai zina?",
        "Apēd kaut ko garšīgu un pajautā vēlreiz.",
        "Nezinu, bet kāpēc tu pats to nezini?",
        "Ak, cilvēki... vienmēr jautājumi!",
        "Mans iekšējais kaķis saka: jā. Bet varbūt arī nē.",
        "Pajautā man rīt, šodien es neesmu noskaņots.",
        "Tu tiešām domā, ka es zinu?",
        "Miega laiks! Viss pārējais var pagaidīt.",
        "Es zinu atbildi, bet neteikšu!",
        "Varbūt tev vajag vairāk kaķu savā dzīvē?",
        "Mans bļodiņā nav ēdiena, tāpēc nevaru domāt!"
    ];

    askButton.addEventListener("click", function() {
        const question = inputField.value.trim();
        if (question) {
            addMessage("Jūs:", question, "user-message");
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * catReplies.length);
                addMessage("Kaķis:", catReplies[randomIndex], "cat-message");
            }, 1000);
            inputField.value = "";
        }
    });

    function addMessage(sender, text, className) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", className);
        messageDiv.innerHTML = `<strong>${sender}</strong> ${text}`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});



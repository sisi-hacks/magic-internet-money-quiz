// Toggle pages
function showQuiz() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
  }
  
  // Quiz data
  const quizQuestions = [
    {
      question: "What year was the 'MAGIC INTERNET MONEY' meme created?",
      options: ["2010", "2013", "2015", "2018"],
      correctAnswer: "2013"
    },
    {
      question: "Who originally submitted the 'MAGIC INTERNET MONEY' meme?",
      options: ["u/satoshi", "u/mavensbot", "u/bitcoiner", "u/cryptoenthusiast"],
      correctAnswer: "u/mavensbot"
    },
    {
      question: "What does the upcoming @MagicNetMoney 10k collection represent?",
      options: [
        "An Ordinal collection",
        "A tribute to retro internet culture",
        "A membership pass",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      question: "Which cryptocurrency is often humorously referred to as 'Magic Internet Money'?",
      options: ["Bitcoin", "Ethereum", "Dogecoin", "solana"],
      correctAnswer: "Bitcoin"
    },
    {
      question: "The phrase 'MAGIC INTERNET MONEY' was originally intended to:",
      options: ["Mock Bitcoin", "Promote Bitcoin", "Explain Bitcoin", "None of the above"],
      correctAnswer: "Promote Bitcoin"
    },
    {
      question: "In what subreddit did the 'MAGIC INTERNET MONEY' meme first appear?",
      options: ["r/CryptoCurrency", "r/Bitcoin", "r/Technology", "r/Funny"],
      correctAnswer: "r/Bitcoin"
    },
    {
      question: "Which of the following best describes the community behind @MagicNetMoney?",
      options: ["A group of retards", "crypto enthusiast network", "A meme loving community", "A mix of all the above"],
      correctAnswer: "A mix of all the above"
    },
    {
      question: "How many pieces will the @MagicNetMoney collection consist of?",
      options: ["5k", "10k", "15k", "20k"],
      correctAnswer: "10k"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Start quiz
  document.getElementById("startQuiz").addEventListener("click", () => {
    showQuestion();
  });
  
  // Show question
  function showQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
      showResult();
      return;
    }
  
    const { question, options } = quizQuestions[currentQuestionIndex];
    document.getElementById("quizArea").innerHTML = `
      <p>${question}</p>
      ${options
        .map(
          (option, index) =>
            `<label><input type="radio" name="answer" value="${option}" /> ${option}</label><br/>`
        )
        .join("")}
      <button onclick="checkAnswer()">Submit</button>
    `;
  }
  
  // Check answer
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }
  
    const userAnswer = selectedOption.value;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
  
    // Clear previous feedback
    document.getElementById("quizArea").innerHTML = "";
  
    if (userAnswer === correctAnswer) {
      score++;
      document.getElementById("quizArea").innerHTML += `<p class="wizard-feedback correct-wizard">🧙‍♂️ Correct! 🎉</p>`;
    } else {
      document.getElementById("quizArea").innerHTML += `<p class="wizard-feedback incorrect-wizard">🧙‍♂️ Wrong! The correct answer was: ${correctAnswer}</p>`;
    }
  
    // Wait 2 seconds before showing next question
    setTimeout(() => {
      currentQuestionIndex++;
      showQuestion();
    }, 2000);
  }
  
  // Show result
  function showResult() {
    const totalQuestions = quizQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
  
    document.getElementById("quizArea").style.display = "none";
    document.getElementById("result").innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>You are ${percentage}% cultured.</p>
      <p>Thank you for participating! Join the @MagicNetMoney movement today!</p>
  
      <!-- Discord -->
      <div class="result-item">
        <p>Join the Asylum</p>
        <a href="https://discord.gg/n3JZegBr" target="_blank"><img src="assets/discord-icon.png" alt="Discord Icon" class="icon"></a>
      </div>
  
      <!-- X (Twitter) -->
      <div class="result-item">
        <p>Stay updated with Bitcoin Wizard on X</p>
        <a href="https://x.com/bitcoinwizardry" target="_blank"><img src="assets/x-icon.png" alt="X Icon" class="icon"></a>
      </div>
  
      <!-- Follow me on X -->
      <div class="result-item">
        <p>See more cool stuff, read research articles and learn about web3 security</p>
        <a href="https://x.com/A_bashira" target="_blank"><img src="assets/x-icon.png" alt="X Icon" class="icon"></a>
      </div>
  
      <!-- Share Score -->
      <div class="result-item">
        <p>Share your score with others on X</p>
        <a href="https://twitter.com/intent/tweet?text=I%20got%20${percentage}%25%20on%20the%20Magic%20Internet%20Money%20Quiz!%20Take%20the%20quiz%20here:%20https://your-quiz-link.com%20and%20see%20how%20cultured%20you%20are!%20%40bitcoinwizardry" target="_blank">
          <img src="assets/x-icon.png" alt="X Icon" class="icon">
        </a>
      </div>
  
      <!-- Cute Wizard -->
      <div class="cute-wizard">🧙‍♂️</div>
    `;
  }
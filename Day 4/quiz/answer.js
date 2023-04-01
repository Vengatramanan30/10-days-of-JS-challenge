// define our data and state objects
const quizQuestions = [
    {
      questionText: "What is the capital of Tamilnadu?",
      answerOptions: ["Chennai", "kovai", "ooty", "thanjavur"],
      answer: "Dublin"
    },
    {
      questionText: "'OS' computer abbreviation usually means",
      answerOptions: [
        "Order of Significance",
        "Open Software",
        "Operating System",
        "Optical Sensor"
      ],
      answer: "Operating System"
    },
    {
      questionText: "'DB' computer abbreviation usually means ?",
      answerOptions: ["Database", "Double Byte", "Data Block", "Driver Boot"],
      answer: "Database"
    }
  ];
  
  let currentQuestion = 0; //computers start counting from zero remember!
  let currentScore = 0;
  
  // get our elements from the dom
  const quizContainer = document.querySelector(".quiz-container");
  const questionDisplay = document.querySelector(".question");
  const answerList = document.querySelector(".answer-list");
  const score = document.querySelector(".quiz-score");
  
  // helper methods to create our elements
  const createQuizQuestion = quizQuestion => {
    createQuestionText(quizQuestion.questionText);
    createAnswerButtons(quizQuestion.answerOptions);
  };
  
  const createQuizScore = () => {
    questionDisplay.style.display = "none";
    answerList.style.display = "none";
    // show the score
    score.style.display = "block";
    score.textContent =
      "You scored " + currentScore + " out of " + quizQuestions.length;
  };
  
  const createQuestionText = questionText => {
    // append our div to our answer list
    questionDisplay.textContent = "Q)" + questionText;
  };
  
  const createAnswerButtons = answerOptions => {
    //clear our answer list before creating new answer buttons
    answerList.innerHTML = "";
  
    // our answerOptions is an array, so we map over it to
    // create a list of answer buttons
    answerOptions.map(answerOption => {
      // create an answer item div and give it a class
      const answerItemDiv = document.createElement("div");
      answerItemDiv.className = "answer-item";
  
      //create a button
      const answerButton = document.createElement("button");
      answerButton.textContent = answerOption;
  
      // add an eventlistener to this button to check if answer is correct or not
      handleAnswerButtonClick();
  
      answerButton.addEventListener("click", () => {
        // get our currentQuestion
        const question = quizQuestions[currentQuestion];
        // compare the answer the user selected to the correct answer
        if (question.answer === answerButton.textContent) {
          currentScore += 1;
        }
  
        // move on to the next question
        currentQuestion += 1;
  
        // display questions if we still have them,
        // otherwise display the scores
        if (quizQuestions[currentQuestion]) {
          createQuizQuestion(quizQuestions[currentQuestion]);
        } else {
          createQuizScore();
        }
      });
  
      // append button to our div
      answerItemDiv.appendChild(answerButton);
  
      // append our div to our answer list
      answerList.appendChild(answerItemDiv);
    });
  };
  
  const handleAnswerButtonClick = answerButton => {};
  
  (function() {
    createQuizQuestion(quizQuestions[0]);
  })();
  
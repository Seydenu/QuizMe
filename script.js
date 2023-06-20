// Get the subject from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject');

// Test questions for each subject
const questions = {
  math: [
    {
      question: 'What is 2 + 2?',
      options: ['4', '2', '6', '8'],
      answer: '4'
    },
    {
      question: 'What is the square root of 64?',
      options: ['8', '6', '4', '10'],
      answer: '8'
    },
    {
      question: 'What is the value of 8 + 5?',
      options: ['10', '12', '13', '15'],
      answer: '13'
    },
    {
      question: 'How many sides does a triangle have?',
      options: ['2', '3', '4', '5'],
      answer: '3'
    },
    {
      question: 'What is the result of 6 multiplied by 7?',
      options: ['36', '42', '48', '54'],
      answer: '42'
    },
    {
      question: 'What is 2 + 2?',
      options: ['4', '2', '6', '8'],
      answer: '4'
    },
    {
      question: 'What is the square root of 64?',
      options: ['8', '6', '4', '10'],
      answer: '8'
    },
    {
      question: 'What is the value of 8 + 5?',
      options: ['10', '12', '13', '15'],
      answer: '13'
    },
    {
      question: 'How many sides does a triangle have?',
      options: ['2', '3', '4', '5'],
      answer: '3'
    },
    {
      question: 'What is the result of 6 multiplied by 7?',
      options: ['36', '42', '48', '54'],
      answer: '42'
    },
    {
      question: 'Simplify: 3x + 2y - 4x + 6y',
      options: ['5x + 8y', '7x - 4y', '-x + 8y', '-x + 2y'],
      answer: '-x + 8y'
    },
    {
      question: 'What is the value of pi (π) to two decimal places?',
      options: ['3.14', '3.16', '3.18', '3.20'],
      answer: '3.14'
    },
    {
      question: 'Solve for x: 2x + 5 = 17',
      options: ['x = 4', 'x = 6', 'x = 8', 'x = 10'],
      answer: 'x = 6'
    },
    {
      question: 'What is the formula to calculate the area of a circle?',
      options: ['A = πr^2', 'A = 2πr', 'A = 2πrh', 'A = 0.5bh'],
      answer: 'A = πr^2'
    },
    {
      question: 'What is the value of 3! (factorial of 3)?',
      options: ['3', '6', '9', '12'],
      answer: '6'
    },
    {
      question: 'If a = 3 and b = 5, what is the value of a^2 + b^2?',
      options: ['10', '18', '24', '34'],
      answer: '34'
    },
    {
      question: 'What is the slope of a vertical line?',
      options: ['0', '1', 'undefined', 'infinity'],
      answer: 'undefined'
    },
    {
      question: 'What is the value of log10(100)?',
      options: ['0', '1', '2', '10'],
      answer: '2'
    },
    {
      question: 'What is the sum of the angles in a triangle?',
      options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
      answer: '180 degrees'
    },
    {
      question: 'What is the value of sin(30 degrees)?',
      options: ['0', '0.5', '1', '√2'],
      answer: '0.5'
    },
      // Add more mathematics questions here...
    ],
    
    // Add more math questions here...

  science: [
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'H2O', 'CO2', 'NaCl'],
      answer: 'H2O'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
      answer: 'Jupiter'
    },
    {
      question: 'What is the atomic number of carbon?',
      options: ['6', '12', '14', '8'],
      answer: '6'
    },
    {
      question: 'What is the process by which plants convert sunlight into energy?',
      options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Transpiration'],
      answer: 'Photosynthesis'
    },
    {
      question: 'Which gas is most abundant in the Earth\'s atmosphere?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
      answer: 'Nitrogen'
    },
    {
      question: 'What is the smallest unit of matter?',
      options: ['Atom', 'Molecule', 'Cell', 'Element'],
      answer: 'Atom'
    },
    {
      question: 'What is the SI unit of electric current?',
      options: ['Volt', 'Watt', 'Ampere', 'Ohm'],
      answer: 'Ampere'
    },
    {
      question: 'What is the force that resists motion between two surfaces in contact?',
      options: ['Friction', 'Gravity', 'Magnetism', 'Tension'],
      answer: 'Friction'
    },
    {
      question: 'What is the primary function of the red blood cells in the human body?',
      options: ['Carrying oxygen', 'Digesting food', 'Filtering waste', 'Producing hormones'],
      answer: 'Carrying oxygen'
    },
    {
      question: 'Which scientist is credited with the discovery of penicillin?',
      options: ['Marie Curie', 'Alexander Fleming', 'Louis Pasteur', 'Isaac Newton'],
      answer: 'Alexander Fleming'
    },
    {
      question: 'What is the process of a solid changing directly into a gas called?',
      options: ['Condensation', 'Evaporation', 'Sublimation', 'Melting'],
      answer: 'Sublimation'
    },
    {
      question: 'What is the main component of the Earth\'s core?',
      options: ['Iron', 'Silicon', 'Oxygen', 'Aluminum'],
      answer: 'Iron'
    },
    {
      question: 'What is the unit of measurement for frequency?',
      options: ['Hertz', 'Watt', 'Volt', 'Ampere'],
      answer: 'Hertz'
    },
    {
      question: 'Which of the following is not a primary color of light?',
      options: ['Red', 'Green', 'Blue', 'Yellow'],
      answer: 'Yellow'
    },
    {
      question: 'What is the phenomenon where light waves change direction as they pass through a medium?',
      options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'],
      answer: 'Refraction'
    },
    {
      question: 'What is the chemical formula for table salt?',
      options: ['NaCl', 'H2O', 'CO2', 'CaO'],
      answer: 'NaCl'
    },
    {
      question: 'Which organ in the human body produces insulin?',
      options: ['Liver', 'Pancreas', 'Kidney', 'Stomach'],
      answer: 'Pancreas'
    },
    {
      question: 'Which subatomic particle has a positive charge?',
      options: ['Proton', 'Neutron', 'Electron', 'Photon'],
      answer: 'Proton'
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Brain', 'Liver', 'Skin', 'Heart'],
      answer: 'Skin'
    },
    {
      question: 'What is the process by which plants release water vapor into the atmosphere?',
      options: ['Photosynthesis', 'Transpiration', 'Respiration', 'Condensation'],
      answer: 'Transpiration'
    },
    // Add more science questions here...
    ],
    
    // Add more science questions here...

  history: [
    {
      question: 'Who was the first President of the United States?',
      options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
      answer: 'George Washington'
    },
    {
      question: 'In what year did World War II end?',
      options: ['1939', '1945', '1951', '1941'],
      answer: '1945'
    },
    {
      question: 'when did Liberia gain independence?',
      option: ['1847', '1922', '1912', '1947'],
      answer: '1847',
    },
    {
      question: 'Who was the fourth president of Liberia?',
      option: ['William VS Tuban', 'James S Payne', 'Dennis Mcgregory', 'Daniel B Warner'],
      answer: 'James S Payne'
    },
    {
      question: 'Who was the 57th President of Liberia?',
      option: ['George M weah', 'Ellen Johnson Sirleaf', 'Moses Z Blah', 'William R Tolbert'],
      anzwer: 'George M Weah',
    },
    {
      question: 'Who was the first President of the United States?',
      options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
      answer: 'George Washington'
    },
    {
      question: 'In what year did World War II end?',
      options: ['1939', '1945', '1951', '1941'],
      answer: '1945'
    },
    {
      question: 'Which country was responsible for the Holocaust during World War II?',
      options: ['Germany', 'United States', 'Russia', 'Japan'],
      answer: 'Germany'
    },
    {
      question: 'Who was the leader of the Soviet Union during World War II?',
      options: ['Vladimir Putin', 'Joseph Stalin', 'Nikita Khrushchev', 'Mikhail Gorbachev'],
      answer: 'Joseph Stalin'
    },
    {
      question: 'In what year did the American Civil War end?',
      options: ['1861', '1863', '1865', '1867'],
      answer: '1865'
    },
    {
      question: 'Who is known for discovering America?',
      options: ['Christopher Columbus', 'Amerigo Vespucci', 'Ferdinand Magellan', 'James Cook'],
      answer: 'Christopher Columbus'
    },
    {
      question: 'Which country was the first to successfully launch a satellite into space?',
      options: ['United States', 'Russia', 'China', 'France'],
      answer: 'Russia'
    },
    {
      question: 'Who wrote the U.S. Declaration of Independence?',
      options: ['George Washington', 'Thomas Jefferson', 'Benjamin Franklin', 'John Adams'],
      answer: 'Thomas Jefferson'
    },
    {
      question: 'Which city was the capital of the Roman Empire?',
      options: ['Athens', 'Rome', 'Carthage', 'Constantinople'],
      answer: 'Rome'
    },
    {
      question: 'What was the name of the ship that brought the Pilgrims to America?',
      options: ['Mayflower', 'Santa Maria', 'Titanic', 'Endeavour'],
      answer: 'Mayflower'
    },
    {
      question: 'Who is known for leading the Indian independence movement against British rule?',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Indira Gandhi', 'Subhas Chandra Bose'],
      answer: 'Mahatma Gandhi'
    },
    {
      question: 'Which country was responsible for the construction of the Great Wall?',
      options: ['China', 'Japan', 'Korea', 'India'],
      answer: 'China'
    },
    {
      question: 'Who was the first female Prime Minister of the United Kingdom?',
      options: ['Margaret Thatcher', 'Theresa May', 'Angela Merkel', 'Jacinda Ardern'],
      answer: 'Margaret Thatcher'
    },
    {
      question: 'In what year did the Berlin Wall fall?',
      options: ['1985', '1989', '1991', '1995'],
      answer: '1989'
    },
    {
      question: 'Who is known for leading the civil rights movement in the United States?',
      options: ['Martin Luther King Jr.', 'Malcolm X', 'Rosa Parks', 'Barack Obama'],
      answer: 'Martin Luther King Jr.'
    },
      // Add more history questions here...
    ],
    
    // Add more history questions here...
  geography: [
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      answer: 'Canberra'
    },
    {
      question: 'Which country is known as the "Land of the Rising Sun"?',
      options: ['China', 'Japan', 'South Korea', 'Thailand'],
      answer: 'Japan'
    },
    {
      question: 'What is the largest desert in the world?',
      options: ['Sahara Desert', 'Gobi Desert', 'Arabian Desert', 'Antarctic Desert'],
      answer: 'Sahara Desert'
    },
    {
      question: 'Which river is the longest in the world?',
      options: ['Amazon River', 'Nile River', 'Mississippi River', 'Yangtze River'],
      answer: 'Nile River'
    },
    {
      question: 'Which country is known as the Land Down Under?',
      options: ['New Zealand', 'Australia', 'Fiji', 'Papua New Guinea'],
      answer: 'Australia'
    },
    {
      question: 'What is the largest ocean in the world?',
      options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
      answer: 'Pacific Ocean'
    },
    {
      question: 'Which country is both an island and a continent?',
      options: ['Madagascar', 'Greenland', 'Philippines', 'Australia'],
      answer: 'Australia'
    },
    {
      question: 'What is the capital of Canada?',
      options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
      answer: 'Ottawa'
    },
    {
      question: 'Which city is located at the mouth of the Amazon River?',
      options: ['Lima', 'São Paulo', 'Buenos Aires', 'Manaus'],
      answer: 'Manaus'
    },
    {
      question: 'Which country is famous for its tulips, windmills, and wooden shoes?',
      options: ['Germany', 'Belgium', 'Netherlands', 'Denmark'],
      answer: 'Netherlands'
    },
    {
      question: 'What is the largest country in Africa by land area?',
      options: ['Egypt', 'South Africa', 'Nigeria', 'Algeria'],
      answer: 'Algeria'
    },
    {
      question: 'Which mountain range is located in South America?',
      options: ['Rocky Mountains', 'Himalayas', 'Andes Mountains', 'Alps'],
      answer: 'Andes Mountains'
    },
    {
      question: 'Which city is known as the Eternal City?',
      options: ['Rome', 'Athens', 'Cairo', 'Jerusalem'],
      answer: 'Rome'
    },
    {
      question: 'Which country is home to the Great Barrier Reef?',
      options: ['Mexico', 'Brazil', 'Australia', 'Maldives'],
      answer: 'Australia'
    },
    {
      question: 'What is the official language of Brazil?',
      options: ['Spanish', 'Portuguese', 'English', 'French'],
      answer: 'Portuguese'
    },
    {
      question: 'Which country is famous for its pyramids?',
      options: ['China', 'India', 'Egypt', 'Mexico'],
      answer: 'Egypt'
    },
    {
      question: 'What is the capital of Russia?',
      options: ['St. Petersburg', 'Moscow', 'Kiev', 'Vladivostok'],
      answer: 'Moscow'
    },
    {
      question: 'Which country is known as the Land of Smiles?',
      options: ['Thailand', 'Greece', 'Sweden', 'Brazil'],
      answer: 'Thailand'
    },
    {
      question: 'What is the largest lake in Africa?',
      options: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Chad'],
      answer: 'Lake Victoria'
    },
    {
      question: 'Which country is known for the fjords?',
      options: ['Norway', 'Sweden', 'Finland', 'Iceland'],
      answer: 'Norway'
    },
      // Add more geography questions here...
    ],
    
    // Add more geography questions here...

  // Add more subjects and their questions here...
  literature: [
    {
      question: 'Who is the author of the novel "Pride and Prejudice"?',
      options: ['Jane Austen', 'Charlotte Brontë', 'Emily Dickinson', 'Virginia Woolf'],
      answer: 'Jane Austen'
    },
    {
      question: 'Which Shakespearean play features the characters Romeo and Juliet?',
      options: ['Hamlet', 'Macbeth', 'Romeo and Juliet', 'Othello'],
      answer: 'Romeo and Juliet'
    },
    {
      question: 'Who wrote the epic poem "Paradise Lost"?',
      options: ['John Milton', 'Geoffrey Chaucer', 'William Wordsworth', 'Samuel Taylor Coleridge'],
      answer: 'John Milton'
    },
    {
      question: 'Which author is known for the book series "Harry Potter"?',
      options: ['J.R.R. Tolkien', 'J.K. Rowling', 'C.S. Lewis', 'George R.R. Martin'],
      answer: 'J.K. Rowling'
    },
    {
      question: 'Who wrote the play "Macbeth"?',
      options: ['William Shakespeare', 'George Bernard Shaw', 'Arthur Miller', 'Tennessee Williams'],
      answer: 'William Shakespeare'
    },
    {
      question: 'Which novel features the character Jay Gatsby?',
      options: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Brave New World'],
      answer: 'The Great Gatsby'
    },
    {
      question: 'Who is the author of the play "Hamlet"?',
      options: ['Oscar Wilde', 'William Shakespeare', 'Anton Chekhov', 'Arthur Miller'],
      answer: 'William Shakespeare'
    },
    {
      question: 'Which author wrote the book "The Catcher in the Rye"?',
      options: ['J.D. Salinger', 'F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain'],
      answer: 'J.D. Salinger'
    },
    {
      question: 'Who is the author of the poem "The Raven"?',
      options: ['Walt Whitman', 'Ralph Waldo Emerson', 'Edgar Allan Poe', 'Emily Dickinson'],
      answer: 'Edgar Allan Poe'
    },
    {
      question: 'Which novel is set in the fictional land of Narnia?',
      options: ['The Hobbit', 'The Lion, the Witch, and the Wardrobe', 'Alice\'s Adventures in Wonderland', 'The Chronicles of Narnia'],
      answer: 'The Chronicles of Narnia'
    },
    {
      question: 'Who wrote the tragedy "Romeo and Juliet"?',
      options: ['Arthur Miller', 'William Shakespeare', 'Samuel Beckett', 'Tennessee Williams'],
      answer: 'William Shakespeare'
    },
    {
      question: 'Which author is known for the novel "Moby-Dick"?',
      options: ['Herman Melville', 'Charles Dickens', 'Mark Twain', 'Nathaniel Hawthorne'],
      answer: 'Herman Melville'
    },
    {
      question: 'Who is the author of the novel "The Lord of the Rings"?',
      options: ['J.R.R. Tolkien', 'George Orwell', 'Ray Bradbury', 'H.P. Lovecraft'],
      answer: 'J.R.R. Tolkien'
    },
    {
      question: 'Which play by Arthur Miller is about the Salem witch trials?',
      options: ['Death of a Salesman', 'A Streetcar Named Desire', 'The Crucible', 'Waiting for Godot'],
      answer: 'The Crucible'
    },
    {
      question: 'Who wrote the novel "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'John Steinbeck', 'F. Scott Fitzgerald', 'Truman Capote'],
      answer: 'Harper Lee'
    },
    {
      question: 'Which author is known for the novel "1984"?',
      options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Philip K. Dick'],
      answer: 'George Orwell'
    },
    {
      question: 'Who wrote the play "A Streetcar Named Desire"?',
      options: ['Tennessee Williams', 'Arthur Miller', 'Samuel Beckett', 'Eugene O\'Neill'],
      answer: 'Tennessee Williams'
    },
    {
      question: 'Which author is known for the book "To the Lighthouse"?',
      options: ['Virginia Woolf', 'D.H. Lawrence', 'James Joyce', 'E.M. Forster'],
      answer: 'Virginia Woolf'
    },
    {
      question: 'Who is the author of the novel "The Great Gatsby"?',
      options: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'William Faulkner'],
      answer: 'F. Scott Fitzgerald'
    },
    {
      question: 'Which author is known for the novel "Brave New World"?',
      options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Kurt Vonnegut'],
      answer: 'Aldous Huxley'
    }
    // Add more literature questions here...
  ],
  programming: [
    {
      question: 'What is the output of the following code snippet?\n\nconsole.log(2 + "2");',
      options: ['4', '22', 'NaN', 'Error'],
      answer: '22'
    },
    {
      question: 'Which programming language is known for its use of pointers?',
      options: ['Python', 'Java', 'C', 'JavaScript'],
      answer: 'C'
    },
    {
      question: 'What is the keyword used to define a constant variable in JavaScript?',
      options: ['let', 'var', 'const', 'def'],
      answer: 'const'
    },
    {
      question: 'In object-oriented programming, what is the process of creating a new instance of a class called?',
      options: ['Inheritance', 'Abstraction', 'Polymorphism', 'Instantiation'],
      answer: 'Instantiation'
    },
    {
      question: 'Which data structure follows the Last-In-First-Out (LIFO) principle?',
      options: ['Queue', 'Stack', 'Heap', 'Tree'],
      answer: 'Stack'
    },
    {
      question: 'What is the purpose of the "git clone" command in version control systems?',
      options: ['Commit changes', 'Merge branches', 'Create a new branch', 'Copy a repository'],
      answer: 'Copy a repository'
    },
    {
      question: 'Which programming language is primarily used for developing Android applications?',
      options: ['Swift', 'Java', 'Python', 'C#'],
      answer: 'Java'
    },
    {
      question: 'What does HTML stand for?',
      options: ['Hypertext Markup Language', 'High-level Machine Language', 'Home Tool Markup Language', 'Hyperloop Markup Language'],
      answer: 'Hypertext Markup Language'
    },
    {
      question: 'Which operator is used for concatenation in most programming languages?',
      options: ['+', '*', '-', '.'],
      answer: '+'
    },
    {
      question: 'What is the purpose of the "for" loop in programming?',
      options: ['Declaring variables', 'Conditional branching', 'Repeating a block of code', 'Performing mathematical operations'],
      answer: 'Repeating a block of code'
    },
    {
      question: 'Which programming language is commonly used for data analysis and scientific computing?',
      options: ['Java', 'Python', 'C++', 'Ruby'],
      answer: 'Python'
    },
    {
      question: 'What is the file extension for a Python source code file?',
      options: ['.py', '.java', '.cpp', '.html'],
      answer: '.py'
    },
    {
      question: 'Which keyword is used to define a function in Python?',
      options: ['def', 'function', 'method', 'class'],
      answer: 'def'
    },
    {
      question: 'What is the output of the following code snippet?\n\nconsole.log(5 == "5");',
      options: ['true', 'false', 'NaN', 'Error'],
      answer: 'true'
    },
    {
      question: 'Which data structure uses a key-value pair for storage?',
      options: ['Array', 'Stack', 'Queue', 'Dictionary'],
      answer: 'Dictionary'
    },
    {
      question: 'What is the purpose of the "import" statement in Python?',
      options: ['Exporting data', 'Creating a new module', 'Importing external modules', 'Defining class inheritance'],
      answer: 'Importing external modules'
    },
    {
      question: 'Which programming language is commonly used for web development?',
      options: ['JavaScript', 'C', 'Swift', 'Rust'],
      answer: 'JavaScript'
    },
    {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', 'Cross-platform Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
      answer: 'Cascading Style Sheets'
    },
    {
      question: 'Which operator is used for exponentiation in most programming languages?',
      options: ['^', '*', '/', '**'],
      answer: '**'
    },
    {
      question: 'What is the purpose of the "return" statement in a function?',
      options: ['Declare a variable', 'End the function execution', 'Call another function', 'Output a value'],
      answer: 'Output a value'
    }
    // Add more programming questions here...
  ]
}

// Function to generate random questions
function getRandomQuestions(subject, count) {
  const subjectQuestions = questions[subject];
  if (!subjectQuestions) {
    return [];
  }

  const shuffledQuestions = subjectQuestions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, count);
}

// Function to display questions
function displayQuestions(questions) {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';

  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `
      <h2>Question ${index + 1}:</h2>
      <p>${question.question}</p>
      <ul class="options">
        ${question.options
          .map(
            option => `<li><input type="radio" name="q${index}" value="${option}">${option}</li>`
          )
          .join('')}
      </ul>
    `;
    quizContainer.appendChild(questionElement);
  });

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', calculateScore);
  quizContainer.appendChild(submitButton);
}

// Function to calculate the score
function calculateScore() {
  const questions = document.querySelectorAll('.question');
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = question.querySelector(`input[name=q${index}]:checked`);
    if (selectedOption && selectedOption.value === questions[index].answer) {
      score++;
      question.style.color = 'green';
    } else if (selectedOption) {
      question.style.color = 'red';
    } else {
      question.style.color = 'black'; // Added line to reset color to black for unanswered questions
    }
  });

  const scoreElement = document.createElement('p');
  scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
  quizContainer.appendChild(scoreElement);

  clearInterval(timerInterval);
}

// Function to start the countdown timer
function startTimer(duration, displayElement) {
  let timer = duration;
  let minutes, seconds;

  const timerInterval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    displayElement.textContent = `Time left: ${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(timerInterval);
      calculateScore();
    }
  }, 1000);
}

// Set the number of questions and duration for the quiz
const numberOfQuestions = 20;
const quizDurationInSeconds = 600;

// Get the container element for the quiz and display the questions
const quizContainer = document.getElementById('quiz-container');
if (quizContainer) {
  const randomQuestions = getRandomQuestions(subject, numberOfQuestions);
  displayQuestions(randomQuestions);

  const timerDisplay = document.getElementById('timer');
  startTimer(quizDurationInSeconds, timerDisplay);
}

const quizData = [

    {
        question: "What is a dynamically typed language?",
        a: "A language where types are checked at compile-time",
        b: "A language where types are checked at runtime",
        c: "A language that does not support typing",
        d: "A language with fixed data types",
        correct: "b",
        explanation: "In dynamically typed languages like Python, the type is checked during runtime, allowing for more flexibility."
    },
    {
        question: "What is the purpose of the 'self' parameter in Python class methods?",
        a: "It's a keyword for defining class methods",
        b: "It refers to the instance of the class",
        c: "It's used to create static methods",
        d: "It's a placeholder and has no specific purpose",
        correct: "b",
        explanation: "In Python, 'self' refers to the instance of the class and is used to access instance variables and methods."
    },
    {
        question: "What does the 'yield' keyword do in Python?",
        a: "Terminates a function",
        b: "Creates a generator function",
        c: "Imports a module",
        d: "Defines a class",
        correct: "b",
        explanation: "The 'yield' keyword is used to create a generator function, which returns an iterator."
    },
    {
        question: "What is a lambda function in Python?",
        a: "A named function defined using the 'def' keyword",
        b: "An anonymous function defined using the 'lambda' keyword",
        c: "A built-in function in Python's standard library",
        d: "A function that always returns True or False",
        correct: "b",
        explanation: "A lambda function is an anonymous function in Python, defined using the 'lambda' keyword."
    },
    {
        question: "What is the purpose of the '__init__' method in Python classes?",
        a: "To initialize class variables",
        b: "To define class methods",
        c: "To create a new instance of the class",
        d: "To delete an instance of the class",
        correct: "a",
        explanation: "The '__init__' method is used to initialize class variables when a new instance of the class is created."
    },
    {
        question: "What does the 'with' statement do in Python?",
        a: "Defines a new function",
        b: "Creates a loop",
        c: "Handles resource management and cleanup",
        d: "Imports a module",
        correct: "c",
        explanation: "The 'with' statement in Python is used for resource management, ensuring proper acquisition and release of resources."
    },
    {
        question: "What is a decorator in Python?",
        a: "A function that takes another function as an argument",
        b: "A class method",
        c: "A type of loop",
        d: "A built-in data structure",
        correct: "a",
        explanation: "A decorator in Python is a function that takes another function as an argument and extends its behavior without modifying it."
    },
    {
        question: "What is the purpose of the 'pass' statement in Python?",
        a: "To skip the rest of the loop",
        b: "To raise an exception",
        c: "To do nothing and act as a placeholder",
        d: "To return a value from a function",
        correct: "c",
        explanation: "The 'pass' statement in Python is used as a placeholder for future code, allowing empty code blocks that do nothing."
    },
    {
        question: "What is the difference between '==' and 'is' in Python?",
        a: "'==' compares values, 'is' compares memory addresses",
        b: "'==' is for numbers, 'is' is for strings",
        c: "They are interchangeable",
        d: "'==' is a keyword, 'is' is an operator",
        correct: "a",
        explanation: "'==' compares the values of objects, while 'is' compares their memory addresses (identity)."
    },
    {
        question: "What is a list comprehension in Python?",
        a: "A way to create lists using a for loop",
        b: "A built-in function to manipulate lists",
        c: "A concise way to create lists based on existing lists",
        d: "A method to sort lists",
        correct: "c",
        explanation: "List comprehension is a concise way to create new lists based on existing lists or other iterable objects in Python."
    },
    {
        question: "What is the purpose of the 'global' keyword in Python?",
        a: "To create a new global variable",
        b: "To declare a local variable",
        c: "To use a global variable inside a function",
        d: "To import global modules",
        correct: "c",
        explanation: "The 'global' keyword is used to declare that a variable inside a function is global (defined outside the function)."
    },
    {
        question: "What is the purpose of the 'try', 'except', and 'finally' blocks in Python?",
        a: "To define functions",
        b: "To create loops",
        c: "To handle exceptions and perform cleanup",
        d: "To import modules",
        correct: "c",
        explanation: "'try', 'except', and 'finally' blocks are used for exception handling and ensuring cleanup code is executed."
    },
    {
        question: "What is a module in Python?",
        a: "A type of loop",
        b: "A file containing Python code",
        c: "A built-in function",
        d: "A data type",
        correct: "b",
        explanation: "A module in Python is a file containing Python definitions and statements, which can be imported and used in other Python scripts."
    },
    {
        question: "What is the purpose of the '__name__' variable in Python?",
        a: "To store the name of the current function",
        b: "To store the name of the current class",
        c: "To determine if a script is run directly or imported",
        d: "To store the name of the current module",
        correct: "c",
        explanation: "The '__name__' variable is used to determine whether a Python script is being run directly or being imported as a module."
    },
    {
        question: "What is a virtual environment in Python?",
        a: "A graphical user interface for Python",
        b: "An isolated environment for Python projects",
        c: "A type of loop in Python",
        d: "A built-in testing framework",
        correct: "b",
        explanation: "A virtual environment in Python is an isolated environment that allows you to manage project-specific dependencies separately from system-wide packages."
    },
    {
        question: "What is the purpose of the 'super()' function in Python?",
        a: "To create a superclass",
        b: "To call a superclass method",
        c: "To define a static method",
        d: "To raise an exception",
        correct: "b",
        explanation: "The 'super()' function is used to call a method from a parent or sibling class in Python."
    },
    {
        question: "What is a dictionary comprehension in Python?",
        a: "A way to create dictionaries using a for loop",
        b: "A built-in function to manipulate dictionaries",
        c: "A concise way to create dictionaries based on existing iterables",
        d: "A method to sort dictionaries",
        correct: "c",
        explanation: "Dictionary comprehension is a concise way to create new dictionaries based on existing iterables in Python."
    },
    {
        question: "What is the purpose of the 'enumerate()' function in Python?",
        a: "To count the number of elements in a list",
        b: "To remove duplicates from a list",
        c: "To add index numbers to iterable elements",
        d: "To sort a list",
        correct: "c",
        explanation: "The 'enumerate()' function adds counter numbers to each item of an iterable, returning an enumerate object."
    },
    {
        question: "What is the difference between a shallow copy and a deep copy in Python?",
        a: "Shallow copy creates a new object, deep copy doesn't",
        b: "Shallow copy copies references, deep copy creates new objects",
        c: "They are the same thing",
        d: "Shallow copy is faster, deep copy is slower",
        correct: "b",
        explanation: "A shallow copy creates a new object but references the same memory addresses for nested objects, while a deep copy creates a new object and recursively copies nested objects."
    },
    {
        question: "What is the Global Interpreter Lock (GIL) in Python?",
        a: "A security feature that prevents unauthorized access",
        b: "A lock that allows only one thread to execute Python bytecode at a time",
        c: "A tool for managing global variables",
        d: "A method for interpreting multiple languages",
        correct: "b",
        explanation: "The Global Interpreter Lock (GIL) is a mechanism in CPython that ensures only one thread executes Python bytecode at a time, affecting multi-threaded CPU-bound programs."
    },
    {
        question: "What is the purpose of the 'zip()' function in Python?",
        a: "To compress files",
        b: "To combine two or more iterables element-wise",
        c: "To unpack lists or tuples",
        d: "To create a new list",
        correct: "b",
        explanation: "The 'zip()' function in Python is used to combine two or more iterables element-wise, creating an iterator of tuples."
    },
    {
        question: "What is a generator in Python?",
        a: "A type of function that generates random numbers",
        b: "A function that yields a sequence of values",
        c: "A built-in data structure",
        d: "A tool for creating classes",
        correct: "b",
        explanation: "A generator in Python is a function that yields a sequence of values instead of returning them all at once, allowing for efficient memory usage."
    },
    {
        question: "What is the purpose of the 'any()' and 'all()' functions in Python?",
        a: "To check if any or all elements in an iterable are True",
        b: "To perform mathematical operations",
        c: "To create new lists",
        d: "To sort iterables",
        correct: "a",
        explanation: "The 'any()' function returns True if any element in the iterable is True, while 'all()' returns True if all elements in the iterable are True."
    },
    {
        question: "What is duck typing in Python?",
        a: "A way to create duck-shaped objects",
        b: "A type-checking mechanism",
        c: "A coding style where object type is determined by its behavior",
        d: "A method for sorting lists",
        correct: "c",
        explanation: "Duck typing in Python is a coding style where the type or class of an object is less important than the methods it defines or the operations it supports."
    },

    // Data Analysis Questions (25)
    {
        question: "Which Python library is commonly used for data manipulation and analysis?",
        a: "NumPy",
        b: "Pandas",
        c: "Matplotlib",
        d: "Scikit-learn",
        correct: "b",
        explanation: "Pandas is widely used for data manipulation and analysis in Python, providing data structures like DataFrames and Series."
    },
    {
        question: "What does SQL stand for?",
        a: "Structured Query Language",
        b: "Simple Question Language",
        c: "System Quality Language",
        d: "Software Query Logic",
        correct: "a",
        explanation: "SQL stands for Structured Query Language, used for managing and querying relational databases."
    },
    {
        question: "What is a DataFrame in pandas?",
        a: "A 1-dimensional labeled array",
        b: "A 2-dimensional labeled data structure",
        c: "A function for data cleaning",
        d: "A visualization tool",
        correct: "b",
        explanation: "A DataFrame in pandas is a 2-dimensional labeled data structure with columns of potentially different types."
    },
    {
        question: "What is the purpose of data normalization?",
        a: "To increase data volume",
        b: "To reduce data redundancy and improve data integrity",
        c: "To create backup copies of data",
        d: "To encrypt sensitive data",
        correct: "b",
        explanation: "Data normalization is used to reduce data redundancy and improve data integrity in relational databases."
    },
    {
        question: "What is a primary key in a database?",
        a: "The first column in a table",
        b: "A unique identifier for each record in a table",
        c: "The most important data in a table",
        d: "A password for accessing the database",
        correct: "b",
        explanation: "A primary key is a column or set of columns that uniquely identifies each record in a database table."
    },
    {
        question: "What is the purpose of the GROUP BY clause in SQL?",
        a: "To sort the result set",
        b: "To filter rows based on a condition",
        c: "To group rows that have the same values in specified columns",
        d: "To join multiple tables",
        correct: "c",
        explanation: "The GROUP BY clause in SQL is used to group rows that have the same values in specified columns, often used with aggregate functions."
    },
    {
        question: "What is a pivot table?",
        a: "A table that rotates",
        b: "A summary table in a data processing program",
        c: "A table with only numerical data",
        d: "A table used for data encryption",
        correct: "b",
        explanation: "A pivot table is a summary table in a data processing program that automatically sorts, counts, and totals the data stored in a larger table."
    },
    {
        question: "What is the purpose of data cleaning?",
        a: "To make data look visually appealing",
        b: "To remove or correct inaccurate records from a dataset",
        c: "To encrypt sensitive data",
        d: "To compress data for storage",
        correct: "b",
        explanation: "Data cleaning, also known as data cleansing, is the process of detecting and correcting (or removing) corrupt or inaccurate records from a dataset."
    },
    {
        question: "What is a time series in data analysis?",
        a: "A type of graph",
        b: "A sequence of data points indexed in time order",
        c: "A method of data encryption",
        d: "A database management system",
        correct: "b",
        explanation: "A time series is a sequence of data points indexed (or listed or graphed) in time order, often used to track changes over time."
    },
    {
        question: "What is the purpose of the pandas 'merge' function?",
        a: "To combine two or more DataFrames",
        b: "To split a DataFrame into multiple parts",
        c: "To sort a DataFrame",
        d: "To remove duplicates from a DataFrame",
        correct: "a",
        explanation: "The pandas 'merge' function is used to combine two or more DataFrames based on a common column or index."
    },
    {
        question: "What is a heatmap in data visualization?",
        a: "A map showing temperature changes",
        b: "A graphical representation of data where values are depicted by color",
        c: "A type of scatter plot",
        d: "A 3D visualization technique",
        correct: "b",
        explanation: "A heatmap is a graphical representation of data where individual values contained in a matrix are represented as colors."
    }
]

let index = 0;
let correct = 0,
    incorrect = 0;
let wrongAnswers = [];
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");

// Shuffle and select 20 questions
const shuffledQuestions = quizData.sort(() => 0.5 - Math.random());
const selectedQuestions = shuffledQuestions.slice(0, 20);
let total = selectedQuestions.length;

const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset();
    const data = selectedQuestions[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = selectedQuestions[index];
        const ans = getAnswer();
        if (!ans) {
            alert("Please select an answer before submitting.");
            return;
        }

        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
            wrongAnswers.push({
                question: data.question,
                userAnswer: ans,
                correctAnswer: data.correct,
                correctOption: data[data.correct],
                explanation: data.explanation
            });
        }
        index++;
        loadQuestion();
    }
);

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    );
    return ans;
};

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    );
};

const quizEnd = () => {
    let wrongAnswersHTML = "<h4>Wrong Answers:</h4>";
    wrongAnswers.forEach((item) => {
        wrongAnswersHTML += `
            <div class="wrong-answer-box">
                <p><strong>Question:</strong> ${item.question}</p>
                <p><strong>Your Answer:</strong> ${item.userAnswer}</p>
                <p><strong>Correct Answer:</strong> ${item.correctOption}</p>
                <p><strong>Explanation:</strong> ${item.explanation}</p>
            </div>
        `;
    });

    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> You've scored ${correct} / ${total} </h3>
            <div class="wrong-answers-container">
                ${wrongAnswersHTML}
            </div>
        </div>
    `;
};

// Prevent tab switching
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // User switched tabs, automatically submit the quiz
        quizEnd();
    }
});

loadQuestion(index);


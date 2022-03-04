Vue.createApp({
    data() {
        return {
            score: 0,
            questions: [
                {
                    prompt: "What is the capital of Sweden?",
                    options: ["Stockholm", "Gothenburg", "Malmö", "Jönköping"],
                    answer: "Gothenburg",
                    completed: false,
                },
                {
                    prompt: "What is the capital of USA?",
                    options: ["Los Angeles", "New York", "Houston", "Washington DC"],
                    answer: "Washington DC",
                    completed: false,
                }
                
            ]
        };
    },
    methods: {
        makeGuess(question, option) {
            // Disable question after first guess.
            question.completed = true;

            // If guess matches answer, i.e. correct guess:
            if (question.answer === option) {
                this.score += 1;
            }
        },
        restartQuiz() {
            this.score = 0;
            for (let question of this.questions) {
                question.completed = false;
            }
        },
        isCorrectOption(question, option) {
            return question.completed && option === question.answer;
        }
    }
}).mount('main');
import { createSlice } from "@reduxjs/toolkit"

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: '"Wax on, wax off"',
    options: ["Karate Kid", "Jumanji", "Rambo", "American Pie"],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    questionText: '"We will always have Paris"',
    options: [
      "Amelie from Montmatre",
      "Casablanca",
      "Roman Holiday",
      "Sliding Doors"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 3,
    questionText: '"I am having an old friend for dinner"',
    options: ["Terminator", "Dark Knight", "Joker", "Hannibal"],
    correctAnswerIndex: 3
  },
  {
    id: 4,
    questionText: '"Ill be back"',
    options: ["Rocky", "Iron Man 3", "Star Wars", "Terminator"],
    correctAnswerIndex: 3
  },
  {
    id: 5,
    questionText: '"I am the king of the world"',
    options: ["Lord of the Rings", "Titanic", "Lion King", "Shrek"],
    correctAnswerIndex: 1
  },
  {
    id: 6,
    questionText: '"Nobody puts Baby in a corner"',
    options: ["Wall-E", "Mamma Mia", "Dirty Dancing", "Grease"],
    correctAnswerIndex: 2
  },
  {
    id: 7,
    questionText: '"Show me the money!"',
    options: ["Vanilla Sky", "Wolf of Wallstreet", "Top Gun", "Jerry Maguire"],
    correctAnswerIndex: 3
  },
  {
    id: 8,
    questionText: '"You shall not pass"',
    options: [
      "Star Wars",
      "The Princess Bride",
      "Harry Potter",
      "Lord of the Rings"
    ],
    correctAnswerIndex: 2
  }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find(q => q.id === questionId)

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        )
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        )
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: state => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }
  }
})

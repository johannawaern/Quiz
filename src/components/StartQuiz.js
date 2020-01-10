import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "reducers/quiz"

export const StartQuiz = props => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const answer = useSelector(state =>
    state.quiz.answers.find(a => a.questionId === question.id)
  )
  const dispatch = useDispatch()

  return (
    <div className='startPage'>
      <h1>🌟 The Amazing Movie Quiz 🌟</h1>
      <p>
        Have you always wondered if you are a movie expert? It's never been
        easier to find out. Take this quiz where you pair a quote with the right
        moive, and get the verdict!
      </p>
      <button
        type='button'
        className='nextSubmitButton'
        onClick={props.handleStartQuiz}
      >
        Start Quiz
      </button>
      <iframe
        src='https://giphy.com/embed/ZJW8I331ACj28'
        width='480'
        height='266'
        frameBorder='0'
        class='giphy-embed'
        allowFullScreen
      ></iframe>
    </div>
  )
}

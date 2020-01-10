import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "reducers/quiz"

export const Summary = () => {
  const answers = useSelector(state => state.quiz.answers)
  const questions = useSelector(state => state.quiz.questions)
  const correct = answers.filter(answer => answer.isCorrect).length

  if (answers.length !== questions.length) {
    return null
  }
  return (
    <div className='summary'>
      <h1>
        You have got {correct} out of {questions.length}!
      </h1>
      <iframe
        src='https://giphy.com/embed/3oKIPf3C7HqqYBVcCk'
        width='480'
        height='270'
        frameBorder='0'
        class='giphy-embed'
        allowFullScreen
      ></iframe>
    </div>
  )
}

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
    <h1>
      You have got {correct} out of {questions.length}. You are the worst!
    </h1>
  )
}

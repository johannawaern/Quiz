import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "reducers/quiz"

export const StartQuiz = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const answer = useSelector(state =>
    state.quiz.answers.find(a => a.questionId === question.id)
  )
  const dispatch = useDispatch()
  return <h1>Welcome</h1>
}

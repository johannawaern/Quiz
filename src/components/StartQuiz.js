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

  return (
    <div>
      <h1>The Amazing Movie Quote Quiz</h1>
      <p>
        Have you always wondered if you are a movie expert? It's never been
        easier to find out. Take this quiz where you pair a quote with the right
        moive, and get the verdict!
      </p>
    </div>
  )
}

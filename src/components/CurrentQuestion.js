/* eslint-disable react/button-has-type */
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "reducers/quiz"
import { NextOrSubmit } from "components/NextOrSubmit"

export const CurrentQuestion = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const answer = useSelector(state =>
    state.quiz.answers.find(a => a.questionId === question.id)
  )
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <h2 className='question'>{question.questionText}</h2>
      <div className='answerWrapper'>
        {question.options.map((option, index) => (
          <button
            className='answerButton'
            onClick={() => {
              if (!answer) {
                dispatch(
                  quiz.actions.submitAnswer({
                    questionId: question.id,
                    answerIndex: index
                  })
                )
              }
            }}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
      <p className='progress'>{question.id}/8</p>
      {answer && <h1> {answer.isCorrect ? "Correct" : "Wrong"}</h1>}
      {answer && <NextOrSubmit />}
    </>
  )
}

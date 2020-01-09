/* eslint-disable react/button-has-type */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => (
        <button
          onClick={() => {
            dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
          }}
          key={option}>
          {option}
        </button>
      ))}
    </>
  )
}

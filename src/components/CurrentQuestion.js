/* eslint-disable react/button-has-type */
import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option) => <button key={option}>{option}</button>)}
    </>
  )
}

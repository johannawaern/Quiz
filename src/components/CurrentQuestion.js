/* eslint-disable react/button-has-type */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))
  console.log(answer)
  const dispatch = useDispatch()

  /* const handleOnClick = () => {
    if (quiz.answers.question.isCorrect === true) {
      return console.log("hey")
    }
  } */

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      {answer && <h1>Hey {answer.isCorrect ? 'Correct' : 'Wrong'}</h1>}
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => (
        <button
          onClick={() => {
            if (!answer) {
              dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
            }
          }}
          key={option}>
          {option}
        </button>
      ))}
    </>
  )
}

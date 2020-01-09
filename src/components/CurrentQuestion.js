/* eslint-disable react/button-has-type */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))
  const dispatch = useDispatch()
  const isLastQuestion = useSelector((state) => state.quiz.questions.length - state.quiz.answers.length === 0)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
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
      {answer && <h1> {answer.isCorrect ? 'Correct' : 'Wrong'}</h1>}
      {/* {answer && !isLastQuestion && <button
        onClick={() => {
          dispatch(quiz.actions.goToNextQuestion())
        }}>
        Next question
      </button>}
      {answer && isLastQuestion && <button
        onClick={() => {
          dispatch(quiz.actions.goToNextQuestion())
        }}>
        Submit
      </button>} */}
      <p>{question.id}/8</p>
    </>
  )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const NextOrSubmit = () => {
  const isLastQuestion = useSelector(
    (state) => state.quiz.questions.length - state.quiz.answers.length === 0
  )
  const dispatch = useDispatch()

  return (
    <button
      type='button'
      className='nextSubmitButton'
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion())
      }}>
      {isLastQuestion ? 'Submit' : 'Next question'}
    </button>
  )
}

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "reducers/quiz"

export const NextOrSubmit = () => {
  const isLastQuestion = useSelector(
    state => state.quiz.questions.length - state.quiz.answers.length === 0
  )
  const dispatch = useDispatch()
  console.log(isLastQuestion, "isLast")
  if (isLastQuestion) {
    return <button type='button'>Submit</button>
  }

  return (
    <button
      type='button'
      className='nextSubmitButton'
      onClick={() => {
        dispatch(quiz.actions.goToNextQuestion())
      }}
    >
      Next question
    </button>
  )
}

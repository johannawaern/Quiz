import React, { useState } from "react"

import { CurrentQuestion } from "components/CurrentQuestion"
import { Summary } from "components/Summary"
import { StartQuiz } from "components/StartQuiz"
import { useSelector } from "react-redux"

export const Quiz = () => {
  const quizEnd = useSelector(state => state.quiz.quizOver === true)
  const [started, setStarted] = useState(false)
  const handleStartQuiz = () => {
    setStarted(true)
  }

  if (quizEnd) {
    return (
      <div className='AppWrapper'>
        <Summary />
      </div>
    )
  }

  return (
    <div className='AppWrapper'>
      {started ? (
        <CurrentQuestion />
      ) : (
        <StartQuiz handleStartQuiz={handleStartQuiz} />
      )}
    </div>
  )
}

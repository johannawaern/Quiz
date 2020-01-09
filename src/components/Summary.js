import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))
  const dispatch = useDispatch()
  const isLastQuestion = useSelector((state) => state.quiz.questions.length - state.quiz.answers.length === 0)

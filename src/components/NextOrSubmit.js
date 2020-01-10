import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const NextOrSubmit = () => {
	const isLastQuestion = useSelector((state) => state.quiz.questions.length - state.quiz.answers.length === 0);
	const dispatch = useDispatch();

	if (!isLastQuestion) {
		return (
			<button
				type="button"
				onClick={() => {
					dispatch(quiz.actions.goToNextQuestion());
				}}
			>
				Next question
			</button>
		);
	}
	if (isLastQuestion) {
		return (
			<button
				type="button"
				onClick={() => {
					dispatch(quiz.actions.goToNextQuestion());
				}}
			>
				Submit
			</button>
		);
	}
};

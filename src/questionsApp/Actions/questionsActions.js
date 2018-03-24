/*
* Action types
* Prefix with QUESTIONS/ to avoid type clashing with other action types
*/

import getQuestions from '../Services/questionsService';

export const QuestionActionTypes = {
  FETCH_QUESTIONS: 'QUESTIONS/FETCH_QUESTIONS',
  FECTH_QUESTIONS_SUCCESS: 'QUESTIONS/FECTH_QUESTIONS_SUCCESS',
  FECTH_QUESTIONS_FAILURE: 'QUESTIONS/FECTH_QUESTIONS_FAILURE',
  CHANGE_RESPONSE: 'QUESTIONS/CHANGE_RESPONSE',
  NEXT_QUESTION: 'QUESTIONS/NEXT_QUESTION',
};

/*
* Actions
*/
export const QuestionActions = {
  fetchQuestions: () => ({
    type: QuestionActionTypes.FETCH_QUESTIONS,
  }),
  fetchQuestionsSuccess: data => ({
    type: QuestionActionTypes.FECTH_QUESTIONS_SUCCESS,
    data,
  }),
  fetchQuestionsFailure: () => ({
    type: QuestionActionTypes.fetchQuestionsFailure,
  }),
  changeReply: (id, response) => ({
    type: QuestionActionTypes.CHANGE_RESPONSE,
    id,
    response,
  }),
  nextQuestion: () => ({ type: QuestionActionTypes.NEXT_QUESTION }),
};

/* 
* Actioncreators
*/

export const QuestionActionCreators = {
  fetchQuestions: () => dispatch => {
    dispatch(QuestionActions.fetchQuestions());
    getQuestions()
      .then(data => dispatch(QuestionActions.fetchQuestionsSuccess(data)))
      .catch(error => dispatch(QuestionActions.fetchQuestionsFailure()));
  },
};

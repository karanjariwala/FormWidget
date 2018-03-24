import { normalize } from 'normalizr';
import questionSchema from '../Schemas/questionsSchema';
import { QuestionActionTypes } from '../Actions/questionsActions';

const initialState = {
  questionEntities: {},
  questionsOrder: [],
  loadingQuestions: false,
  loadingQuestionsError: false,
  questionsRendered: [],
  summaryView: false,
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case QuestionActionTypes.FETCH_QUESTIONS:
      return Object.assign({}, state, { loadingQuestions: true });
    case QuestionActionTypes.FECTH_QUESTIONS_SUCCESS: {
      const { entities, result } = normalize(action.data.questions, [
        questionSchema,
      ]);
      return Object.assign({}, state, {
        questionEntities: entities.questions,
        questionsOrder: result,
        loadingQuestions: false,
        questionsRendered: [result[0]],
      });
    }
    case QuestionActionTypes.FECTH_QUESTIONS_FAILURE:
      return Object.assign({}, state, {
        loadingQuestions: false,
        loadingQuestionsError: true,
      });

    case QuestionActionTypes.CHANGE_RESPONSE: {
      const { id, response } = action;
      return Object.assign({}, state, {
        questionEntities: {
          ...state.questionEntities,
          [id]: { ...state.questionEntities[id], reply: response },
        },
      });
    }

    case QuestionActionTypes.NEXT_QUESTION: {
      const { questionsRendered, questionEntities } = state;
      const nextQuestion =
        questionEntities[questionsRendered[questionsRendered.length - 1]].next;
      if (Boolean(nextQuestion)) {
        return Object.assign({}, state, {
          questionsRendered: [...questionsRendered, nextQuestion],
        });
      }

      return Object.assign({}, state, { summaryView: true });
    }

    default:
      return state;
  }
};

export default questions;

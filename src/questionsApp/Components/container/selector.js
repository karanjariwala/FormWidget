export const questionSelector = state => {
  const { questionEntities, questionsRendered } = state.questions;
  const currentQuestion = questionsRendered[questionsRendered.length - 1];

  if (questionsRendered && questionEntities[currentQuestion]) {
    return questionEntities[currentQuestion];
  }

  return {};
};

export const questionTextSelector = state => {
  const { questionEntities, questionsRendered } = state.questions;
  const currentQuestion = questionsRendered[questionsRendered.length - 1];

  if (Object.keys(questionEntities).length > 0) {
    return questionEntities[currentQuestion].text;
  }
  return '';
};

export const isButtonDisabled = state => {
  const { questionEntities, questionsRendered } = state.questions;
  const currentQuestion = questionsRendered[questionsRendered.length - 1];

  if (Object.keys(questionEntities).length > 0) {
    return !Boolean(questionEntities[currentQuestion].reply);
  }
  return true;
};

export const getAnsweredQuestions = state => {
  const { questionEntities, questionsRendered } = state.questions;

  const answeredQuestions = questionsRendered.map(id => questionEntities[id]);
  return answeredQuestions;
};

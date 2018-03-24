import ApiClient from './ApiClient';

const endPoints = {
  getQuestions: '/Questions',
};

const getQuestions = params => {
  return ApiClient(endPoints.getQuestions, params);
};

export default getQuestions;

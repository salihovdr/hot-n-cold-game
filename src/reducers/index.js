import { GUESSES, FEEDBACK, RESET } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export default (state=initialState, action) => {
  if (action.type === GUESSES) {
    return Object.assign({}, state, {guesses: [...state.guesses, action.guess]});
  }
  if (action.type === FEEDBACK) {
    return Object.assign({}, state, { feedback: action.feedback });
  }
  if (action.type === RESET) {
    return Object.assign({}, state, initialState);
  }
}
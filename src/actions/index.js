
export const GUESSES = 'GUESSES';
export const guessesAction = (guess) => ({
  type: GUESSES,
  guess
})

export const FEEDBACK = 'FEEDBACK';
export const feedbackAction = (feedback) => ({
  type: FEEDBACK,
  feedback
})

export const AURAL = 'AURAL';
export const auralAction = (status) => ({
  type: AURAL,
  status

})

export const RESET = 'RESET';
export const resetAction = () => ({
  type: RESET
})
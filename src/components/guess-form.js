import React from 'react';

import './guess-form.css';
import { guessesAction } from '../actions';
import { connect } from 'react-redux';

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
      this.props.dispatch(guessesAction(value));
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  guesses: state.guesses
})

export default connect(mapStateToProps)(GuessForm);
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Grid } from '@material-ui/core';

class FlipCards extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
          <>
             <Grid className='flip-cards-grid'>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div className='front-card'>
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
  
          <div className='back-card'>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
<div className='front-card'>
  This is the front of the card.
  <button onClick={this.handleClick}>Click to flip</button>
</div>

<div className='back-card'>
  This is the back of the card.
  <button onClick={this.handleClick}>Click to flip</button>
</div>
</ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
<div className='front-card'>
  This is the front of the card.
  <button onClick={this.handleClick}>Click to flip</button>
</div>

<div className='back-card'>
  This is the back of the card.
  <button onClick={this.handleClick}>Click to flip</button>
</div>
</ReactCardFlip>

</Grid>
</>
      )
    }
  }

  export default FlipCards;
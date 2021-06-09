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
             <Grid>    
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" onClick={this.handleClick}>
        
         <button  onClick={this.handleClick} className='card-number'>2.</button>
       
         <button onClick={this.handleClick}  className='card-text front-card'>Se realiza el diagnóstico investigando a profundidad la situación  para proveer las mejores soluciones posibles y de esta manera otorgar las tres mejores opciones.</button>
         
        </ReactCardFlip>
   
</Grid>

</>
      )
    }
  }

  export default FlipCards;
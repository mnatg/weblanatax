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
             <Grid >
          
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" onClick={this.handleClick} style="outline:none;">
        
         <button  onClick={this.handleClick} className='card-number'>1.</button>
     
          
         <button onClick={this.handleClick}  className='card-text front-card'>Podrás exponer tu situación con el consultor quien estará disponible siempre, así mismo nuestro compromiso es entender mejor el caso, 
         <p className='negrilla'>recuerde que la consulta es totalmente gratuita</p></button>
      
        </ReactCardFlip>
        
    
</Grid>

</>
      )
    }
  }

  export default FlipCards;
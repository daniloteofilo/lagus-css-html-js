import { CardsContainerStyled } from '../Main/styles'
import Card from './Card'


export default function Cards() {
    return (
      <CardsContainerStyled>
        <Card 
          text="Atom in the hand of a robot" 
          src="/images/pic-atom.png" 
          alt="Robotic hand holding an atom" 
          className="small-image-container"
        />
        <Card 
          text="Atom in the hand of a robot" 
          src="/images/pic-man-code.png" 
          alt="Man writing code on computer" 
          className="average-image-container"
        />
        <Card 
          text="Atom in the hand of a robot" 
          src="/images/pic-woman-code.png" 
          alt="Woman working on a computer" 
          className="big-image-container"
        />
      </CardsContainerStyled>
    )
  }
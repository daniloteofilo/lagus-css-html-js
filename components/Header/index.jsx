import Image from 'next/image'
import { 
  ButtonsLeftSideHeaderContainerStyled, 
  HeaderBackgroundStyled, HeaderStyled, 
  LogoText, PersonCartIconsContainer } 
from './styles'
import ButtonCounter from './ButtonCounter'


export default function Header() {
    return (
      <HeaderBackgroundStyled>
        <HeaderStyled>
            <ButtonsLeftSideHeaderContainerStyled>
              <ButtonCounter />
              <Image 
                src="/images/nav-toggle.svg" 
                alt="Nav toggle icon button" 
                width={20.66}
                height={18}
                priority
                className="nav-toggle-button"
              />
            </ButtonsLeftSideHeaderContainerStyled>
            <LogoText>Lagus<span>_</span></LogoText>
            <PersonCartIconsContainer>
              <Image 
                src="/images/icon-person.svg" 
                alt="Person icon button" 
                width={18}
                height={18}
                priority
              />
              <Image 
                src="/images/icon-cart.svg" 
                alt="Cart icon button"
                width={24}
                height={18}
                priority
              />
            </PersonCartIconsContainer>
        </HeaderStyled>
      </HeaderBackgroundStyled>
    )
  }
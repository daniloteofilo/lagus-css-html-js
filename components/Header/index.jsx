import Image from 'next/image'
import { HeaderStyled, LogoText } from './styles'


export default function Header() {
    return (
        <HeaderStyled>
            <Image 
              src="/images/nav-toggle.svg" alt="teste" width={20.66}
              height={18}
              priority
            />
            <LogoText>Lagus<span>_</span></LogoText>
            <div >
              <Image 
                src="/images/icon-person.svg" alt="teste" width={18}
                height={18}
                priority
              />
              <Image 
                src="/images/icon-cart.svg" alt="teste"
                height={18}
                width={18}
                priority
              />
            </div>

        </HeaderStyled>
    )
  }
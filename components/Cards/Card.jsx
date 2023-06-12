import Image from "next/image";
import { CommonTextStyled } from "../Main/styles";
import { CardContainerStyled, TopCardContainerStyled } from "./styles";

export default function Card({className, text, src, alt}) {
    return (
      <CardContainerStyled className={className}>
        <TopCardContainerStyled>
          <CommonTextStyled>
            {text}
          </CommonTextStyled>
        </TopCardContainerStyled>
          <Image 
            src={src}
            alt={alt} 
            fill
            priority
          />
      </CardContainerStyled>
    )
  }
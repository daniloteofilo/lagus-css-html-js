import MainContainer from '@/components/Main'
import Header from '../components/Header/index'
import { AttentionTextStyled, BlockTextsContainerStyled, CommonTextStyled, MainTitleStyled, SecondaryTitleStyled } from '@/components/Main/styles'
import Cards from '@/components/Cards'

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <MainTitleStyled>This page is a HTML/CSS/JS Test!</MainTitleStyled>
      <BlockTextsContainerStyled>
        <CommonTextStyled>
          The objective of this test is to assess your coding and styling skills. 
          It will be considered a good result if you can style all the components 
          of this page. This text also count as a valid component.
        </CommonTextStyled>
        <CommonTextStyled>
          This second part is a second paragraph of the same component. Both p tags 
          must follow the flow and display side by side, instead of the regular behavior 
          of one on top of the other. only on desktop.
        </CommonTextStyled>
      </BlockTextsContainerStyled>
      <AttentionTextStyled>
        Attention: components must be responsive and use CSS Flex and Grid layouts
      </AttentionTextStyled>
      <SecondaryTitleStyled>
        Image List Component
      </SecondaryTitleStyled>
      <Cards />
    </MainContainer>
  )
}

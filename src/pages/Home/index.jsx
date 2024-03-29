import styled from "styled-components"
import colors from "../../utils/style/colors"
import { StyledLink } from '../../utils/style/Atoms'
import HomeIlustration from '../../assets/home-illustration.svg'
import { useTheme } from "../../utils/hooks"

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const HomeContainer = styled.div`
    margin: 30px;
    background-color: ${colors.backgroundLight};
    padding: 60px 90px;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
`
const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${StyledLink} {
      max-width: 250px;
    }
`
const StyledTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 280px;
    line-hight: 50px;
`
const Illustration = styled.img`
    flex:1;
`

function Home() {
    const {theme} = useTheme()

    return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftCol>
          <StyledTitle theme={theme}>
            Identify your needs and we'll take care of the rest along with our
            talented professionals{' '}
          </StyledTitle>
          <StyledLink to='/survey/1' $isFullLink>
            Take the survey
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIlustration} />
      </HomeContainer>
    </HomeWrapper>
    )
  }
  
  export default Home
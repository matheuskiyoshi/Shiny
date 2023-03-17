import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'

const HomeLogo = styled.img`
    height: 70px;
`
const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    return(
        <NavContainer>
            <Link to='/'>
                <HomeLogo src={DarkLogo} />
            </Link>
            <div>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/freelancers'>Profiles</StyledLink>
                <StyledLink to='/survey/1' $isFullLink>
                    Take the survey
                </StyledLink>
            </div>    
        </NavContainer>
    )
}

export default Header
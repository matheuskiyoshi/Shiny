import styled from "styled-components"
import colors from "../../utils/style/colors"
import Error404 from "../../assets/Error404.jpg"
import { useTheme } from "../../utils/hooks"

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    align-items: center;
`
const ErrorTitle = styled.h1`
    font-weight: 300;
`
const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.secondary};
`
const Illustration = styled.img`
    max-width: 800px;
`

function Error() {
    const {theme} = useTheme()
    return(
       <ErrorWrapper theme={theme}>
            <ErrorTitle theme={theme}>Oops...</ErrorTitle>
            <Illustration src={Error404} />
            <ErrorSubtitle theme={theme}>
                It looks like the page you're after doesn't exist.
            </ErrorSubtitle>
       </ErrorWrapper>
    )
}

export default Error
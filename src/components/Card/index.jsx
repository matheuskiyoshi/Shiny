import PropTypes from 'prop-types'  
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Component } from 'react'

const CardLabel = styled.span`
    color: ${colors.primary};
    font-size: 22px;
    font-weight: normal;
    padding-left: 15px;
    align-self: center;
 `
 const CardTitle = styled.div`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-size: 22px;
    font-weight: normal;
    align-self: center;
    height: 25px;
    display: flex;
    align-items: center;
 `
const CardImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    align-self: center;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    paddig: 15px;
    background-color: ${({ theme }) => 
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFavorite: false,
        }
    }

    setFavorite = () => {
        this.setState({ isFavorite: !this.state.isFavorite })
    }

    render() {
        const { theme, picture, label, title } = this.props
        const { isFavorite } = this.state
        const star = isFavorite ? '⭐' : ''

        return(
            <CardWrapper theme={theme} onClick={this.setFavorite}>
                <CardLabel theme={theme}>{label}</CardLabel>
                <CardImage src={picture} alt='freelancer' />
                <CardTitle theme={theme}>
                    {star} {title} {star}
                </CardTitle>
            </CardWrapper>
        )
    }
}


Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
 }

 Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
    theme: 'light',
 }

export default Card
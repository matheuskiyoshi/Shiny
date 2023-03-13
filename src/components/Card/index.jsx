import PropTypes from 'prop-types'  
import DefaultPicture from '../../assets/profile.png'

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
 }

 Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture
 }

function Card({ label, picture, title }) {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt='freelancer' height={80} width={80} />
            <span>{title}</span>

        </div>
    )
}

export default Card
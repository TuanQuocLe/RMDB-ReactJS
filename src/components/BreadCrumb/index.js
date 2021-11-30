import { Wrapper, Content } from "./BreadCrumb.style";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const BreadCrumb = ({movieTitle}) => {

    return (
        <Wrapper>
            <Content>
            <Link
                to='/'
                >Home
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>

            </Content>
        </Wrapper>
    )
}
BreadCrumb.propTypes  = {
    movieTitle: PropTypes.string
}
export default BreadCrumb
import React from 'react'
import RMDBLogo from '../../img-src/react-movie-logo.svg' 
import TMDBLogo from '../../img-src/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style'
import { Link } from 'react-router-dom'
import PropTypes from  'prop-types'

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' /> 
        </Content>
    </Wrapper>
)


export default Header
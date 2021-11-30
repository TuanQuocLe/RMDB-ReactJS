import { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from './SearchBar.style';
import searchIcon from '../../img-src/search-icon.svg'

const SearchBar = ({ setSearchTerm}) => {
    const [state, setState] = useState('')
    useEffect (() => {
        const timer = setTimeout(() => {
            setSearchTerm(state)
            }  , 500)
        return () => clearTimeout(timer)
    },[state])
    return    (
    <Wrapper>
        <Content>
            <img src={searchIcon} alt='search-icon'/>
            <input type='text' placeholder='Search Movie...'
                onChange={event => {setState(event.target.value)}}
                value= {state}
            ></input>

        </Content>
    </Wrapper>  
    )
}
export default SearchBar
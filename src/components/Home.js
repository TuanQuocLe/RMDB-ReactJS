//3 47 54

import React, { useEffect } from 'react'
import { useState } from 'react'
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY } from '../config'
import API from '../API'
import HeroImage from './HeroImage/index.js'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'

//components


//hook
import { useHomeFetch } from '../hooks/useHomeFetch'



//image
import NoImage from '../img-src/no_image.jpeg'
const Home = () => {
    const { 
        state, 
        loading, 
        error,
        searchTerm, 
        setSearchTerm, 
        setIsLoadingMore 
    } 
        = useHomeFetch()
    return (
        <>
            {!searchTerm && state.results[0] ? <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title= {state.results[0].title}
                text= {state.results[0].overview}
            /> : null}
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
            {loading && <Spinner/>}
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path : NoImage
                        }
                        movieId={movie.id}
                    >
                    </Thumb>

                ))}
            </Grid>
            
            {state.page < state.total_pages && !loading && (
                <Button 
                    text='Load More' 
                    callback={() => setIsLoadingMore(true)}
                >
                </Button>
            )}

        </>
    )
        
        
        
}
export default Home
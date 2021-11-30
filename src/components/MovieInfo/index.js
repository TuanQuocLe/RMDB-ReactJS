import { Wrapper, Content, Text } from './MovieInfo.style'
import Thumb from '../Thumb'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NoImage from '../../img-src/no_image.jpeg'

const MovieInfo = ({movie}) => {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb 
                    image={movie.poster_path ?
                     `${IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path}` 
                     : NoImage}
                    clickable={false}
                    
                >
                </Thumb>
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Luem</h3>
                    <p>{movie.overview}</p>
                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => <p key={director.id}>{director.name}</p>)}
                        </div>
                    </div> 
                </Text>
            </Content>
        </Wrapper>
    )
}

export default MovieInfo
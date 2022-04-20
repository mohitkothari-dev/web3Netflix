import React, {useState,useEffect} from 'react'
import axios from '../../api'
import styles from '../../styles/Rows.module.css'
import { Button, Modal } from 'web3uikit'

const Rows = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies,setMovies] = useState()

    const [visible, setVisible] = useState(false)
    const [selectedFilm, setSelectedFilm] = useState()

    const base_Url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

  return (
    <div className={styles.row}>
        <h2>{title}</h2>
        <div className={styles.rowPosters}>
            {movies?.map((movie) => (
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img src={`${base_Url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} className={`row_poster ${isLargeRow && 'row__posterLarge'}`} key={movie.id}
                    onClick={() => {
                        setSelectedFilm(movie);
                        setVisible(true);
                    }}
                    >
                    </img>
                )
            ))}
        </div>
        {selectedFilm && (
        <div className={styles.modal}>
            <Modal
            onCloseButtonPressed={() => setVisible(false)}
            isVisible={visible}
            hasFooter={false}
            width='80vw'
            >
                <div className={styles.modalContent}>
                    <img 
                    src={`${base_Url}${
                        isLargeRow ? selectedFilm.poster_path : selectedFilm.backdrop_path
                    }`} 
                    alt={selectedFilm.name} className={styles.modalImg} />
                    <div className={styles.modalPlayButton} >
                        <Button
                        icon='chevronRightX2'
                        text='Play'
                        theme='secondary'
                        type='button'
                        ></Button>
                        <Button
                        icon='plus'
                        text='Add to My List'
                        theme='translucent'
                        type='button'
                        ></Button>
                    </div>
                    <div className={styles.movieInfo}>
                        <div className={styles.description}>
                            <div className={styles.details}>
                                <span>{selectedFilm.first_air_date}</span>
                            </div>
                            {selectedFilm.overview}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
        )}
    </div>
  )
}

export default Rows
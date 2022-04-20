import React, { useState, useEffect } from 'react'
import styles from '../../styles/Banner.module.css'
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from '../../api'
import requests from '../../Requests'
import { Button, Modal } from 'web3uikit'

const Banner = () => {

  const [movie,setMovie] = useState([]);

  const [visible, setVisible] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState()

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0,n-1) + '...' : string;
  }

  const st = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`

  return (
    <header style={{ background: `url(${st}) no-repeat center center/cover`, height: '448px', position: 'relative', color: '#fff', objectFit: 'contain'}} >
      <div className={styles.banner__contents}>
        <h1 className={styles.banner__title}>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className={styles.banner__buttons}>
          <button className={styles.banner__button}><PlayArrowIcon style={{ marginRight: '2px' }} ></PlayArrowIcon> Play</button>
          <button 
          className={styles.banner__button}
          onClick={()=> {setVisible();setSelectedFilm(movie);}}
          >
            More info  <InfoIcon style={{ marginLeft: '5px' }}></InfoIcon>
          </button>
        </div>
        <h1 className={styles.banner__description}>{truncate(movie?.overview, 150)}</h1>
      </div>
      {/* POP-UP MODAL */}
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
                    src={st} 
                    alt={selectedFilm.name} className={styles.modalImg} />
                    <div className={styles.movieInfo}>
                        <div className={styles.description}>
                            <div className={styles.details}>
                                <span>{selectedFilm.first_air_date}</span>
                            </div>
                            {selectedFilm.overview}
                        </div>
                    </div>
                </div>
                <div className={styles.modalPlayButton} >
                        <Button
                        onClick={() => console.log('Play Button is been clicked')}
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
            </Modal>
        </div>
        )}
    </header>
  )
}

export default Banner
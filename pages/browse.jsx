import React, { useEffect } from 'react'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import requests from '../Requests'
import Nav from '../myComponents/HomeScreenComponents/Nav'
import Banner from '../myComponents/HomeScreenComponents/Banner'
import Rows from '../myComponents/HomeScreenComponents/Rows'

const Browse = () => {
  const { isAuthenticated } = useMoralis();
  const router  = useRouter();

  useEffect(() => {
    if(!isAuthenticated) router.push('/');
  }, [isAuthenticated] )

  return (
    <div style={{ backgroundColor: 'var(--back-color)' }} >
      <Head>
        <title>Welcome to Web3 Netflix</title>
        <meta name="description" content="A decentralized streaming service that offers wide varienty of award-winning TV shows, movies, anime, documentaries, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <Banner></Banner>
      <Rows title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Rows>
      <Rows title='Trending Now' fetchUrl={requests.fetchTrending}></Rows>
      <Rows title='Top Rated' fetchUrl={requests.fetchTopRated}></Rows>
      <Rows title='Action' fetchUrl={requests.fetchActionMovies}></Rows>
      <Rows title='comedy' fetchUrl={requests.fetchComedyMovies}></Rows>
      <Rows title='Horror' fetchUrl={requests.fetchHorrorMovies}></Rows>
      <Rows title='Romance' fetchUrl={requests.fetchRomanticMovies}></Rows>
      <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries}></Rows>
    </div>
  )
}

export default Browse
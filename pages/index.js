import Head from 'next/head';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import requests from '../Utilities/requests';
import Contents from './../Components/Contents/Contents';

export default function Home({results}) {
  
  return (
    < >
      <Head>
        <title>Hulu Clone</title>
      </Head>
      {/* Header */}
      <Header/>
      {/* Nav */}
      <Nav/>
      {/* Results */}
      <Contents results={results}/>
    </>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.genre;
  
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res=>res.json())
  return {
    props:{
      results: request.results,
    }
  }
}
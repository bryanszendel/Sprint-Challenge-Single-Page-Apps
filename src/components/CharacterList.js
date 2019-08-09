import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charData, setCharData] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1')
      .then(response => {
        setCharData(response.data.results)
    })
    .catch(error => {
      console.log('ERROR', error)
    })
  }, [])
  console.log(charData)
  return (
    <section className='character-list grid-view'>
      <h2>CHARACTERS</h2>
          <Container style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {charData.map((char, index) => {
              return (
                <CharacterCard char={char} key={index}/>
              )
            })}
          </Container>
    </section>
  )
}

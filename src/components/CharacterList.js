import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Icon, Image } from 'semantic-ui-react'

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
  }, [charData])
  console.log(charData)
  return (
    <section className='character-list grid-view'>
      <h2>TODO: `array.map()` over your state here!</h2>
          <Container style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {charData.map((char, index) => {
              return (
                  <Card style={{width: "20%"}} key={index}>
                    <Image src={char.image} />
                    <Card.Content>
                      <Card.Header>{char.name}</Card.Header>
                      <Card.Meta>Species: {char.species}</Card.Meta>
                      <Card.Description>Location: {char.location.name}</Card.Description>
                      <Card.Description>Origin: {char.origin.name}</Card.Description>
                    </Card.Content>
                  </Card>
              )
            })}
          </Container>
    </section>
  )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Card } from 'semantic-ui-react'

export function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setEpisodeData] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodeData(response.results)
    })
    .catch(error => {
      console.log('ERROR', error)
    })
  }, [episodeData])
  console.log(episodeData)
  return (
    <section className='character-list grid-view'>
      <h2>EPISODESSS</h2>
          <Container style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {episodeData.map((episode, index) => {
              return (
                  <Card style={{width: "20%"}} key={index}>
                    <Card.Content>
                      <Card.Header>{episode.name}</Card.Header>
                      <Card.Meta>Species: {episode.species}</Card.Meta>
                      <Card.Description>Location: {episode.name}</Card.Description>
                      <Card.Description>Origin: {episode.name}</Card.Description>
                    </Card.Content>
                  </Card>
              )
            })}
          </Container>
    </section>
  )
}
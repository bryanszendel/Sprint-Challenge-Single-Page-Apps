import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Card, List } from 'semantic-ui-react'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setEpisodeData] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodeData(response.data.results)
    })
    .catch(error => {
      console.log('ERROR', error)
    })
  }, [episodeData])
  console.log('Episode Data', episodeData)
  return (
    <section>
      <h2>EPISODES</h2>
            {episodeData.map((episode, index) => {
              return (
                  <List celled style={{display: "flex", flexDirection: "column"}}>
                    <List.Item key={index}>
                      <List.Content>
                        <List.Header>{episode.name}</List.Header>
                        <List.Description>Episode: {episode.episode}</List.Description>
                        <List.Description>Air Date: {episode.air_date}</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
              )
            })}
    </section>
  )
}
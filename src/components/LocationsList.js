import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Card, Image } from 'semantic-ui-react'

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locationData, setLocationData] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        setLocationData(response.data.results)
    })
    .catch(error => {
      console.log('ERROR', error)
    })
  }, [locationData])
  console.log('Location Data', locationData)
  return (
    <section className='character-list grid-view'>
      <h2>LOCATIONS</h2>
          <Container style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {locationData.map((location, index) => {
              return (
                  <Card style={{width: "20%"}} key={index}>
                    {/* <Image src={location.image} /> */}
                    <Card.Content>
                      <Card.Header>{location.name}</Card.Header>
                      <Card.Meta>Location Type: {location.type}</Card.Meta>
                      <Card.Description>Dimensions: {location.dimension}</Card.Description>
                    </Card.Content>
                  </Card>
              )
            })}
          </Container>
    </section>
  )
}
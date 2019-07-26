import React from 'react'
import { Card } from 'semantic-ui-react';

export default function LocationCard ({ location, index, residents }) {
  // image={image}
  return (
    <Card style={{width: "20%"}} key={index}>
      <Card.Content>
        <Card.Header>{location.name}</Card.Header>
        <Card.Meta>Location Type: {location.type}</Card.Meta>
        <Card.Description>Dimensions: {location.dimension}</Card.Description>
      </Card.Content>
    </Card>
  )
}

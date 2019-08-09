import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function CharacterCard ({ char, index }) {
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
}

import React from 'react'
import { Text, View } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
} from 'native-base'

const MyHeader = props => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>{props.headerText}</Title>
      </Body>
      <Right />
    </Header>
  )
}

export { MyHeader }

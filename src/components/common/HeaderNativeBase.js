import React from 'react'
import { Text, View, Dimensions } from 'react-native'
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
        <Title style={styles.headerStyle}>{props.headerText}</Title>
      </Body>
      <Right />
    </Header>
  )
}

const deviceWidth = Dimensions.get('window').width - 10

const styles = {
  headerStyle: {
    width: deviceWidth,
  },
}

export { MyHeader }

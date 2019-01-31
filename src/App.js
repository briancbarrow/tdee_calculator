import React from 'react'
import { View, Picker, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import { MyHeader } from './components/common/index'
import Calc from './components/Calc'

const App = () => {
  return (
    <Container>
      <MyHeader headerText="TDEE Calculator" />
      <Calc />
    </Container>
  )
}

export default App

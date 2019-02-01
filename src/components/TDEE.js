import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, CardItem, Text } from 'native-base'

class Calc extends Component {
  render() {
    return (
      <View style={styles.tdeeViewStyles}>
        <Text style={styles.textStyles}>{this.props.tdee}</Text>
      </View>
    )
  }
}

const styles = {
  tdeeViewStyles: {
    marginTop: 40,
  },
  cardStyles: { justifyContent: 'center' },
  textStyles: {
    fontSize: 40,
    alignSelf: 'center',
  },
}
export default Calc

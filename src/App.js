import React from 'react'
import { View, Picker } from 'react-native'
import { Header } from './components/common/index'
import Calc from './components/Calc'

const App = () => {
  return (
    <View>
      <Header headerText="TDEE Calculator" />
      <Calc />
      <Picker
        selectedValue={'this.state.gender'}
        // onValueChange={gender => this.setState({ gender })}
        style={{ height: 50, width: 100 }}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
    </View>
  )
}

export default App

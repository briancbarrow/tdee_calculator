import React, { Component } from 'react'
import { Text, Picker, View } from 'react-native'

import { CardSection, Button, Card, InputText, Spinner } from './common'
import { Dropdown } from 'react-native-material-dropdown'

class Calc extends Component {
  state = {
    weight: '',
    height: '',
    gender: 'Female',
    age: '',
  }

  render() {
    let genderData = [
      {
        value: 'Male',
      },
      {
        value: 'Female',
      },
    ]
    console.log('this.state', this.state)
    return (
      <Card>
        <CardSection>
          <InputText
            label="Height (cm)"
            value={this.state.height}
            placeholder="kg"
            onChangeText={height => this.setState({ height })}
          />
        </CardSection>
        <CardSection>
          <InputText
            label="Weight (kg)"
            value={this.state.weight}
            placeholder="weight"
            onChangeText={weight => this.setState({ weight })}
          />
        </CardSection>

        <View style={styles.dropDownViewStyle}>
          <Dropdown
            containerStyle={styles.pickerContStyle}
            label="Gender"
            value={this.state.gender}
            data={genderData}
          />
        </View>
        <CardSection>
          <InputText
            label="Age (yrs)"
            value={this.state.age}
            placeholder="age"
            onChangeText={age => this.setState({ age })}
          />
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  dropDownViewStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    paddingTop: 0,
  },
  pickerContStyle: {
    width: 100,
    flex: 1,
    borderColor: '#fff',
    borderBottomColor: '#fff',
    paddingLeft: 20,
  },
}

export default Calc

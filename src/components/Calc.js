import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import {
  Label,
  Picker,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from 'native-base'

class Calc extends Component {
  state = {
    weight: '',
    height: '',
    gender: '',
    age: '',
  }

  render() {
    let genderData = [
      {
        value: 'male',
      },
      {
        value: 'female',
      },
    ]
    console.log('this.state', this.state)
    return (
      <Form>
        <Item stackedLabel>
          <Label>Height in kg</Label>
          <Input
            onChangeText={height => {
              this.setState({ height })
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Weight in kg</Label>
          <Input
            onChangeText={weight => {
              this.setState({ weight })
            }}
          />
        </Item>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Select your gender"
            selectedValue={this.state.gender}
            onValueChange={gender => {
              this.setState({ gender })
            }}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </Item>
        <Item stackedLabel>
          <Label>Age (years)</Label>
          <Input
            onChangeText={age => {
              this.setState({ age })
            }}
          />
        </Item>
        <Button block info style={styles.buttonStyle}>
          <Text>Calculate</Text>
        </Button>
      </Form>
    )
  }
}

const deviceWidth = Dimensions.get('window').width - 10

const styles = {
  buttonStyle: {
    marginTop: 50,
  },
}

export default Calc

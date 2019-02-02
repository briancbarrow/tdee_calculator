import React, { Component } from 'react'
import {
  Label,
  Picker,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Spinner,
} from 'native-base'

class CalcForm extends Component {
  state = {
    weight: '',
    height: '',
    gender: '',
    age: '',
    active: false,
  }

  onButtonClick = () => {
    let { weight, height, gender, age, active } = this.state
    // this.setState({ active: !active })

    this.props.onFormSubmit(height, weight, gender, age)
    // this.setState({ active: !active })
  }

  render() {
    return (
      <Form>
        <Item stackedLabel>
          <Label>Height in cm</Label>
          <Input
            keyboardType="number-pad"
            onChangeText={height => {
              this.setState({ height })
            }}
          />
        </Item>
        <Item stackedLabel>
          <Label>Weight in kg</Label>
          <Input
            keyboardType="number-pad"
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
            keyboardType="number-pad"
            onChangeText={age => {
              this.setState({ age })
            }}
          />
        </Item>
        <Button
          block
          info
          style={styles.buttonStyle}
          onPress={this.onButtonClick}
        >
          {this.state.active ? (
            <Spinner color="white" />
          ) : (
            <Text>Calculate</Text>
          )}
        </Button>
      </Form>
    )
  }
}

const styles = {
  buttonStyle: {
    marginTop: 50,
  },
}

export default CalcForm

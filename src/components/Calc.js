import React, { Component } from 'react'
import { View } from 'react-native'
import CalcForm from './CalcForm'
import TDEE from './TDEE'

class Calc extends Component {
  state = {
    tdee: '-',
  }

  onFormSubmit = (height, weight, gender, age) => {
    let bmr
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    bmr *= 1.53
    let tdee = Math.ceil(bmr)

    this.setState({ tdee })
  }
  render() {
    return (
      <View>
        <CalcForm onFormSubmit={this.onFormSubmit} />
        <TDEE tdee={this.state.tdee} />
      </View>
    )
  }
}

export default Calc

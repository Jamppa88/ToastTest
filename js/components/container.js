import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styles } from '../styles/styles';
import * as actionCreators from '../actions/actions';


// This could be done within the class
function showToast(value) {
  ToastAndroid.show("Current value of state: " + value , ToastAndroid.SHORT);
}

class Presentation extends Component {
  static navigationOptions = {
    title: "Frontpage"
  };
  render() {
    const number = this.props.number;
    // Get the navigate-function from props
    const navigate = this.props.navigation.navigate;
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {number}
        </Text>
        <Button title="Increase"
          onPress={this.props.Increment}
        />
        <Button title="Decrease"
          onPress={this.props.Decrement} />
        <Button title="Toast"
          onPress={showToast.bind(this, number)} />
        <Button title="Change screen"
          onPress={() => navigate('Alt')} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    number: state.number
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export const Container = connect(
  mapStateToProps, mapDispatchToProps
)(Presentation);

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import { styles } from '../styles/styles';
import * as actionCreators from '../actions/actions';

// This is done as a class to easily implement the navigationOptions-argument
class Presentation extends Component {
  static navigationOptions = {
    title: "Clear the Screen"
  }
  render() {
    const number = this.props.number;
    return(
      <View style={styles.container}>
        <Text>This is an another page.</Text>
        <Text>State number is {number}.</Text>
        <Button title="Clear state"
          onPress={this.props.Clear} />
      </View>
    );
  }
}

// It is not really worth the effort to use bindActionCreators in
// this case, for we only use one reducer call in this component.
// This is done only for learning purposes.

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

// Final product exported
export const AltContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Presentation);

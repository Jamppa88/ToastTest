import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  ToastAndroid,
  StyleSheet
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
        <View style={styles.textContainer}>
          <Text style={{fontSize: 32}}>
            {number}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback 
            onPress={this.props.Increment}
            useForeground
            background={TouchableNativeFeedback.Ripple('white')}
          ><View><Text style={styles.button}>Increase</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback 
            onPress={this.props.Decrement}
            useForeground
            background={TouchableNativeFeedback.Ripple('white')} 
            ><View><Text style={styles.button}>Decrease</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback 
            onPress={showToast.bind(this, number)} 
            useForeground
            background={TouchableNativeFeedback.Ripple('white')}
           ><View><Text style={styles.button}>Toast</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback 
            background={TouchableNativeFeedback.Ripple('white')}
            onPress={() => navigate('Alt')} 
            useForeground
            ><View><Text style={styles.button}>Change Screen</Text></View></TouchableNativeFeedback>
        </View>
        
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

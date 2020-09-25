import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const title = 'MyApp Jest';
export class Counter extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.h1}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  mainView: {
    flex: 1,
  },
});

export default Counter;

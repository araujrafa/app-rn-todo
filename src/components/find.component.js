import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Find extends React.Component {
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    fontSize: 18,
    margin: 10,
    padding: 10,
  }
}); 
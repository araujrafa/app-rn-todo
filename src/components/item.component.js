import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{data.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  text: {
    fontSize: 18,
  }
}); 
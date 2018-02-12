import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render (){
    const { textSyle, viewStyle} = styles;
    return (
      <View style={ viewStyle }>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
const styles={
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },
  textSyle{
    fonstSize: 25
  }

};

export default Header;

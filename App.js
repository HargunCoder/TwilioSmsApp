import React,{Component} from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/Common/Header.js';
export default class Main extends Component{
  render(){
    return(<Header title='Hello' />);
  }
}
AppRegistry.registerComponent('twilio',()=>Main);

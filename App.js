import React,{Component} from 'react';
import {Text,View, AppRegistry} from 'react-native';
import LoginForm from './src/LoginForm';
import {Header, Button} from './src/Common';

export default class Main extends Component{
  render(){
    return(
      <View>
       <Header title='Login' />
       <LoginForm />
      </View>
    );
  }
}
AppRegistry.registerComponent('twilio',()=>Main);

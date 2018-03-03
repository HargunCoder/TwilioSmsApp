import React,{Component} from 'react';
import { Button, Card, CardItem, Input} from './Common';
//TextInput generally dont have height width so style is important
class LoginForm extends Component {
  //we add state to read value of text
  state = { text :'' };
  render() {
    return (
      <Card>
      <CardItem>
      </CardItem>
        <Input
        style={{ height: 20, width:100}}
         label='Email'
         value={this.state.text}
         onChangeText={text => this.setState( {text})}

       />
      <CardItem />

      <CardItem>
       <Button>
        Log In
       </Button>
      </CardItem>
      </Card>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
    pessoa: 0,
    
    };
    this.soma = this.soma.bind(this);
    this.sair = this.sair.bind(this);
  }

 soma(){
  this.setState({
    pessoa: this.state.pessoa + 1
  });
}
 
  sair(){
    this.setState({
      pessoa: this.state.pessoa - 1,
    });
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.texto}>Contador de Pessoa</Text>
      <Text style={styles.texto}> {this.state.pessoa} </Text>
      <Button style={styles.botao} title="+" onPress={this.soma} />
      <Button title="-" onPress={this.sair} />

      </View>
    );
  }
}
 
export default App;
 

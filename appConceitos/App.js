import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      exibirNome: '',
    };
    
    this.pegaNome = this.pegaNome.bind(this);
 
    this.entrar = this.entrar.bind(this);
  }
 
  entrar(){
    this.setState({
      exibirNome: this.state.nome
    });
  }
 
  pegaNome(texto){
    this.setState({nome: texto});
  }
 
  render(){
    return(
      <View style={styles.container}>
 
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome..."
        onChangeText={this.pegaNome}
      />
 
      <Button title="Exibir Nome" onPress={this.entrar} />
 
      <Text style={styles.texto}> {this.state.exibirNome} </Text>
      </View>
    );
  }
}
 
export default App;

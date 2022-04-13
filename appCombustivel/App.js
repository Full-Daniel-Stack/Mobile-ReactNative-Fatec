import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      n1: '',
      n2: '',
      resultado: ''

    };
    this.calcular = this.calcular.bind(this);

  }

  calcular() {
    if ((this.state.n1 === '') || (this.state.n2 === '')) {
      alert('Digite os dois valores!')
      return;
    }
    var r = this.state.n2 * 0.7
    if(r  < this.state.n1 )
    {
      this.setState({ resultado: 'Abasteça com Alcool'});
    }
    else{
      this.setState({ resultado: 'Abasteça com Gasolina'});
    }
    // this.setState({ resultado: 'Resultado: ' + r });
  }

  render() {
    let img = 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg';

    return (

      <View style={styles.area}>

        <Text style={styles.texto}>Alcool ou Gasolina</Text>

        <Image
          source={{ uri: img }}
          style={{ width: 200, height: 150, borderRadius: 10, marginLeft: 100 }} />

        <TextInput
          style={styles.input}
          placeholder="Preço do Alcool"
          onChangeText={(texto) => this.setState({ n1: texto })}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={(texto) => this.setState({ n2: texto })}
        />

        <Button title="Verificar" onPress={this.calcular} />

        <Text style={styles.texto}>{this.state.resultado} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
  area: {
    top: 100
  }

})

export default App;
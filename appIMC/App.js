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
    var r = this.state.n2 * this.state.n2
    var r = this.state.n1 / r
    var r = r.toFixed(1)
    this.setState({ resultado: r});
   
  }

  render() {
    let img = 'https://guiadafarmacia.com.br/wp-content/uploads/2021/02/corpo-imc.jpg';
    let img2 = 'https://www.ricardogozzano.com.br/wp-content/uploads/2020/03/tabela_imc.png';

    return (

      <View style={styles.area}>

        <Text style={styles.texto}>Calculo do IMC</Text>

        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 150, borderRadius: 10, marginLeft: 70, margin: 20 }} />

        <TextInput
          style={styles.input}
          placeholder="Peso"
          onChangeText={(texto) => this.setState({ n1: texto })}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          onChangeText={(texto) => this.setState({ n2: texto })}
        />

        <Button title="Verificar" onPress={this.calcular} />

        <Text style={styles.texto}>{this.state.resultado} </Text>

        <Image
          source={{ uri: img2 }}
          style={{ width: 400, height: 300, borderRadius: 10, marginLeft: 5, marginTop: 20 }} />

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
    top: 70
  }

})

export default App;
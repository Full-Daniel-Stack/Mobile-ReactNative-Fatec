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
  
    var r = Math.floor(Math.random() * 10)

    this.setState({ resultado: r });
  }

  render() {
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOJw8arsmbk_ye-km1nrKjcCXjpvGJ8FsGFKcqNrOdxnwpVRvJEJqUUcNWyIC8FVvCSE&usqp=CAU';

    return (

      <View style={styles.area}>

        <Text style={styles.texto}>Jogo do Numero Aleatorio</Text>

        <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200, borderRadius: 10, marginLeft: 100, marginTop: 10 }} />

        <Text style={styles.texto}>Pense em um Numero de 0 a 10 </Text>
        
        <Button title="Verificar" onPress={this.calcular} />
        <Text style={styles.texto} >{this.state.resultado} </Text>

        
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
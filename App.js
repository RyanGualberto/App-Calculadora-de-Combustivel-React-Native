import { react, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [Alcool, setAlcool] = useState();
  const [Gas, setGas] = useState();
  const [Resposta, setResposta] = useState();


  function calcular() {
    let calc = (parseFloat(Alcool)) / (parseFloat(Gas));
    if (calc >= 0.7) {
      setResposta("Vai de Gasolina Parceiro");
    }
    else {
      setResposta("Vai de alcool");
    }
  }

  function clear() {
    
    setAlcool ("");
    setGas ("");
  }
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Vou de Que?????
      </Text>
      <Text style={styles.subtitulo}>
        Gasolina vs Alcool
      </Text>

      <View style={styles.bloco}>
        <Text>
          Valor Alcool:
        </Text>
        <TextInput style={styles.entrada1} placeholder='ALCOOL' value={Alcool} keyboardType='numeric' onChangeText={(texto) => setAlcool(texto)} />
      </View>

      <View style={styles.bloco}>
        <Text>
          Valor Gasolina:
        </Text>
        <TextInput style={styles.entrada2} placeholder='GASOLINA' value={Gas} keyboardType='numeric' onChangeText={(texto) => setGas(texto)} />
      </View>

      <View style={styles.bloco3}>
        <TouchableOpacity Style={styles.botao1} onPress={calcular}>
          <Text style={styles.textoBot1}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco4}>
        <Text style={styles.resultado}>
          {Resposta}
        </Text>
      </View>

      <View style={styles.bloco5}>
        <TouchableOpacity Style={styles.botao2} onPress={clear}>
          <Text style={styles.textoBot2}>Limpars</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',
  },
  titulo: {
    fontSize: '30px',
    marginTop: '5%',
  },
  bloco: {
    width: '30%',
    height: '5%',
    textAlign: 'center',
    borderRadius: '25%',
  },
  entrada1:{
    width: '100%',
    height: '50%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#836FFF',
    borderRadius: '25%',

  },
  entrada2:{
    width: '100%',
    height: '50%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#836FFF',
    borderRadius: '25%',

  },
  bloco3: {
    width: '20%',
    height: '3%',
    backgroundColor: '#483D8B',
    borderRadius: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  botao1: {
    backgroundColor: '#483D8B',
    width: '10%',
    height: '100%',
    borderColor: '#483D8B',
  },
  textoBot1: {
    textAlign: 'center',
    fontSize: '20px',
    fontStyle: 'bold',
    opacity: '0.7',


  },
  bloco5: {
    width: '20%',
    height: '3%',
    backgroundColor: '#483D8B',
    borderRadius: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  botao2: {
    backgroundColor: '#483D8B',
    width: '10%',
    height: '100%',
    borderColor: '#483D8B',
  },
  textoBot2: {
    textAlign: 'center',
    fontSize: '20px',
    fontStyle: 'bold',
    opacity: '0.7',
    
  },
});

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
    setResposta(null),
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
        <Text style={styles.textbloc}>
          Valor Alcool:
        </Text>
        <TextInput maxLength={5} style={styles.entrada} placeholder='0.000' value={Alcool} keyboardType='numeric' onChangeText={(texto) => setAlcool(texto)} />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.textbloc}> 
          Valor Gasolina:
        </Text>
        <TextInput maxLength={5} style={styles.entrada} placeholder='0.000' value={Gas} keyboardType='numeric' onChangeText={(texto) => setGas(texto)} />
      </View>

      <View style={styles.blocoBot}>
        <TouchableOpacity style={styles.botao} onPress={calcular}>
          <Text style={styles.textoBot}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blocoVaz}>
        <Text style={styles.resultado}>
          {Resposta}
        </Text>
      </View>

      <View style={styles.blocoBot}>
        <TouchableOpacity style={styles.botao} onPress={clear}>
          <Text style={styles.textoBot}>Limpar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',
  },
  titulo: {
    fontSize: '120%',
    fontWeight: 'bold',
    marginTop: '0px',
    color: '#ffe41c',
  },
  subtitulo: {
    padding: '5%',
    fontSize: '90%',
    fontWeight: 'bold',
    marginTop: '0px',
    color: '#1700ab',
  },
  bloco: {
        alignItems: 'center',
        padding: '5%',
  },
  textbloc: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
   entrada: {
    width: '200px',
    height: '50px',
    borderColor: '#1700ab',
    borderRadius: '15px',
    borderWidth:  '5px',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ffff00',
   },
   blocoVaz: {
     width: '100%',
     height: '50px',
     backgroundColor: '#fffff',
      marginTop: '45px'
   },
   resultado: {
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
   },
   blocoBot: {
      width:'100%',
      height: '5%',
      // backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5%',
   },
   botao: {
     marginTop: '40px',
    backgroundColor:'#ffff00',
    width:'80%',
    height: '45px',
    textAlign:'center',
    borderRadius: 20,
    borderColor: '#1700ab',
    borderWidth: '5px',
   },
   botaoHover: {
    backgroundColor:'#1700ab',
    borderColor: '#ffff00',

   },
   textoBot: {
     fontSize: '25px',
     textAlign: 'center',
     fontWeight: 'bold',

   },
   logo:{
    width: 80,
    height: 70,
    margin: 5,
    borderRadius: 20
  },
  // titulo: {
  //   fontSize: '100%',
  //   fontWeight: 'bold',   
  // },
  // bloco: {
  //   width: '30%',
  //   height: '5%',
  //   textAlign: 'center',
  //   borderRadius: '25%',
  // },
  // entrada1:{
  //   width: '100%',
  //   height: '50%',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#836FFF',
  //   borderRadius: '25%',

  // },
  // entrada2:{
  //   width: '100%',
  //   height: '50%',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#836FFF',
  //   borderRadius: '25%',

  // },
  // bloco3: {
  //   width: '20%',
  //   height: '3%',
  //   backgroundColor: '#483D8B',
  //   borderRadius: '25%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: '3%',
  //   marginBottom: '3%',
  // },
  // botao1: {
  //   backgroundColor: '#483D8B',
  //   width: '10%',
  //   height: '100%',
  //   borderColor: '#483D8B',
  // },
  // textoBot1: {
  //   textAlign: 'center',
  //   fontSize: '20px',
  //   fontStyle: 'bold',
  //   opacity: '0.7',


  // },
  // bloco5: {
  //   width: '20%',
  //   height: '3%',
  //   backgroundColor: '#483D8B',
  //   borderRadius: '25%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: '3%',
  // },
  // botao2: {
  //   backgroundColor: '#483D8B',
  //   width: '10%',
  //   height: '100%',
  //   borderColor: '#483D8B',
  // },
  // textoBot2: {
  //   textAlign: 'center',
  //   fontSize: '20px',
  //   fontStyle: 'bold',
  //   opacity: '0.7',
    
  // },
});

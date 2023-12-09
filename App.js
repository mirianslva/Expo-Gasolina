import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TextInput, StyleSheet, Image } from 'react-native';
import titulo from "./assets/titulo.png"


export default function App() {
  const [quantidade, setQuantidade] = useState('');
  const [kmrodado, setKmrodado] = useState('');
  const [resultado, setResultado] = useState('');

  const valorLitro = 4.50; 

  const calcular = () => {
    if (quantidade === '' || kmrodado === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const quant = parseFloat(quantidade);
    const km = parseFloat(kmrodado);

    if (isNaN(quant) || isNaN(km)) {
      alert('Valores inválidos.');
      return;
    }

    const consumo = km / (quant * valorLitro);
    setResultado(consumo.toFixed(2));
  };

  const limpar = () => {
    setQuantidade('');
    setKmrodado('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
      
        <View>
        <Image
        style={{  height:'400px', width: '390px', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}
        source={titulo}
      />
          <Text style={styles.title}>Valor do combustível  (R$4.50)</Text>
        </View>
        <View>
          <Text>Quantidade Abastecida</Text>
          <View style={styles.input}>
            <TextInput
              value={quantidade}
              onChangeText={(text) => setQuantidade(text)}
              style={styles.texto}
              keyboardType='numeric'
            />
          </View>
        </View>
        <View>
          <Text>Quilômetros Rodados</Text>
          <View style={styles.input}>
            <TextInput
              value={kmrodado}
              onChangeText={(text) => setKmrodado(text)}
              style={styles.texto}
              keyboardType='numeric'
            />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Pressable style={styles.pressable} onPress={calcular}>
            <Text style={styles.resultado}>Calcular</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.title}>{`Resultado: ${resultado} km/Litro`}</Text>
        </View>
        <View>
          <Pressable style={styles.pressable} onPress={limpar}>
            <Text style={styles.resultado}>Limpar dados</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDE7FF',
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 5,
    marginTop: 5,
  },
  texto: {
    fontSize: 16,
  },
  pressable: {
    backgroundColor: '#AFD0EE',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resultado: {
    color: 'black',
  },
});
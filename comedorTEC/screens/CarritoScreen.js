import React from 'react'
import Layout from '../components/Layout'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CarritoList from '../components/CarritoList'
import { Alert } from 'react-native'
import {procesarCompraSP} from '../API'


const procesarCompra = () => {
  //pasar al formato json bonito
  let json = []
  for (var i in Carrito) {
    json.push({ "idAlimento": Carrito[i].id_alimento, "cantidad": Carrito[i].cantidadPorciones })
  }
  if (json == [] || json == 0) {
    Alert.alert('Error!', 'No hay alimentos que procesar')
  }
  else {
    procesarCompraSP(IdUser,json);
  }
}

const CarritoScreen = () => {
  const navigation = useNavigation()

  return (
    <Layout>
      <CarritoList />
      <Text>Total: {Total}</Text>
      {/* BOTON GESTION DE CLIENTES */}
      <TouchableOpacity style={styles.button} onPress={procesarCompra}>
        <Text style={styles.buttonText}> Confirmar Compra </Text>
      </TouchableOpacity>

    </Layout>
  )
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#779ecb',
    width: '90%'
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
})


export default CarritoScreen;
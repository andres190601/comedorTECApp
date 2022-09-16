import React from 'react'
import Layout from '../components/Layout'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CarritoList from '../components/CarritoList'
import { Alert } from 'react-native'
import {procesarCompraSP,generarPF} from '../API'




const CarritoScreen = () => {
  const navigation = useNavigation()


  const intermedioCompra = async ()=>{

  }
  const procesarCompra =  async () => {
  
    //pasar al formato json bonito
    let json = []
    for (var i in Carrito) {
      json.push({ "idAlimento": Carrito[i].id_alimento, "cantidad": Carrito[i].cantidadPorciones })
    }
    if (json == [] || json == 0) {
      Alert.alert('Error!', 'No hay alimentos que procesar')
    }
    else {
      await procesarCompraSP(IdUser,json);
    }
    Carrito = []
    Total = 0
    await generarPF(1)
    Alert.alert('Listo!', 'Compra Procesada',[{ onPress: () => navigation.navigate("Compra-Alimentos del dia",{tipo: '',tiempo:1}) }])
  }


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
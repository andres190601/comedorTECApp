import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'


const AdminScreen = () =>{
    const navigation = useNavigation()
    return (
      <Layout>

        {/* BOTON GESTION DE ALIMENTOS */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Gestión de Alimentos")}>
          <Text style={styles.buttonText}> Gestión de Alimentos </Text>
        </TouchableOpacity>

        {/* BOTON GESTION DE TIEMPOS DE COMIDA */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Gestión de Tiempos de Comida </Text>
        </TouchableOpacity>

        {/* BOTON GESTION DE CLIENTES */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Gestión de Clientes </Text>
        </TouchableOpacity>


      </Layout>
    )
}

const styles = StyleSheet.create({
  button:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius: 5,
    marginBottom:10,
    backgroundColor:'#779ecb',
    width: '90%'
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign : 'center'
  }
})

export default AdminScreen;
import React from 'react'
import Layout from '../components/Layout'
import AlimentosList from '../components/AlimentosList'
import TiposList from '../components/TiposList'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <Layout>
    <AlimentosList />
    <TiposList/>
    {/* BOTON GESTION DE CLIENTES */}
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Agregar Alimento")}>
        <Text style={styles.buttonText}> Agregar Alimento </Text>
      </TouchableOpacity>
  </Layout>
  )};
  

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
  

export default HomeScreen;
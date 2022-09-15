import React from 'react'
import Layout from '../components/Layout'
import ClienteList from '../components/ClienteList'
import TiposList from '../components/TiposList'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ClientesScreen = () => {
  const navigation = useNavigation()
  return (
    <Layout>
    <ClienteList />
    {/* BOTON GESTION DE CLIENTES */}
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
  

export default ClientesScreen;
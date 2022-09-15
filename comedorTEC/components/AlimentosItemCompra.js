import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AlimentosItemCompra = ({ alimento, compraAux }) => {
  const navigation = useNavigation()

  

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity >
        <Text style={styles.itemTitle}> {alimento.nombre_alimento} </Text>
        <Text style={styles.itemTitle}> Codigo: {alimento.id_alimento} </Text>
        <Text style={styles.itemTitle}> Precio: {alimento.precio_alimento} </Text>
        <Text style={styles.itemTitle}> Tipo: {alimento.Tipo} </Text>
        <Text style={styles.itemTitle}> Disponible: {alimento.disponibilidad_alimento.toString()} </Text>
        <Text style={styles.itemTitle}> Tiempo: {alimento.nombre_tiempo_comida} </Text>
      </TouchableOpacity>
      {/* BOTON DELETE ALIMENTO */}
      <TouchableOpacity
        style={{ backgroundColor: '#094293', borderRadius: 5 }}
        onPress={()=> compraAux (alimento.id_alimento)}
      >
        <Text style={{ color: '#FFFFFF' }}>COMPRAR</Text>
        
      </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#779ecb',
    padding: 5,
    marginVertical: 8,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemTitle: {
    color: '#FFFFFF'
  }
})
export default AlimentosItemCompra

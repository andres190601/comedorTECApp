import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CarritoItem = ({ alimento, handleDelete }) => {
  const navigation = useNavigation()

  
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Modificar Alimento",{id: alimento.id_alimento})}
        >
        <Text style={styles.itemTitle}> {alimento.nombre_alimento} </Text>
        <Text style={styles.itemTitle}> Codigo: {alimento.id_alimento} </Text>
        <Text style={styles.itemTitle}> Precio: {alimento.precio_alimento} </Text>
        <Text style={styles.itemTitle}> Tipo: {alimento.Tipo} </Text>
        <Text style={styles.itemTitle}> Disponible: {alimento.disponibilidad_alimento.toString()} </Text>
        <Text style={styles.itemTitle}> Porciones: {alimento.cantidadPorciones} </Text>
        <Text style={styles.itemTitle}> SubTotal: {alimento.subtotal} </Text>
      </TouchableOpacity>

      {/* BOTON DELETE ALIMENTO */}
      <TouchableOpacity 
        style={{ backgroundColor: '#094293', padding: 7, borderRadius: 5 }}
        onPress={()=> handleDelete (alimento.id_alimento)}
        >
        <Text style={{ color: '#FFFFFF' }}>ELIMINAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#779ecb',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemTitle: {
    color: '#FFFFFF'
  }
})
export default CarritoItem

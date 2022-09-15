import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const PedidosItem = ({ pedido, handleDelete }) => {
  const navigation = useNavigation()


  return (
    <View style={styles.itemContainer}>

      <TouchableOpacity>
        <Text style={styles.itemTitle}> Nombre alimento: {pedido.nombre_alimento} </Text>
        <Text style={styles.itemTitle}> Precio: {pedido.precio_alimento} </Text>
        <Text style={styles.itemTitle}> Cantidad: {pedido.cantidad} </Text>
        <Text style={styles.itemTitle}> Subtotal: {pedido.subtotal} </Text>
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
export default PedidosItem

import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const PedidosItem = ({ pedido, handleDelete }) => {
  const navigation = useNavigation()


  
  return (
    
    <View style={styles.itemContainer}>
    
      <TouchableOpacity 
        onPress={() => navigation.navigate("Actualizar Pedido",{id: pedido.id_compra})}
        >
        <Text style={styles.itemTitle}> Codigo compra: {pedido.id_compra} </Text>
        <Text style={styles.itemTitle}> Nombre cliente: {pedido.nombre_persona+" "+pedido.apellido1_persona+" "+pedido.apellido2_persona} </Text>
        <Text style={styles.itemTitle}> Correo cliente: {pedido.correo_usuario} </Text>
        <Text style={styles.itemTitle}> Fecha compra: {pedido.fecha_compra} </Text>
        <Text style={styles.itemTitle}> Activo?: { pedido.activo.toString() } </Text>
      </TouchableOpacity>

      {/* BOTON DELETE Pedido */}
      <TouchableOpacity 
        style={{ backgroundColor: '#094293', padding: 7, borderRadius: 5 }}
        onPress={()=> handleDelete (pedido.id_compra)}
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
export default PedidosItem

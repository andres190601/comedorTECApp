import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const ClienteItem = ({cliente, handleDelete}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
        <TouchableOpacity 
            onPress={() => navigation.navigate("Actualizar usuario",{idPersona: cliente.id_persona})}
            >
            <Text style={styles.itemTitle}> IdPersona: {cliente.id_persona} </Text>
            <Text style={styles.itemTitle}> Nombre: {cliente.nombre_persona} </Text>
            <Text style={styles.itemTitle}> Carnet: {cliente.carnet_persona} </Text>
            <Text style={styles.itemTitle}> Cedula: {cliente.cedula_persona} </Text>
            <Text style={styles.itemTitle}> PrimerApellido: {cliente.apellido1_persona} </Text>
            <Text style={styles.itemTitle}> SegundoApellido: {cliente.apellido2_persona} </Text>
            <Text style={styles.itemTitle}> Edad: {cliente.edad_persona} </Text>
            <Text style={styles.itemTitle}> FechaNacimiento: {cliente.fecha_nacimiento_persona} </Text>
            <Text style={styles.itemTitle}> IdCredenciales: {cliente.id_credenciales_persona} </Text>
            <Text style={styles.itemTitle}> Activo: {cliente.activo} </Text>
        
        </TouchableOpacity>

        {/* BOTON DELETE */}
        <TouchableOpacity 
            style={{ backgroundColor: '#094293', padding: 7, borderRadius: 5 }}
            onPress={()=> handleDelete (cliente.carnet_persona)}
            >
            <Text style={{ color: '#FFFFFF' }}>ELIMINAR</Text>
        </TouchableOpacity>
        </View>
    )
};

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
  export default ClienteItem
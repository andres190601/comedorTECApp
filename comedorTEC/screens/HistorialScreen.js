import Layout from '../components/Layout'
import PedidosList from '../components/PedidosList'
import CustomInput from '../components/CustomInputs/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useForm, Controller } from 'react-hook-form'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import PedidosItem from '../components/PedidosItem'
import { deletePedido, getPedidoIDPersona } from '../API'


const regexNumeros = /^[0-9]*$/

const HistorialScreen = ({ navegation, route }) => {

  const [Pedidos, setPedidos] = useState([])
  const [refreshing, setRefresing] = useState(false)


  //cargar los Pedidos por medio del API
  const loadPedidos = async (id) => {
    const data = await getPedidoIDPersona(route.params.id)
    console.log(data.recordset)
    setPedidos(data.recordset)
  }

  //ejecuta todo cuando carga la lista de Pedidos
  useEffect(() => {
    loadPedidos(route.params.id)
  }, [])

  const handleDelete = async (id) => {
    await deletePedido(id)
    await loadPedidos()
  }
  const renderItem = ({ item }) => {
    return <PedidosItem pedido={item} handleDelete={handleDelete} />
  }

  //funcion para regrescar la lista de Pedidos
  const onRefresh = React.useCallback(async () => {
    setRefresing(true)
    await loadPedidos();
    setRefresing(false)
  })

  const navigation = useNavigation()
  const { control, setValue, handleSubmit, formState: { errors }, } = useForm();


  return (
    <Layout>
      <FlatList
        style={{ width: '100%' }}
        data={Pedidos}
        keyExtractor={(item) => item.id_compra + ''}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />


      {/* BOTON GESTION DE CLIENTES */}
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

export default HistorialScreen;
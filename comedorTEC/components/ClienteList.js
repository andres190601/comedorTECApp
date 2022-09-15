import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import ClienteItem from './ClienteItem'
import { getClientes, deleteCliente, getTipoUsuario } from '../API'

//CARGA TODOS LOS ALIMENTOS
const ClienteList = () => {

  const [clientes, setClientes] = useState([])
  const [refreshing, setRefresing] = useState(false)

  //cargar los Alimentos por medio del API
  const loadClientes = async () => {
    const data = await getClientes()
    setClientes(data)
  }
  
  //ejecuta todo cuando carga la lista de alimentos
  useEffect(() => {
    loadClientes()
  }, [])

  const handleDelete = async (carnet)=>{
    await deleteCliente(carnet);
    await loadClientes();
  }

  const renderItem = ({ item }) => {
    return <ClienteItem cliente={item} handleDelete={handleDelete} />
  }

  //funcion para regrescar la lista de alimentos
  const onRefresh = React.useCallback(async () => {
    setRefresing(true)
    await loadClientes();
    setRefresing(false)
  })

  return (
    <FlatList
      style={{ width: '100%' }}
      data={clientes}
      keyExtractor={(item) => item.id_persona + ''}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  )
}
export default ClienteList


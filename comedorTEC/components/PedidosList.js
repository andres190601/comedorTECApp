import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import PedidosItem from './PedidosItem'
import { getPedidos, deletePedido } from '../API'

//CARGA TODOS LOS Pedidos
const PedidosList = () => {

  const [Pedidos, setPedidos] = useState([])
  const [refreshing, setRefresing] = useState(false)

  //cargar los Pedidos por medio del API
  const loadPedidos = async () => {
    const data = await getPedidos()
    setPedidos(data)
  }

  //ejecuta todo cuando carga la lista de Pedidos
  useEffect(() => {
    loadPedidos()
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

  return (
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
  )
}
export default PedidosList
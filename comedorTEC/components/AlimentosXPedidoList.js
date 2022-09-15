import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import AlimentosXPedidoItem from './AlimentosXPedidoItem'
import { getPedidoID } from '../API'

//CARGA TODOS LOS Pedidos
const AlimentoXPedidoList = ({ idValor }) => {


  const [Pedidos, setPedidos] = useState([])
  const [refreshing, setRefresing] = useState(false)

  //cargar los Pedidos por medio del API
  const loadPedidos = async (idValor) => {
    const data = await getPedidoID(idValor)
    setPedidos(data.recordset)
  }

  //ejecuta todo cuando carga la lista de Pedidos
  useEffect(() => {
    loadPedidos(idValor)
  }, [])

  const renderItem = ({ item }) => {
    return <AlimentosXPedidoItem pedido={item}/>
  }

  //funcion para refrescar la lista de Pedidos
  const onRefresh = React.useCallback(async () => {
    setRefresing(true)
    await loadPedidos();
    setRefresing(false)
  })

  return (
    
    <FlatList
      style={{ width: '100%' }}
      data={Pedidos}
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
export default AlimentoXPedidoList
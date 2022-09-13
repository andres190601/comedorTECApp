import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import AlimentosItem from './AlimentosItem'
import { getAlimentos, deleteAlimento,getTipoAlimento } from '../api'

//CARGA TODOS LOS ALIMENTOS
const AlimentosList = () => {

  const [alimentos, setAlimentos] = useState([])
  const [refreshing, setRefresing] = useState(false)

  //cargar los Alimentos por medio del API
  const loadAlimentos = async () => {
    const data = await getAlimentos()
    setAlimentos(data)
  }
  
  //ejecuta todo cuando carga la lista de alimentos
  useEffect(() => {
    loadAlimentos()
  }, [])

  const handleDelete = async (id)=>{
    await deleteAlimento(id)
    await loadAlimentos()
  }
  const renderItem = ({ item }) => {
    return <AlimentosItem alimento={item} handleDelete={handleDelete} />
  }

  //funcion para regrescar la lista de alimentos
  const onRefresh = React.useCallback(async () => {
    setRefresing(true)
    await loadAlimentos();
    setRefresing(false)
  })

  return (
    <FlatList
      style={{ width: '100%' }}
      data={alimentos}
      keyExtractor={(item) => item.id_alimento + ''}
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
export default AlimentosList


import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { getAlimentos, deleteAlimento, getTipoAlimento } from '../API'
import CarritoItem from './CarritoItem'
import { useNavigation } from '@react-navigation/native'
//CARGA TODOS LOS ALIMENTOS
const CarritoList = () => {
  const navigation = useNavigation()
  const [alimentos, setAlimentos] = useState([])
  const [refreshing, setRefresing] = useState(false)

  //cargar los Alimentos por medio del API
  const loadAlimentos = async () => {
    setAlimentos(Carrito)
  }

  //ejecuta todo cuando carga la lista de alimentos
  useEffect(() => {
    loadAlimentos()
  }, [])

  const removeById = (arr, id) => {
    const requiredIndex = arr.findIndex(el => {
      return el.id_alimento === id;
    });
    if (requiredIndex === -1) {
      return false;
    };
    return !!arr.splice(requiredIndex, 1);
  };

  const setTotal = () => {
    Total = 0;
    for (var i in Carrito) {
      Total = Total + parseInt(Carrito[i].subtotal, 10);
    }
  }

  const handleDelete = async (id) => {
    removeById(Carrito, id)
    setTotal();
    await loadAlimentos()
    navigation.navigate("Compra-Alimentos del dia", { tipo: '', tiempo: 1 })
  }
  const renderItem = ({ item }) => {
    return <CarritoItem alimento={item} handleDelete={handleDelete} />
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
export default CarritoList


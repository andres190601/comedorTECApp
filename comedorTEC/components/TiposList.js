import React, { useState, useEffect } from 'react'
import {getTipoAlimento } from '../api'
import SelectDropdown from 'react-native-select-dropdown'
import Layout from './Layout'

//CARGA TODOS LOS ALIMENTOS
const TiposList = () => {

  const [tiposAlimentos, setTiposAlimentos] = useState([]) //array para lista desplejable tipos

  //cargar los Tipos de Alimentos por medio del API
  const loadTiposAlimentos = async () => {
    const data = await getTipoAlimento()
    console.log(data)

    setTiposAlimentos(data)
  }
  //ejecuta todo cuando carga la lista de alimentos
  useEffect(() => {
    loadTiposAlimentos()
  }, [])




  return (
    <Layout></Layout>
  )
}
export default TiposList


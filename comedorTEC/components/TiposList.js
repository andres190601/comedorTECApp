import React, { useState, useEffect } from 'react'
import {getTipoAlimento } from '../API'
import SelectList from 'react-native-dropdown-select-list'
import Layout from './Layout'

//CARGA TODOS LOS ALIMENTOS
const TiposList = () => {

  const [tiposAlimentos, setTiposAlimentos] = useState([]) //array para lista desplejable tipos
  const [selected, setSelected] = React.useState(""); //for the select list

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
    <SelectList
      data={tiposAlimentos}
      setSelected={setSelected}
      placeholder='Tipo de Alimento'/>
  )
}
export default TiposList


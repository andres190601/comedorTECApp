import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logoTEC.png'
import CustomInput from '../components/CustomInputs/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useForm, Controller } from 'react-hook-form'
import { modificarAlimento } from '../API'
import { getTipoAlimento ,getAlimentosID} from '../API'
import SelectList from 'react-native-dropdown-select-list'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const regexNumeros = /^[0-9]*$/



const ModAlimentosScreen = ({navegation, route}) => {
  const navigation = useNavigation()
  //PARA CARGAR SELECT TIPO DE ALIMENTOS------------------------------------------------------
  const [tiposAlimentos, setTiposAlimentos] = useState([]) //array para lista desplejable tipos
  const [selected, setSelected] = React.useState(""); //for the select list
  const [selectedDisponible, setSelectedDisponible] = React.useState(""); //for the select list

  //CARGAR INFO DEL ALIMENTO 
  const [alimentoInfo, setAlimentoInfo] = useState([]) //array para lista desplejable tipos
  //cargar los Alimentos por medio del API
  const loadAlimento = async () => {
    const data = await getAlimentosID(route.params.id)
    setAlimentoInfo(data)
  }

  
  const { control, setValue, handleSubmit, formState: { errors }, } = useForm();
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const { height } = useWindowDimensions();

  const GuardarCambiosPressed = async (data) => {
    if(data.nombre == undefined){
      data.nombre = ''
    }
    if(data.precio == undefined){
      data.precio = ''
    }
    console.log("selectedDisponible")
    console.log(selectedDisponible)
    if(selectedDisponible==1){
      const res = await modificarAlimento(route.params.id, data.nombre,selected,data.precio,1)
      validacion(res.returnValue)
    }
    else{
      const res = await modificarAlimento(route.params.id, data.nombre,selected,data.precio,selectedDisponible)
      validacion(res.returnValue)
    }
    
    
  };

  const validacion=(retorno)=>{
    if(retorno == 0){
      Alert.alert('Listo!','Modificacion exitosa',[{onPress:()=>navigation.navigate("AdminScreen")}])
    }
  };

  const dataDisponible = [//SE DESPLIEGA EN EL SELECT DE DISPONIBILIDAD
    { "key": 1, "value": "Disponible" },
    { "key": 0, "value": "No Disponible" }
  ];

  //cargar los Tipos de Alimentos por medio del API
  const loadTiposAlimentos = async () => {
    const data = await getTipoAlimento()
    setTiposAlimentos(data)
  }
  
  useEffect(() => {
    loadTiposAlimentos()
    loadAlimento()
    
  }, [])

  //----------------------
  let [alimento, setAlimento] = useState({
    nombre: '',
    precio: '',
    idTipo: '',
    disponible: '',

  })


  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <CustomInput
          placeholder="Nombre"
          name="nombre"
          value=""
          control={control}
          
        />
        <CustomInput
          placeholder="Precio"
          name="precio"
          control={control}
          type='numeric'
          rules={{  pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" } }}
        />

        <SelectList
          data={dataDisponible}
          setSelected={setSelectedDisponible}
          placeholder='Disponible'
          boxStyles ={
            {marginVertical:20, marginHorizontal:10,width: 200}}
        />

        <SelectList 
          data={tiposAlimentos}
          setSelected={setSelected}
          placeholder='Tipo de Alimento'
          boxStyles ={
            {marginVertical:20, marginHorizontal:10,width:200}}
      

        />
       
        
        <CustomButton text="Guardar Cambios" onPress={handleSubmit(GuardarCambiosPressed)} />

      </View>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
  hiddenInput: {
    width: 0,
    height: 0,
  },
});

export default ModAlimentosScreen
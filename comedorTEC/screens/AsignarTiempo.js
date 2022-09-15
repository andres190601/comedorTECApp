import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logoTEC.png'
import CustomButton from '../components/CustomButton/CustomButton'
import { useForm, Controller } from 'react-hook-form'
import {agregarAlimento,getAlimentosSpecial,getTiempos ,asignarTiempoComida} from '../API'
import SelectList from 'react-native-dropdown-select-list'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AsignarTiempo = ({ navegation }) => {
    const navigation = useNavigation()

    //PARA CARGAR SELECT TIPO DE ALIMENTOS------------------------------------------------------
    const [alimentosDisponibles, setTiposAlimentosDisponibles] = useState([]) //array para lista desplejable alimentos
    const [tiempos, setTiempos] = useState([]) //array para lista desplejable alimentos
    const [selected, setSelected] = React.useState(""); //for the select list
    const [selectedTiempo, setSelectedTiempo] = React.useState(""); //for the select list

    //cargar los  Alimentos por medio del API
    const loadAlimentosSpecial = async () => {
        const data = await getAlimentosSpecial()
        setTiposAlimentosDisponibles(data)
    }

    //cargar los Tiempos de Alimentos por medio del API
    const loadTiempos = async () => {
        const data = await getTiempos()
        setTiempos(data)
    }

    useEffect(() => {
        loadAlimentosSpecial()
        loadTiempos()
    }, [])

    const { control, setValue, handleSubmit, formState: { errors }, } = useForm();
    const { height } = useWindowDimensions();

    const GuardarCambiosPressed = async () => {
        //console.log(selected)
        //console.log(selectedTiempo)
        if (selected == '') {
            Alert.alert('Error!', 'Seleccione un Alimento')
        }
        else if(selectedTiempo == ''){
            Alert.alert('Error!', 'Seleccione un Tiempo')
        }
        else {
            const res = await asignarTiempoComida(selected, selectedTiempo)
            //console.log(res)
            validacion(res.returnValue)
        }
    };

    const validacion = (retorno) => {
        if (retorno == 0) {
            Alert.alert('Listo!', 'Alimento Asignado Correctamente', [{ onPress: () => navigation.navigate("AdminScreen") }])
        }
        else {
            if (retorno == 5){
                Alert.alert('Error!', 'El alimento ya se encuentra asignado en ese tiempo')
            }
        else{
            Alert.alert('Error!', 'Error de insercion, por favor intente de nuevo')
        }}
    };

    //------------------------------------------------------------------------------------------

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

                <SelectList
                    data={tiempos}
                    setSelected={setSelectedTiempo}
                    placeholder='Tiempo'
                    boxStyles={
                        { marginVertical: 20, marginHorizontal: 10, width: 200 }}
                />

                <SelectList
                    data={alimentosDisponibles}
                    setSelected={setSelected}
                    placeholder='Alimento'
                    boxStyles={
                        { marginVertical: 20, marginHorizontal: 10, width: 200 }}
                />


                <CustomButton text="Asignar" onPress={handleSubmit(GuardarCambiosPressed)} />

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

export default AsignarTiempo
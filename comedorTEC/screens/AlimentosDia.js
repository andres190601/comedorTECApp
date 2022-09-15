import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logoTEC.png'
import CustomButton from '../components/CustomButton/CustomButton'
import { useForm, Controller } from 'react-hook-form'
import { agregarAlimento, getAlimentosSpecial, getTiempos, asignarTiempoComida, getAlimentosXTiempo } from '../API'
import SelectList from 'react-native-dropdown-select-list'
import { Alert, FlatList, RefreshControl,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Layout from '../components/Layout'
import AlimentosItem from '../components/AlimentosItem'
import AlimentosItemAux from '../components/AlimentosItemAux' 


const AlimentoDia = ({ navegation, route }) => {
    const navigation = useNavigation()

    //PARA CARGAR SELECT TIPO DE ALIMENTOS------------------------------------------------------
    const [tiempos, setTiempos] = useState([]) //array para lista desplejable a
    const [selectedTiempo, setSelectedTiempo] = React.useState(""); //for the select list

    //cargar los Tiempos de Alimentos por medio del API
    const loadTiempos = async () => {
        const data = await getTiempos()
        setTiempos(data)
    }

    const [alimentos, setAlimentos] = useState([])
    const [refreshing, setRefresing] = useState(false)


    //cargar los Alimentos por medio del API
    const loadAlimentos = async (tiempo) => {
        const data = await getAlimentosXTiempo(tiempo)
        setAlimentos(data)
    }

    const handleFiltro = async (tiempo) => {
        if (tiempo == '') {
            Alert.alert('Error!', 'Seleccione un Tiempo')
        }
        else{
            await loadAlimentos(tiempo)
        }
        
    }
    const renderItem = ({ item }) => {
        return <AlimentosItemAux alimento={item}  />
    }

    //funcion para regrescar la lista de alimentos
    const onRefresh = React.useCallback(async () => {
        setRefresing(true)
        await loadAlimentos();
        setRefresing(false)
    })

    useEffect(() => {
        loadTiempos()
        let tiempoAux = route.params.id
        loadAlimentos(tiempoAux)
    }, [])


    //------------------------------------------------------------------------------------------

    return (

        <Layout>
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
            <SelectList
                    data={tiempos}
                    setSelected={setSelectedTiempo}
                    placeholder='Tiempo'
                    boxStyles={
                        { marginVertical: 20, marginHorizontal: 10, width: 200 }}
                />


            <TouchableOpacity style={styles.button} onPress={() => handleFiltro(selectedTiempo)}>
                <Text style={styles.buttonText}> BUSCAR </Text>
            </TouchableOpacity>
        </Layout>



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
    button:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius: 5,
        marginBottom:10,
        backgroundColor:'#779ecb',
        width: '90%'
      },
      buttonText: {
        color: '#FFFFFF',
        textAlign : 'center'
      }
});

export default AlimentoDia
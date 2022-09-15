import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
    agregarAlimento, getAlimentosSpecial, getTiempos, asignarTiempoComida,
    getAlimentosXTiempo, getTipoAlimento, getAlimentoxTiempoxTipo, addToCar, getAlimentosID
} from '../API'
import SelectList from 'react-native-dropdown-select-list'
import { Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Layout from '../components/Layout'
import AlimentosItemCompra from '../components/AlimentosItemCompra'

const AlimentosClienteScreen = ({ navegation, route }) => {
    const navigation = useNavigation()

    const [selectedCantidad, setSelectedCantidad] = React.useState(""); //for the select list
    const dataCantidad = [//SE DESPLIEGA EN EL SELECT DE DISPONIBILIDAD
        { "key": 1, "value": "1" },
        { "key": 2, "value": "2" },
        { "key": 3, "value": "3" },
        { "key": 4, "value": "4" },
        { "key": 5, "value": "5" }
    ];

    //PARA CARGAR SELECT TIPO DE ALIMENTOS------------------------------------------------------
    const [tiempos, setTiempos] = useState([]) //array para lista desplejable a
    const [selectedTiempo, setSelectedTiempo] = React.useState(""); //for the select list
    const [titulo, setTitulo] = React.useState(""); //for the select list

    const [tiposAlimentos, setTiposAlimentos] = useState([]) //array para lista desplejable tipos
    const [selectedTipo, setSelectedTipo] = React.useState(""); //for the select list

    //cargar los Tiempos de Alimentos por medio del API
    const loadTiempos = async () => {
        const data = await getTiempos()
        setTiempos(data)
    }

    //cargar los Tipos de Alimentos por medio del API
    const loadTiposAlimentos = async () => {
        const data = await getTipoAlimento()
        setTiposAlimentos(data)
    }

    const [alimentos, setAlimentos] = useState([])
    const [refreshing, setRefresing] = useState(false)


    //cargar los Alimentos por medio del API
    const loadAlimentos = async (tipo, tiempo) => {
        const data = await getAlimentoxTiempoxTipo(tipo, tiempo)
        tiempo = route.params.tiempo
        tipo = route.params.tipo
        setAlimentos(data)
    }

    const compraAux = async (id) => {
  
        //BUSCAR ALIMENTOXID
        const data = await getAlimentosID(id)
        if (selectedCantidad == '' || selectedCantidad == undefined) {
            
            var item = Carrito.find(x => x.id_alimento == id);
            if (item) {
                item.cantidadPorciones = item.cantidadPorciones + 1;
                item.subtotal = (item.cantidadPorciones) * item.precio_alimento;
                Total +=  item.subtotal ;
            }
            else{
                data[0].cantidadPorciones = 1;
                data[0].subtotal = (data[0].cantidadPorciones) * data[0].precio_alimento;
                Carrito.push(data[0])
                Total +=  data[0].subtotal ;
            }
            
            Alert.alert('Añadido!', 'Alimento añadido. Porciones: ' + '1')
        }
        else {
          
            var item = Carrito.find(x => x.id_alimento == id);
            if (item) {
                
                item.cantidadPorciones = item.cantidadPorciones + selectedCantidad;
                item.subtotal = (item.cantidadPorciones) * item.precio_alimento;
                Total +=  item.subtotal ;
            }
            else{
                data[0].cantidadPorciones = selectedCantidad;
                data[0].subtotal = (data[0].cantidadPorciones) * data[0].precio_alimento;
                Carrito.push(data[0])
                Total +=  data[0].subtotal ;
            }
            
            Alert.alert('Añadido!', 'Alimento añadido. Porciones: ' + selectedCantidad)
        }
    }

    const handleFiltro = async (tipo, tiempo) => {
        if (tiempo == '') {
            Alert.alert('Error!', 'Seleccione un Tiempo')
        }
        else {
            await loadAlimentos(tipo, tiempo)
        }

    }
    const renderItem = ({ item }) => {
        return <AlimentosItemCompra alimento={item} compraAux={compraAux} />
    }

    //funcion para regrescar la lista de alimentos
    const onRefresh = React.useCallback(async () => {
        setRefresing(true)
        await loadAlimentos(route.params.tipo, route.params.tiempo);
        setRefresing(false)
    })

    //PARA EL TITULO
    let tiempo = route.params.tiempo
    let tipo = route.params.tipo

    useEffect(() => {
        loadTiempos()
        loadTiposAlimentos()
        tiempo = route.params.tiempo
        tipo = route.params.tipo
        loadAlimentos(tipo, tiempo)
    }, [])


    //------------------------------------------------------------------------------------------

    return (

        <Layout>
            <Text>Cantidad a Comprar:</Text>
            <SelectList
                data={dataCantidad}
                setSelected={setSelectedCantidad}
                placeholder='1'
                boxStyles={
                    { marginVertical: 10, marginHorizontal: 10, width: 200 }}
            />
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
            <Text>Filtros:</Text>
            <SelectList
                data={tiempos}
                setSelected={setSelectedTiempo}
                placeholder='Desayuno'
                boxStyles={
                    { marginVertical: 10, marginHorizontal: 10, width: 200 }}
            />
            <SelectList
                data={tiposAlimentos}
                setSelected={setSelectedTipo}
                placeholder='Tipo de Alimento'
                boxStyles={
                    { marginVertical: 20, marginHorizontal: 10, width: 200 }}
            />

            <TouchableOpacity style={styles.button} onPress={() => handleFiltro(selectedTipo, selectedTiempo)}>
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
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#779ecb',
        width: '90%'
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center'
    }
});

export default AlimentosClienteScreen
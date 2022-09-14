import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { getTipoAlimento } from '../API'
import SelectList from 'react-native-dropdown-select-list'
import { RadioButton } from 'react-native-paper';
import Layout from "../components/Layout";
import { agregarAlimento } from "../API";

const NewAlimento = () => {

    //PARA CARGAR SELECT TIPO DE ALIMENTOS------------------------------------------------------
    const [tiposAlimentos, setTiposAlimentos] = useState([]) //array para lista desplejable tipos
    const [selected, setSelected] = React.useState(""); //for the select list
    const [selectedDisponible, setSelectedDisponible] = React.useState(""); //for the select list

    const dataDisponible = [
        { "key": 1, "value": "Disponible" },
        { "key": 0, "value": "No Disponible" }
    ];

    //cargar los Tipos de Alimentos por medio del API
    const loadTiposAlimentos = async () => {
        const data = await getTipoAlimento()
        console.log(data)
        setTiposAlimentos(data)
    }
    
    useEffect(() => {
        loadTiposAlimentos()
    }, [])


    //------------------------------------------------------------------------------------------
    let [alimento, setAlimento] = useState({
        nombre: '',
        precio: '',
        idTipo: '',
        disponible: '',

    })
 
    const handleChange = (name, value) => {
        setAlimento({ ...alimento, [name]: value })
    };

    const handleSubmit = () => {
        console.log(alimento.nombre)
        agregarAlimento(alimento.nombre, selected, alimento.precio, selectedDisponible)
    }

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={(text) => handleChange ("nombre", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                onChangeText={(text) => handleChange ("precio", text)}
            />

            <SelectList style={{ width: "100%"}}
                data={tiposAlimentos}
                setSelected={setSelected}
                placeholder='Tipo de Alimento'
                
            />

            <SelectList
                data={dataDisponible}
                setSelected={setSelectedDisponible}
                placeholder='Disponible'
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}> Guardar Alimento </Text>
            </TouchableOpacity>

        </Layout>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '90%',
        marginBottom: 7,
        borderWidth: 1,
        fontSize: 16,
        height: 35,
        padding: 4,
        textAlign: 'center',
        borderRadius: 5
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
    

})
export default NewAlimento;
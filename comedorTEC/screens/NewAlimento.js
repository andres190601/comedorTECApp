import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logoTEC.png'
import CustomInput from '../components/CustomInputs/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useForm, Controller } from 'react-hook-form'
import { modificarAlimento } from '../API'
import { getTipoAlimento, agregarAlimento } from '../API'
import SelectList from 'react-native-dropdown-select-list'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const regexNumeros = /^[0-9]*$/



const NewAlimento = ({ navegation, route }) => {
    const navigation = useNavigation()
    //PARA CARGAR SELECT TIPO DE ALIMENTOS------------------------------------------------------
    const [tiposAlimentos, setTiposAlimentos] = useState([]) //array para lista desplejable tipos
    const [selected, setSelected] = React.useState(""); //for the select list
    const [selectedDisponible, setSelectedDisponible] = React.useState(""); //for the select list

    const dataDisponible = [//SE DESPLIEGA EN EL SELECT DE DISPONIBILIDAD

        { "key": 0, "value": "No Disponible" },
        { "key": 1, "value": "Disponible" }
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

    const { control, setValue, handleSubmit, formState: { errors }, } = useForm();
    const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
    const { height } = useWindowDimensions();

    const GuardarCambiosPressed = async (data) => {
        //crearCuenta(data);
        console.log(data)
        if (data.nombre == undefined) {
            data.nombre = ''
        }
        if (data.precio == undefined) {
            data.precio = ''
        }
        console.log(selected)
        console.log(selectedDisponible)
        if (selected == '') {
            Alert.alert('Error!', 'Seleccione un tipo')
        }


        else {
            console.log(data)
            console.log(selected)
            console.log(selectedDisponible)
            const res = await agregarAlimento(data.nombre, selected, data.precio, selectedDisponible)
            console.log(res)
            validacion(res.returnValue)
        }


    };

    const validacion = (retorno) => {
        if (retorno == 0) {
            Alert.alert('Listo!', 'Alimento Agregado Correctamente', [{ onPress: () => navigation.navigate("AdminScreen") }])
        }
        if (retorno == 1) {
            Alert.alert('Error!', 'Error de insercion')
        }
    };






    //----------------------
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

    const handleSubmit2 = () => {
        console.log(alimento.nombre)
        agregarAlimento(alimento.nombre, selected, alimento.precio, selectedDisponible)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || fechaNacimiento;
        setShow()
        setFechaNacimiento(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);
        setValue("fechaNacimiento", fDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <CustomInput
                    placeholder="Nombre"
                    name="nombre"
                    value=""
                    control={control}
                    rules={{ required: "Este campo es requerido" }}
                />
                <CustomInput
                    placeholder="Precio"
                    name="precio"
                    control={control}
                    type='numeric'
                    rules={{ required: "Este campo es requerido", pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" } }}
                />

                <SelectList
                    data={dataDisponible}
                    setSelected={setSelectedDisponible}
                    placeholder='No Disponible'
                    boxStyles={
                        { marginVertical: 20, marginHorizontal: 10, width: 200 }}
                />

                <SelectList
                    data={tiposAlimentos}
                    setSelected={setSelected}
                    placeholder='Tipo de Alimento'
                    boxStyles={
                        { marginVertical: 20, marginHorizontal: 10, width: 200 }}


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

export default NewAlimento
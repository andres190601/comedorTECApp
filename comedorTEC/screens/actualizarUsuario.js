import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInputs/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native'
import { actualizarUsuario } from '../API'
import { useNavigation } from '@react-navigation/native'

const regexCorreo = /^[A-Za-z0-9._%+-]+@estudiantec\.cr$/
const regexNumeros = /^[0-9]*$/


const ActualizarUsuario = ({ navegation, route }) => {

    const idPersona = route.params.idPersona;

    const navigation = useNavigation();



    const actualizarPressed = (data) => {
        actualizarUsuario(
            idPersona,
            data.correo,
            data.contrasenia,
            data.nombre,
            data.apellido1,
            data.apellido2,
            data.carnet,
            data.cedula,
            data.edad,
            data.fechaNacimiento);
    };

    const { control, setValue, handleSubmit, formState: { errors }, } = useForm();

    const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
    const [show, setShow] = useState(false);
    const [textDate, setText] = useState('Empty');


    const { height } = useWindowDimensions();


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
                <CustomInput
                    placeholder="Nombre"
                    name="nombre"
                    control={control}
                />
                <CustomInput
                    placeholder="Primer Apellido"
                    name="apellido1"
                    control={control}
                />
                <CustomInput
                    placeholder="Segundo Apellido"
                    name="apellido2"
                    control={control}
                />
                <CustomInput
                    placeholder="Carnet estudiantil"
                    name="carnet"
                    control={control}
                    type='numeric'
                    rules={{ pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" }}}
                />
                <CustomInput
                    placeholder="Cédula"
                    name="cedula"
                    control={control}
                    type='numeric'
                    rules={{ pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" } }}
                />
                <CustomInput
                    placeholder="Edad (en años)"
                    name="edad"
                    control={control}
                    type='numeric'
                    rules={{ pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" } }}
                />
                <CustomButton
                    text="Fecha de nacimiento"
                    onPress={() => showMode('date')}
                />
                <Controller
                    control={control}
                    name='fechaNacimiento'
                    render={({ field: { onChange, onBlur } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={textDate}
                            editable={false}
                            selectTextOnFocus={false}
                        />
                    )}
                />
                <CustomInput
                    placeholder="Correo electrónico"
                    name="correo"
                    control={control}
                    rules={{ pattern: { value: regexCorreo, message: 'Correo electrónico inválido (asegúrese que el dominio sea "estudiantec.cr")' } }}
                />
                <CustomInput
                    placeholder="Contraseña"
                    name="contrasenia"
                    control={control}
                    secureTextEntry={true}
                    rules={{ minLength: { value: 6, message: "La contraseña debe de tener al menos 6 caracteres" } }}
                />


                {show && (
                    <DateTimePicker
                        testID='datePicker'
                        value={fechaNacimiento}
                        mode='date'
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />
                )}



                <CustomButton text="Actualizar" onPress={handleSubmit(actualizarPressed)} />

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

export default ActualizarUsuario;
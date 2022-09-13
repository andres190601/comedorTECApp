import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/images/logoTEC.png'
import CustomInput from '../components/CustomInputs/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native'
import { crearCuenta } from '../API'

const regexCorreo = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const regexNumeros = /^[0-9]*$/

const RegistrarPressed = (data) => {
    crearCuenta(data);
};

const OnSignInPressed = () => {

};


const register = () => {
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
                <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <CustomInput
                    placeholder="Nombre"
                    name="nombre"
                    control={control}
                    rules={{ required: "Este campo es requerido" }}
                />
                <CustomInput
                    placeholder="Primer Apellido"
                    name="apellido1"
                    control={control}
                    rules={{ required: "Este campo es requerido" }}
                />
                <CustomInput
                    placeholder="Segundo Apellido"
                    name="apellido2"
                    control={control}
                    rules={{ required: "Este campo es requerido" }}
                />
                <CustomInput
                    placeholder="Carnet estudiantil"
                    name="carnet"
                    control={control}
                    type='numeric'
                    rules={{ required: "Este campo es requerido", pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" }}}
                />
                <CustomInput
                    placeholder="Cédula"
                    name="cedula"
                    control={control}
                    type='numeric'
                    rules={{ required: "Este campo es requerido", pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" } }}
                />
                <CustomInput
                    placeholder="Edad (en años)"
                    name="edad"
                    control={control}
                    type='numeric'
                    rules={{ required: "Este campo es requerido", pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" } }}
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
                    rules={{ required: "Este campo es requerido", pattern: { value: regexCorreo, message: "Correo electrónico inválido" } }}
                />
                <CustomInput
                    placeholder="Contraseña"
                    name="contrasenia"
                    control={control}
                    secureTextEntry={true}
                    rules={{ required: "Este campo es requerido", minLength: { value: 6, message: "La contraseña debe de tener al menos 6 caracteres" } }}
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



                <CustomButton text="Registrarme" onPress={handleSubmit(RegistrarPressed)} />


                <CustomButton text="Tengo una cuenta, ingresar" onPress={OnSignInPressed} type='tertiary' />
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

export default register
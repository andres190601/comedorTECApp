import { View, Text, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/images/logoTEC.png'
import CustomInput from '../components/CustomInputs/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useForm } from 'react-hook-form'
import { logguearUsuario } from '../API'
import { useNavigation } from '@react-navigation/native'

const regexCorreo = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/




const Login = () => {

    const navigation = useNavigation()

    const { height } = useWindowDimensions();

    const { control, handleSubmit, formState: { errors }, } = useForm();

    const OnSignInPressed = (data) => {
        (async () => {
            const resultado = await logguearUsuario(data);
            if (resultado.hasOwnProperty('Error')) {
                Alert.alert('OOPS', 'No se ha encontrado un usuario con las combinación de credenciales suministradas', [
                    { text: 'Entendido' }
                ]);
            }
            else if (resultado.hasOwnProperty('emailUsuario')) {
                IdUser = resultado.IdPersona;
                const tipoUsuario = resultado.IdTipoUsuario
                if(tipoUsuario == 1){
                    Alert.alert('Bienvenido', 'Se ha ingresado correctamente como usuario', [
                        { text: 'Ok', onPress: () => navigation.navigate("Compra-Alimentos del dia",{tipo: '',tiempo:1}) }
                    ]);
                }
                else if(tipoUsuario == 0){
                    Alert.alert('Bienvenido', 'Se ha ingresado correctamente como administrador', [
                        { text: 'Ok', onPress: () => navigation.navigate("AdminScreen") }
                    ]);
                }
            }
            else {
                Alert.alert('OOPS', 'Ha ocurrido un error a la hora de ingresar, por favor inténtelo de nuevo', [
                    { text: 'Ok' }
                ]);
            }
        })()

    };

    const registrarPressed = () => {

        navigation.navigate("Registrar usuario")
    };

    return (
        <View style={styles.root}>
            <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

            <CustomInput
                name="email"
                placeholder="Correo electrónico"
                control={control}
                rules={{ required: "Este campo es requerido", pattern: { value: regexCorreo, message: "Correo electrónico inválido" } }}
            />

            <CustomInput
                name="password"
                placeholder="Contraseña"
                control={control}
                secureTextEntry={true}
                rules={{ required: "Este campo es requerido", minLength: { value: 6, message: "La contraseña debe de tener al menos 6 caracteres" } }}
            />

            <CustomButton text="Ingresar" onPress={handleSubmit(OnSignInPressed)} />




            <CustomButton text="No tengo una cuenta, registrarme" onPress={registrarPressed} type='tertiary' />
        </View>

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
});

export default Login
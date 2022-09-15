import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Platform, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logoTEC.png'
import CustomInput from '../components/CustomInputs/CustomInput'
import CustomButton from '../components/CustomButton/CustomButton'
import { useForm, Controller } from 'react-hook-form'
import { actualizarPedido } from '../API'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AlimentosXPedidoList from '../components/AlimentosXPedidoList'
import DateTimePicker from '@react-native-community/datetimepicker';

const regexNumeros = /^[0-9]*$/



const ActualizarPedidoScreen = ({ navegation, route }) => {
  const navigation = useNavigation()

  const { control, setValue, handleSubmit, formState: { errors }, } = useForm();
  const [fechaCompra, setFechaNacimiento] = useState(new Date());
  const [show, setShow] = useState(false);
  const [textDate, setText] = useState('Empty');
  const { height } = useWindowDimensions();


  const [pedidoInfo, setPedidoInfo] = useState([])
  const loadPedido = async () => {
    const data = await getAlimentosID(route.params.id)
    setAlimentoInfo(data)
  }

  const GuardarCambiosPressed = async (data) => {

    if (data.id_cliente == undefined) {
      data.id_cliente = ''
    }
    if (data.fechaCompra == undefined) {
      data.fechaCompra = null
    }
    const res = await actualizarPedido(data.id_cliente, data.fechaCompra, route.params.id)
    validacion(res.returnValue)
  };

  const validacion = (retorno) => {
    if (retorno == 0) {
      Alert.alert('Éxito', 'El pedido se ha modificado exitosamente', [
        { text: 'Ok', onPress: () => navigation.navigate("Gestión de Pedidos") }
    ]);
    }
    else if (retorno == 1){
      Alert.alert('OOPS', 'El ID persona suministrado es inválido', [
        { text: 'Entendido' }
    ]);
    }
  };



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || fechaCompra;
    setShow()
    setFechaNacimiento(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate);
    setValue("fechaCompra", fDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
  };

  return (
    <View style={styles.root}>

      <AlimentosXPedidoList idValor={route.params.id} />

      <CustomInput
        placeholder="ID cliente"
        name="id_cliente"
        control={control}
        type='numeric'
        rules={{ pattern: { value: regexNumeros, message: "Este campo solo admite valores numéricos" } }}
      />


      <CustomButton
        text="Fecha de compra"
        onPress={() => showMode('date')}
      />
      <Controller
        control={control}
        name='fechaCompra'
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


      {show && (
        <DateTimePicker
          testID='datePicker'
          value={fechaCompra}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}


      <CustomButton text="Guardar Cambios" onPress={handleSubmit(GuardarCambiosPressed)} />

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
  hiddenInput: {
    width: 0,
    height: 0,
  },
});

export default ActualizarPedidoScreen
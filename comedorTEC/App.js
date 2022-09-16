import React from "react";
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login";
import Register from "./screens/register";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import ModAlimentosScreen from "./screens/ModAlimentoScreen";
import NewAlimento from "./screens/NewAlimento";
import AsignarTiempo from "./screens/AsignarTiempo";
import AlimentoDia from "./screens/AlimentosDia";
import ActualizarUsuario from "./screens/actualizarUsuario";
import ClientesScreen from "./screens/clientes";
import PedidosScreen from "./screens/PedidosScreen"
import ActualizarPedidoScreen from "./screens/ActualizarPedidoScreen";
import AlimentosClienteScreen from "./screens/AlimentosClienteScreen";
import CarritoScreen from "./screens/CarritoScreen";
import HistorialScreen from "./screens/HistorialScreen";




//pruebas
const Stack = createNativeStackNavigator()

const App = () => {

  global.Carrito = [];
  global.Total = 0;
  global.IdUser = 0;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ingresar usuario" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registrar usuario" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="AdminScreen" component={AdminScreen}
          options={({ navigation }) => ({
            title: 'Funciones de Administrador',
            headerStyle: {},
            headerTitleStyle: {},
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Gestión de Alimentos")}>
                <Text>Volver</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="Compra-Alimentos del dia" component={AlimentosClienteScreen}
        options={({ navigation }) => ({
          title: 'Compra-Alimentos del dia',
          headerStyle: {},
          headerTitleStyle: {},
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Carrito de Compras")}>
              <Text>Carrito</Text>
            </TouchableOpacity>
          )
        })}/>
        <Stack.Screen name="Clientes" component={ClientesScreen} />
        <Stack.Screen name="Actualizar usuario" component={ActualizarUsuario} />
        <Stack.Screen name="Gestión de Pedidos" component={PedidosScreen} />
        <Stack.Screen name="Actualizar Pedido" component={ActualizarPedidoScreen} />
        <Stack.Screen name="Gestión de Alimentos" component={HomeScreen} />
        <Stack.Screen name="Modificar Alimento" component={ModAlimentosScreen} />
        <Stack.Screen name="Agregar Alimento" component={NewAlimento} />
        <Stack.Screen name="Asignar Tiempo de Comida" component={AsignarTiempo} />
        <Stack.Screen name="Alimentos del Dia" component={AlimentoDia} />
        <Stack.Screen name="Carrito de Compras" component={CarritoScreen}/>
        <Stack.Screen name="Historial de Compras" component={HistorialScreen}/>



      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
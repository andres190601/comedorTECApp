import React, { useState, useEffect, Component } from 'react'
import { View, StyleSheet, Button, Platform, Text ,Alert, Image} from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import Mailer from 'react-native-mail';
import { getInfoCompra } from "../API";


const data = {
  name: 'Valeria', 
  address: '101 E. Chapman Ave<br>Orange, CA 92866',
  carne: '2020156303',
  Cedula: '11896532',
  amount: '46899.50',
  amt: '53100.50',
  correo : 'algueracmp@gmail.com'
}


const Ejemplo = () => {
  
const [dataCompra, setCompra] = useState([]) 
const  [direccion, setDireccion] = useState ("")
const [url,setURL] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK3SURBVO3BQW7sWAwEwSxC979yjpdcPUCQur/NYUT8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4ZtUTpJwotIloVPpkvBNKk8Ua5RijVKsUS5epvKmJNyh0iXhTSpvSsKbijVKsUYp1igXH5aEO1TuSMITKk8k4Q6VTyrWKMUapVijXAyn8n9SrFGKNUqxRrkYLgl3qPxlxRqlWKMUa5SLD1P5l1ROkvCEym9SrFGKNUqxRrl4WRL+JZUuCZ3KE0n4zYo1SrFGKdYoFw+p/GYqXRLuUPlLijVKsUYp1igXDyWhU+mS8CaVTuUOlS4JJ0l4k8onFWuUYo1SrFEuXpaEE5UuCZ3KHUm4Q+UOlS4JnUqXhE7lJAmdyhPFGqVYoxRrlPiDFyWhU7kjCU+onCShU+mS0KmcJOFEpUtCp/KmYo1SrFGKNUr8wQNJ6FS6JNyhcpKEE5VPSsITKp9UrFGKNUqxRrl4SOUOlZMknKh0SThJwolKl4ROpVPpktCp3JGETuWJYo1SrFGKNUr8wR+WhBOVLglPqJwkoVM5SUKn8kSxRinWKMUaJf7ggSR8k8pJEk5UuiR0Kl0STlROknCi8qZijVKsUYo1ysXLVN6UhJMk3JGEkyScqJwk4UTlk4o1SrFGKdYoFx+WhDtU3qRykoRO5SQJnUqncpKETuVNxRqlWKMUa5SLYVS6JHQq35SETuWTijVKsUYp1igXwyShU+mS0Kl0SehUOpUuCb9JsUYp1ijFGuXiw1Q+SeUkCZ3KicpJEk5UuiR8U7FGKdYoxRrl4mVJ+KYkdCqdSpeETqVLQqfSqXRJuCMJncqbijVKsUYp1ijxB2uMYo1SrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVij/AfHIxrbopbPrQAAAABJRU5ErkJggg==")

const [form,setForm] = useState({
  ID: 1,
  estado: 2
  });


  const loadCompras = async () => {
    const data = await getInfoCompra(form.ID, form.estado)
    console.log(data)
    setCompra(data)
}    

useEffect(() => {
    loadCompras()
}, [])


const datosC = dataCompra[0];



const html = `
 <html>
          <head>
            <meta charset="utf-8">
            <title>Factura</title>
            <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
           
          </head>
          <body>
            <header>
              <h1>Factura</h1>
              <address>
                <p>${data.name}</p>
                <p>${data.carne}</p>
                <p>${data.Cedula}</p>
            </header>
            <article>
              <h1>Desglose</h1>
              <address>
                <p>${data.Cedula}<br>c/o ${data.name}</p>
              </address>
              <table class="meta">
                <tr>
                  <th><span>Fecha</span></th>
                  <td><span>24/02/2012</span></td>
                </tr>
                <tr>
                  <th><span>Cantidad</span></th>
                  <td><span id="prefix">$</span><span>4</span></td>
                </tr>
              </table>
              <table class="inventory">
                <thead>
                  <tr>
                    <th><span>Item</span></th>
                    <th><span>Descripción</span></th>
                    <th><span>Catidad</span></th>
                    <th><span>Precio</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span>Comidas</span></td>
                    <td><span>Desayuno</span></td>
                    <td><span>4</span></td>
                    <td><span data-prefix>$</span><span>${data.amount}</span></td>
                  </tr>
                </tbody>
              </table>
              <table class="balance">
                <tr>
                  <th><span>Total</span></th>
                  <td><span data-prefix>$</span><span>${data.amount}</span></td>
                </tr>
              </table>
            </article>
          </body>
        </html>
      `;




const handleEmail = () => {
  printToFile()
  console.log ("----------------------------------------------------------------");
  console.log(direccion);
  printToFile()
  Mailer.mail({
  subject: 'need help',
  recipients: ['algueracmp@gmail.com'],
  ccRecipients: ['meguilu11@gmail.com'],
  bccRecipients: ['meguilu11@gmail.com'],
  body: '<b>A Bold Body</b>',
  customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
  isHTML: true,
 
}, (error, event) => {
  Alert.alert(
    error,
    event,
    [
      {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
      {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
    ],
    { cancelable: true }
  )
});

}


  const [selectedPrinter, setSelectedPrinter] = React.useState();



  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  const enviar =() => {
    console.log('Enviando')
    const contenido = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        valor: data.name
      })
    }
    fetch('http://10.0.2.2:4000/QR', contenido)
    .then((respuesta => respuesta.json()))
    .then((succes) => {
    console.log(succes, valor);
    setURL(succes.valor )
  }).catch((e)=> {
    console.log(e);
  })
  }

  return (
    <View style={styles.container}>
      <Button title='Pruba1' onPress={print}  />
      <View style={styles.spacer} />
      <Button title='Enviar' onPress={handleEmail}/>
      <Image styles={styles.img}
       source ={{
         uri: url 
       }}
      >

      </Image>
    </View>
  );
}


const styles = StyleSheet.create({
    spacer: {
      margin: 5,
    },
    img:{ width: '90%', height:40, borderWidth:1 , borderColor: '#000000',
    marginTop: 10
   },
  })

export default Ejemplo
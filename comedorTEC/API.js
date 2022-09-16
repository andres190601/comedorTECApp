import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const API = 'http://10.0.2.2:4000/'

export const logguearUsuario = async (credenciales) => {
    const res = await fetch(API + 'usuario/ingresar',
        {
            method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(credenciales)
        });
    return await res.json()
};

export const crearCuenta = async (personaNueva) => {
    const res = await fetch(API + 'usuario/nuevo',
        {
            method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(personaNueva)
        });
    return await res.json()
};

//PEDIDOS

const API_Pedidos = 'http://10.0.2.2:4000/pedidos'

export const getPedidos = async (id) => {
    const res = await fetch(`${API_Pedidos}/filtro/${id}`);
    return await res.json();
}

export const deletePedido = async (id) => {
    await fetch(`${API_Pedidos}/${id}`, {
        method: "DELETE",
    })
};

export const actualizarPedido = async (id_cliente, fechaCompra, id_compra) => {
    const objeto = { "id": id_compra, "id_cliente": id_cliente, "fechaCompra": fechaCompra }
    const res = await fetch(API_Pedidos, {
        method: "PUT", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

export const getPedidoID = async (id) => {
    const res = await fetch(`${API_Pedidos}/${id}`)
    return await res.json()
};

//hasta acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const API_Alimentos = 'http://10.0.2.2:4000/alimentos'

//OBTENER ALIMENTOS
export const getAlimentos = async () => {
    const res = await fetch(API_Alimentos)
    return await res.json()
}

//OBTENER ALIMENTOS SPECIAL
export const getAlimentosSpecial = async () => {
    const res = await fetch('http://10.0.2.2:4000/alimentosSpecial')
    return await res.json()
}

//ELIMINAR ALIMENTO
export const deleteAlimento = async (id) => {
    await fetch(`${API_Alimentos}/${id}`, {
        method: "DELETE",
    })
};

//OBTENER ALIMENTOS X ID
export const getAlimentosID = async (id) => {
    const res = await fetch(`${API_Alimentos}/${id}`)
    return await res.json()
};


//AGREGAR ALIMENTO
export const agregarAlimento = async (nombre, tipo, precio, disponibilidad) => {
    if (disponibilidad == '') {
        disponibilidad = 0
    }
    const objeto = { "nombre": nombre, "tipo": tipo, "precio": precio, "disponibilidad": disponibilidad }
    const jsonObjeto = JSON.parse(JSON.stringify(objeto))
    console.log(typeof (objeto))
    console.log(JSON.stringify(objeto))
    const res = await fetch(API_Alimentos, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

//MOFICAR ALIMENTO
export const modificarAlimento = async (idAlimento, nombre, tipo, precio, disponibilidad) => {
    const objeto = { "id": idAlimento, "nombre": nombre, "tipo": tipo, "precio": precio, "disponibilidad": disponibilidad }
    const res = await fetch(API_Alimentos, {
        method: "PUT", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

const API_TipoAlimento = 'http://10.0.2.2:4000/tipoAlimento'

//OBTENER TIPOS DE ALIMENTOS
export const getTipoAlimento = async () => {
    const res = await fetch(API_TipoAlimento)

    return await res.json()
}

const API_Tiempos = 'http://10.0.2.2:4000/tiempo'

//OBTENER TIEMPOS DE COMIDA
export const getTiempos = async () => {
    const res = await fetch(API_Tiempos)
    return await res.json()
}

//ASIGANR TIEMPOS DE COMIDA
export const asignarTiempoComida = async (idAlimento, idComida) => {
    const objeto = { "idAlimento": idAlimento, "idComida": idComida }
    const res = await fetch(API_Tiempos, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

const API_Aliemntos_tiempo = 'http://10.0.2.2:4000/tiempo/alimento'
//OBTENER ALIMENTOS X TIEMPO
export const getAlimentosXTiempo = async (id) => {
    const res = await fetch(`${API_Aliemntos_tiempo}/${id}`)
    return await res.json()
};

const API_Aliemntos_cliente = 'http://10.0.2.2:4000/alimentosCliente'

//OBTENER FILTRO DE CLIENTE
export const getAlimentoxTiempoxTipo = async (tipo, tiempo) => {
    const objeto = { "tipo": tipo, "tiempo": tiempo }
    const res = await fetch(API_Aliemntos_cliente, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    return await res.json()
};


//CARRITOOOOO
export const addToCar = async (id, cantidad) => {
    console.log('add to car')
    const objeto = { "id": id, "cantidad": cantidad }
    const res = await fetch('http://10.0.2.2:4000/toCar', {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    // return await res.json()
};


//COMPRA
export const procesarCompraSP = async (id, json) => {
    console.log('procesar Compra')
    const objeto = { "id": id, "json": json }
    const res = await fetch('http://10.0.2.2:4000/compra', {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

const API_Clientes = 'http://10.0.2.2:4000/clientes'

// OBTENER CLIENTES
export const getClientes = async () => {
    const res = await fetch(API_Clientes);
    return await res.json();
}

//OBTENER CLIENTE POR [ CARNET ]
export const getClienteByCarnet = async (carnet) => {
    const res = await fetch(`${API_Clientes}/carnet/${carnet}`);
    return await res.json();
};

//OBTENER CLIENTE POR [ CEDULA ]
export const getClienteByCedula = async (cedula) => {
    const res = await fetch(`${API_Clientes}/cedula/${cedula}`);
    return await res.json();
};

//OBTENER TIPOS DE USUARIO
export const getTipoUsuario = async () => {
    const res = await fetch(API_Clientes + '/tipoUsuario');
    return await res.json();
}

// ACTUALIZAR USUARIO
export const actualizarUsuario = async (idPersona,
    correo,
    contrasenia,
    nombre,
    apellido1,
    apellido2,
    carnet,
    cedula,
    edad,
    fechaNacimiento) => {
    const objeto = {
        "idPersona": idPersona,
        "correo": correo,
        "contrasenia": contrasenia,
        "nombre": nombre,
        "apellido1": apellido1,
        "apellido2": apellido2,
        "carnet": carnet,
        "cedula": cedula,
        "edad": edad,
        "fechaNacimiento": fechaNacimiento
    };

    const res = await fetch(API_Clientes + '/actualizar', {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    });
    return await res.json();
};

//ELIMINAR CLIENTE
export const deleteCliente = async (carnet) => {
    const res = await fetch(`${API_Clientes}/${carnet}`, {
        method: "DELETE",
    });
    return await res.json();
};

//OBTENER HISTORIAL COMPRAS CLIENTE

export const getPedidoIDPersona = async (id) => {
    const res = await fetch(`${API_Clientes}/${id}`)
    return await res.json()
};


//Obtener Compras hechas 

const API_InfoCompra = 'http://10.0.2.2:4000/compras'
export const getInfoCompra = async (id, estado) => {
    const res = await fetch(`${API_InfoCompra}/${id}/${estado}`)
    return await res.json()

}






const print = async (html) => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
        html,
        printerUrl: selectedPrinter?.url, // iOS only
    });
}

const printToFile = async (html) => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
        html
    });
    console.log('File has been saved to:', uri);

    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
}

//GENERAR PDF 
export const generarPF = async (idCompra) => {
    const info = await getInfoCompra(idCompra, 2)
    console.log(info)
    const html = `
 <html>
          <head>
            <meta charset="utf-8">
            <title>Factura</title>
            <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
           
          </head>
          <body>
            <header>
              <h1>Factura #${info[0].id_compra}</h1>
              <address>
                <p>Cliente: ${info[0].nombreCliente} ${info[0].apellido1Cliente}</p>
                <p>Carnet: ${info[0].carnetCliente}</p>
                <p>Cedula: ${info[0].cedulaCliente}</p>
            </header>
            <article>
              <h1>Desglose</h1>
              <address>
                <p></p>
              </address>
              <table class="meta">
                <tr>
                  <th><span>Fecha</span></th>
                  <td><span>${info[0].fecha_compra}</span></td>
                </tr>
                <tr>
                  <th><span>Total</span></th>
                  <td><span id="prefix">${info[0].total_compra}</span></td>
                </tr>
                <tr>
                  <th><span>Numero de orden para recoger: </span></th>
                  <td><span id="prefix">${info[0].id_compra}</span></td>
                </tr>
              </table>
              
              <table class="balance">
             
              </table>
            </article>
          </body>
        </html>
      `;
      await printToFile (html)
      //return await info.json()
}
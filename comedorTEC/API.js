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

const API_Alimentos = 'http://10.0.2.2:4000/alimentos'

//OBTENER ALIMENTOS
export const getAlimentos = async () =>{
    const res = await fetch(API_Alimentos)
    return await res.json()
}

//OBTENER ALIMENTOS SPECIAL
export const getAlimentosSpecial = async () =>{
    const res = await fetch('http://10.0.2.2:4000/alimentosSpecial')
    return await res.json()
} 

//ELIMINAR ALIMENTO
export const deleteAlimento = async (id) => {
    await fetch(`${API_Alimentos}/${id}`,{
        method: "DELETE",
    })
};

//OBTENER ALIMENTOS X ID
export const getAlimentosID = async (id) => {
    const res = await fetch(`${API_Alimentos}/${id}`)
    return await res.json()
};


//AGREGAR ALIMENTO
export const agregarAlimento = async(nombre, tipo, precio, disponibilidad)=>{
    if (disponibilidad == ''){
        disponibilidad=0
    }
    const objeto = {"nombre": nombre,"tipo":tipo,"precio":precio,"disponibilidad":disponibilidad }
    const jsonObjeto = JSON.parse(JSON.stringify(objeto))
    console.log(typeof(objeto))
    console.log(JSON.stringify(objeto))
    const res = await fetch(API_Alimentos, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },             
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

//MOFICAR ALIMENTO
export const modificarAlimento = async(idAlimento,nombre, tipo, precio, disponibilidad)=>{
    const objeto = {"id":idAlimento,"nombre": nombre,"tipo":tipo,"precio":precio,"disponibilidad":disponibilidad }
    const res = await fetch(API_Alimentos, {
        method: "PUT", headers: { Accept: "application/json", "Content-Type": "application/json" },             
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

const API_TipoAlimento = 'http://10.0.2.2:4000/tipoAlimento'

//OBTENER TIPOS DE ALIMENTOS
export const getTipoAlimento = async () =>{
    const res = await fetch(API_TipoAlimento)
    
    return await res.json()
}

const API_Tiempos = 'http://10.0.2.2:4000/tiempo'

//OBTENER TIEMPOS DE COMIDA
export const getTiempos = async () =>{
    const res = await fetch(API_Tiempos)
    return await res.json()
}

//ASIGANR TIEMPOS DE COMIDA
export const asignarTiempoComida = async(idAlimento,idComida)=>{
    const objeto = {"idAlimento":idAlimento,"idComida": idComida}
    const res = await fetch(API_Tiempos, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },             
        body: JSON.stringify(objeto)
    });
    return await res.json()
};

const API_Aliemntos_tiempo = 'http://10.0.2.2:4000/tiempo/alimento' 
//OBTENER ALIMENTOS X ID
export const getAlimentosXTiempo = async (id) => {
    const res = await fetch(`${API_Aliemntos_tiempo}/${id}`)
    return await res.json()
};

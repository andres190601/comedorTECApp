const API = 'http://10.0.2.2:4000/'

export const logguearUsuario = async (credenciales) => {
    const res = await fetch(API + 'usuario/ingresar',
        {
            method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(credenciales)
        });
     //console.log(res)
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

//ELIMINAR ALIMENTO
export const deleteAlimento = async (id) => {
    await fetch(`${API_Alimentos}/${id}`,{
        method: "DELETE",
    })
};

//OBTENER ALIMENTOS X ID
export const getAlimentosID = async (id) => {
    await fetch(`${API_Alimentos}/${id}`)
};


//AGREGAR ALIMENTO
export const agregarAlimento = async(nombre, tipo, precio, disponibilidad)=>{
    const objeto = {"nombre": nombre,"tipo":tipo,"precio":precio,"disponibilidad":disponibilidad }
    const jsonObjeto = JSON.parse(JSON.stringify(objeto))
    console.log(typeof(objeto))
    console.log(JSON.stringify(objeto))
    const res = await fetch(API_Alimentos, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },             
        body: JSON.stringify(objeto)
    });
};

const API_TipoAlimento = 'http://10.0.2.2:4000/tipoAlimento'

//OBTENER TIPOS DE ALIMENTOS
export const getTipoAlimento = async () =>{
    const res = await fetch(API_TipoAlimento)
    return await res.json()
}
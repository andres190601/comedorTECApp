import sql from 'mssql'

const dbSettings={
    user: 'Administrador',
    password : 'ProyectoAP',
    server : 'localhost',
    database : 'comedorTEC',
    options: {
        encrypt: true, //for azure
        trustServerCertificate: true, //for local dev
    } 
}


export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings)
        return pool;
    }catch(error){
        console.log('lol');
        console.log(error)
    }
}


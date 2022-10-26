const mongoose= require("mongoose");

// Código para conectar la base de datos

const connectDatabase= () =>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con =>{
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(
        con => {
            console.log(`No se logró la conexión`)
        }
    )

    

}

module.exports= connectDatabase;
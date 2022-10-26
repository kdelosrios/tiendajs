const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({
    
    nombre:{
        type: String,
        required:[true,"Por favor registra el nombre del producto"],
        trim: true,
        maxLength:[120, "El nombre del producto no debe exceder los 120 caracteres"]
    },

    precio:{
        type: Number,
        required:[true,"Por favor registre el precio del producto"],
        maxLength:[10,"El precio del producto no puede estar por encima de 99'999.999"],
        default:0.0
    },

    descripcion:{
        type: String,
        required:[true,"por favor registre una descripción para el producto"]
    },
    calificacion:{
        type:Number,
        default:0
    },

    imagen:[
        {
            public_id:{
                type: String,
                required: true
            },
            url: {
                type:String,
                required:true
                }
        }
    ],

    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoría del producto"],
        enum:{
            values:[
                "Despensa",
                "Lácteos",
                "Frutas y verduras",
                "Enlatados",
                "Snacks",
                "Limpieza",
                "Licores"
            ]
        }
    },

    inventario:{
        type:Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5, "Cantidad máxima del producto no puede sobrepasar 99999"],
        default:0
    },

    numCalificaciones:{
        type:Number,
        default:0
    },
    fechaCreacion:{
        type: Date,
        default: Date.now
    }

});

module.exports=mongoose.model("productos", productosSchema)

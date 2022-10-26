const producto= require("../models/productos")
//const fetch =(url)=>import('node-fetch').then(({default:fetch}) => fetch(url)); // importanción del FETCH ( es una tramapa para poder usarlo!!!)



// Ver la lista de productos 

exports.getProducts= async(req,res,next) => {

    const productos= await producto.find();

    if(!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
        
    }
    res.status(200).json({
        success:true,
        cantidad:productos.length,
       productos
    })
}

// Ver un producto por ID

exports.getProductByID= async(req,res,next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            res.status(404).json({
            success:false,
            message:"No encontramos ese producto",
            error:true
        })
    }
            res.status(200).json({
            success:true,
            message:"Aquí debajo encuentras información sobre tu producto: ",
            product
        })
}

// Update un producto

exports.updateProduct= async (req,res,next) =>{
    let product=await producto.findById(req.params.id) // Variable detipo modificable
    if(!product){ // Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: " No encontramos el producto"
        })
    }
    // si el objeto si existia, entonces si ejecuto la actualizacion 
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });

    // Respondo ok si el producto si se actualizó 

    res.status(200).json({
        success:true,
        message: "Producto actualizado correctamente",
        producto
    })
}

// Eliminar producto

exports.deleteProduct=async(req,res,next) =>{
    const product=await producto.findById(req.params.id)// Variable detipo modificable
    if(!product){ // Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message:"No encontramos ese producto"
        })
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message:"producto eliminado correctamente",
    })
}

// Crear nuevo producto/api/productos

exports.newProduct=async(req,res,next) =>{
    const product= await producto.create(req.body);
        res.status(201).json({
            success:true,
            product
        })
}

/*
// USO DE FETCH

// Ver todos los productos

function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res=> console.log(res))
    .catch(err=>console.error(err))
    
    }

    // verProductos(); Llamamo el métido creado para probar la consulta

// Ver por id

function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res => res.json())
    .then(res=> console.log(res))
    .catch(err=>console.error(err))
    
}

verProductoPorID('6356f33e8e7b33daa17eec97');
*/







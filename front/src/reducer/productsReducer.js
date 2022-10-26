import {

    // Se crea para listar productos
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,

    // se crea para tener todos los detalles

    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,

    CLEAR_ERRORS
} from "../constants/productConstants";

// FUNCIIÓN PARA LISTAR TODOS LOS PRODUCTOS

export const productsReducer = (state = { productos: [] }, action) => {
    switch (action.type) {
        
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                productos: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                productos:action.payload.productos,
                cantidad: action.payload.cantidad
            }
        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error: action.payload
            }
        case CLEAR_ERRORS: 
            return{
                ...state,
                error:null
            }
    

        default:
            return state
      
    }
}

// función para detallar producto

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        
        case PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                loading:true
            }
        case PRODUCT_DETAIL_SUCCESS:
            return{
                loading:false,
                productos:action.payload.product
            }
        case PRODUCT_DETAIL_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS: 
            return{
                ...state,
                error:null
            }
    

        default:
            return state
      
    }
}
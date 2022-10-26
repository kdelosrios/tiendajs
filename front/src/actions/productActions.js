import axios from 'axios';

import{
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,

    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,

    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = () => async(dispatch)=>{
    try{
        dispatch({type:ALL_PRODUCTS_REQUEST})

        const {data}=await axios.get('api/productos')

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    } catch (error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
}
// VER DETALLES DEL PRODUCTO

export const getProductDetails = (id) => async(dispatch)=>{
    try{
        dispatch({type: PRODUCT_DETAIL_REQUEST})

        const {data}=await axios.get(`api/producto/:${id}`)

        dispatch({
            type:PRODUCT_DETAIL_SUCCESS,
            payload:data.product
        })
    } catch (error){
        dispatch({
            type:PRODUCT_DETAIL_FAIL,
            payload:error.response.data.message
        })
    }
}

// Clear error

export const clearErrors =() => async(dispatch) =>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
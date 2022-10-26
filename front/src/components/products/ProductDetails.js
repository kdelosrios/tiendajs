import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../layaout/MetaData"
import { useParams } from 'react-router-dom'
import { clearErrors, getProductDetails } from '../../actions/productActions'
import {useAlert} from 'react-alert'


const ProductDetails = () => {
    const {loading,product,error}= useSelector(state => state.productDetails)
    const {id}=useParams();

    const dispatch=useDispatch();
    const alert= useAlert();
    
    useEffect(() =>{
       dispatch(getProductDetails(id))
       if(error){
        alert.error(error);
        dispatch(clearErrors())
       }
    }, [dispatch])

  return (
    <Fragment>
        <MetaData title="Aceite Diana Premium"></MetaData>
        <div >
            <div className='col-6 col-lg-4' id="imagen_producto"></div>
            <img src="../images/productos_dispensa/aceite.png" alt="Aceite Diana Premium" height="250" width="250"></img>
        </div>
        <div className='col-12 col-lg-5 mt-5'>
            <h3>Aceite Diana Premium</h3>
            <p id="product_id">Product #123456</p>
        </div>

    </Fragment>
  )
};

export default ProductDetails;
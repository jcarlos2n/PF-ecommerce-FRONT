import React from "react";
import "./Product.scss";
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'



const Product = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
                await axios.get('http://localhost:8000/api/product')
                .then(resp => {
                    setProducts(resp.data);
                }).catch((error) =>{ })
        }
        fetchProducts()
    }, []);
    
    const ProductsList = () => {
        if (products.data?.length > 0) {
           
            return (
                products.data?.map((product, index) => (
                    <div key={index}>
                        <ProductCard data={product} />
                    </div>
                ))
            )
        }else{
            
            return (
                
                <div></div>
            )
        }
    }

    return (
        <div className="productWall">
           <ProductsList />
        </div>
    )
}

export default Product




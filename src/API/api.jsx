import axios from "axios"

export const getProducts = async()=>{
    const res = await axios.get('http://localhost:7000/api/public/product');
    return res.data.data
}

export const getProductByID = async(data)=>{
    const res = await axios.get(`https://fakestoreapi.com/products/${data}`);
    return res.data
}
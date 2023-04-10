import instance from ".";
import { IProduct, updataFrom } from "../models";

const getAll = () =>{
    const uri = "/products"
    return instance.get(uri)
}  

const get = (id:string) =>{
    const uri = "/products/" +id
    return instance.get(uri)
}

const deleteProducts = (id:string) =>{
    const uri = "/products/" +id
    return instance.delete(uri)
}
const addProducts = (data:IProduct) =>{
    const uri = "/products/" 
    return instance.post(uri,data)
}

const updateProducts = (id:string,data:updataFrom) =>{
    const uri = "/products/" +id
    return instance.put(uri,data)
}
export {getAll,get,deleteProducts,addProducts,updateProducts} ;
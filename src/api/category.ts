import instance from ".";
import { IProduct, categoryFrom } from "../models";

export const getAll = ()=>{
    const uri = ('/category')
    return instance.get(uri)
}

export const getById = (id:string)=>{
    const uri = ('/category/'+id)
    return instance.get(uri)
}

export const create = (data:IProduct)=>{
    const uri = ('/category')
    return instance.post(uri,data)
}

export const updatecategory = (id:string,data:categoryFrom)=>{
    const uri = ('/category/'+id)
    return instance.put(uri,data)
}

export const deleteById = (id:string)=>{
    const uri = ('/category/'+id)
    return instance.delete(uri)
}
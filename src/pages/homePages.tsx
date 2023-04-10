import { useEffect, useState } from "react"
import Product from "../components/products"
import {getAll} from "../api/product"
import { IProduct } from "../models"

const HomePages = () => {
     
    const [products,setProducts] = useState<IProduct[]>([])


    const fetchProducts = async()=>{
        const {data} = await getAll()
        setProducts(data.product)
        console.log(data);
         
    }
    useEffect(()=>{
        fetchProducts()
    },[])

   

    return <>
    <aside className="">
            <div className="">
                <img className="w-100 p-5 " src="Rectangle (14).png" alt="" />
            </div>
        </aside>
    <div className="container overflow-hidden">
        <div className="">
            <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
            <div>
                <div className="d-flex flex-wrap">
                    {products.map(products =><Product
                    data={products}
                    key={products._id}/>)}
                </div>
            </div>
        </div>
        </div>
    </>
}
export default HomePages
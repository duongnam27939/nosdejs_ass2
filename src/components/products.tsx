import { Link } from "react-router-dom"
import { IProduct } from "../models"

type Props ={
    data:IProduct,
}



const Product = ({data}:Props) => {
    return <>
        <div className="card w-13rem m-3" style={{width:400}}>
        <Link to={`/About/${data._id}`}><img src={data.images} className="card-img-top mx-auto d-flex justify-content-between " style={{width:300}} alt="..." /></Link>
            <div className="card-body mx-4 ">
                <h5 className="card-title">{data.name}</h5>
                {/* <p className="card-text"></p> */}
                <p className="text-danger">{new Intl.NumberFormat().format(data?.price)} ₫<span className="text-muted ">-{new Intl.NumberFormat().format(data?.original_price)}₫</span></p>
            </div>
            
        </div>
    </>

}


export default Product
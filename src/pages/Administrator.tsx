import { useState, useEffect } from "react"
import { IProduct } from "../models"
import { deleteProducts, getAll } from "../api/product"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


// interface Props = {
//     product: IProduct
// }

const Administrator = () => {
    let id = useParams()
    const [admin, setAdmin] = useState<IProduct[]>([])

    const fetchAdmin = async () => {
        const { data } = await getAll()
        setAdmin(data.product)
    }

    useEffect(() => {
        fetchAdmin()
    }, [])

    const handlRemoved = async(_id:string)=>{
        console.log(id);
        try {
            if (confirm('bạn có muốn xóa không')) {
                const {data} = await deleteProducts(_id)
            setAdmin(()=>admin.filter(product => product._id !== _id))
            
            
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return <>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5 mx-3">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase  ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {admin.map(admin => <tr key={admin._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">
                            {admin._id}
                        </td>
                        <th scope="row" className="px-6 py-4 ">
                            {admin.name}
                        </th>
                        <td className="px-6 py-4">
                            {new Intl.NumberFormat().format(admin?.price)}₫
                        </td>
                        <td className="px-6 py-4">
                            <img src={admin.images} style={{ width: 100 }} alt="" />

                        </td>
                        <td className="px-6 py-4">
                            <button className="card btn btn-emerald-500" onClick={() => handlRemoved(admin._id)} >Xóa</button>
                        </td>
                        <td className="px-0 ">
                        <Link to={`/updata/${admin._id}`} className="no-underline "><button className="card btn btn-emerald-500 ">Sửa</button></Link>
                        </td>
                    </tr>)}
                </tbody>
                <p className=" m-2"><Link to="/add">Thêm sản phẩm</Link></p>
            </table>
        </div>

    </>
}
export default Administrator
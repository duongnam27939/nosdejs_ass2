import { useEffect, useState } from "react"
import { get, getAll } from "../api/product"
import { useParams } from "react-router-dom"
import { IProduct } from "../models"
import { any } from "joi"



const About = (data: any) => {
    

    const { id } = useParams()
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const onHandleGet = async (id:string) => {
        try {
            const { data } = await get(id);
            setProduct(data.product)
        } catch (error) {

        }

    }

    useEffect(() => {
        if (id) {
            onHandleGet(id)
        }
    }, [])
    return <div className="w-[1200]px">
        <div className="w-100 ">
            <div>
                <nav className="flex justify-start space-x-4">
                    <a href="#" className="font-me px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 no-underline">Trang Chủ</a>
                    <a href="#" className="font-me px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 no-underline">Điện thoại</a>
                    <a href="#" className="font-me px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 no-underline">SamSung</a>
                    <a href="#" className="font-me px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 no-underline">Samsung Galaxy S23 Ultra</a>
                </nav>


            </div>
            {/* <div>
            <p className="m-5">Samsung Galaxy A73 (5G) 256GB</p>
            </div> */}
            <div className="m-5">

            </div>
        </div>

        <aside>

            <div>
                <div className="d-flex align-items-start justify-content-center">

                    <div className="card">
                        <img src={product.images} style={{ width: 400 }} className="card-img-top mx-auto " alt="..." />
                        <div className="card-img d-flex p-4">
                            {/* {
                                product.images?.map((image, index) => {
                                    return <img key={index} src={product.images?.[0].base_url} className="card-img-top mx-auto col-md-1" style={{ width: 50 }} alt="..." />
                                })
                            } */}
                            <img src={product.images} style={{ width: 50 }} className="card card-img-top mx-auto  " alt="..." />
                            <img src={product.images} style={{ width: 50 }} className="card card-img-top mx-auto " alt="..." />
                            <img src={product.images} style={{ width: 50 }} className="card card-img-top mx-auto " alt="..." />
                            <img src={product.images} style={{ width: 50 }} className="card card-img-top mx-auto " alt="..." />
                            <img src={product.images} style={{ width: 50 }} className="card card-img-top mx-auto " alt="..." />
                        </div>

                    </div>
                    <div className="">
                        <h4 className="mx-3">{product.name}</h4>
                        <h5 className="card-title text-danger p-3">{new Intl.NumberFormat().format(product?.price)}₫<span className="text-muted ">-{new Intl.NumberFormat().format(product?.original_price)}₫</span></h5>
                        <p className="card-text m-3" style={{ width: 600 }}> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo
                            nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                        <button type="button" style={{ width: 200 }} className="btn btn-danger mx-3 mt-10">Mua Ngay</button>
                    </div>
                </div>
                <div className="justify-content-start m-5 mx-auto  justify-content-center  " style={{ width: 1100 }}>
                    <div className="w-100 bg-gray-200">
                        <h5 className="mt-3 text-red-400 d-flex justify-content-center ">ĐẶC ĐIỂM NỔI BẬT</h5>
                        <p className="flex-1 mx-5">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
                        <p className="flex-1 mx-5">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
                        <p className="flex-1 mx-5">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                        <p className="flex-1 mx-5">Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
                    </div>
                    <div className="w-100 ">
                        <p className="flex-1  ">Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung.
                            Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước.
                            Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
                    </div>
                    <div className="w-100">
                        <h4 className="">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h4>
                        <p className="">Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước,
                            từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera.
                            Sau đây là những đánh giá chi tiết về chiếc</p>
                    </div>
                    <div className="w-100">
                        <h4 className="">Thiết kế sang trọng, màn hình Super AMOLED</h4>
                        <p className="">Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
                            Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                    </div>
                    <div className="w-100">
                        <p className="">Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây,
                         bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
                    </div>
                    <div className="w-100">
                        <p className="">Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.
</p>
                    </div>
                    
                </div>
                <div className="mt-0 mx-auto  justify-content-center  bg-gray-200" style={{ width: 1100 }}>


                </div>





            </div>
        </aside>
    </div>

}
export default About
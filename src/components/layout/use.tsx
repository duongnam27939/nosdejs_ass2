import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const User = () => {
    // const [user,setUser] = useLocalStorage("user",null)
    // const [isUser,setisUser] = useState(false)
    return <>
        <header className='m-3 bg-danger mx-auto w-70 p-2'>
            <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex justify-content-center mx-20" >
                    <img className=".mr-7" width="50px" src="/anhhtus-logo 2.png " alt="..." />
                </div>
                <div className="mx-20 flex-1 ms-3">
                    <form className="d-flex  ">
                        <button className="btn btn-primary" style={{ width: 120 }}>Tìm kiếm</button>
                        <input type="text" className="form-control" style={{ width: 600 }} placeholder="Tìm kiếm" />
                    </form>
                </div>
                {/* <div className="flex-1">
                    <div className="">
                    <Link to="/signin" className="text-base mx-10 no-underline text-sky-500 hover:text-blue-600 fs-4">Login</Link>
                    <Link to="/signup" className="text-base no-underline text-sky-500 hover:text-blue-600 fs-4" >Signup</Link>
                    </div>
                   
                </div>  */}
                 
            </div>
        </header>
        

        <Outlet />

        <footer className="w-18rem m-5">
            <div className="d-flex p-5 w-100">
                <div className="card-body w-50px">
                    <h5 className="card-title">Tìm cửa hàng</h5>
                    <p className="card-text">Tìm cửa hàng gần nhất</p>
                    <p className="card-text">Tìm cửa hàng gần nhất</p>
                    <p className="card-text">Mua hàng từ xa</p>
                    <p className="text-danger" style={{ width: 230 }}>Gặp trực tiếp cửa hàng gần nhất
                        (Zalo hoặc gọi điện)</p>
                    <h5 className="card-title">Phương thức thanh toán</h5>
                    <div className=" d-flex  ">
                        <img src="/Rectangle-1.png" style={{ width: 40 }} className="card-img-top mx-1  " alt="..." />
                        <img src="/Rectangle-2.png" style={{ width: 40 }} className="card-img-top mx-2 " alt="..." />
                        <img src="/Rectangle-3.png" style={{ width: 40 }} className="card-img-top mx-2 " alt="..." />
                        <img src="/Rectangle-4.png" style={{ width: 40 }} className="card-img-top mx-1 " alt="..." />
                    </div> 
                    <br />
                     <div className="d-flex ">
                        <img src="/Rectangle-5.png" style={{ width: 60 }} className="card-img-top   " alt="..." />
                    </div>
                </div>
                <div className="card-body ">
                    <p className="card-text">Gọi mua hàng:
                        1800.2044
                        (8h00 - 22h00)</p>
                    <p className="card-text">Gọi khiếu nại:
                        1800.2063
                        (8h00 - 21h30)</p>
                    <p className="card-text">Gọi bảo hành:
                        1800.2064
                        (8h00 - 21h00)</p>
                    <h5 className="card-title">Đối tác dịch vụ bảo hành</h5>
                    <p className="card-text">Điện Thoại - Máy tính</p>
                    <h5 className="card-title">Trung tâm bảo hành uỷ quyền Apple</h5>
                    <img className="" src="/Rectangle-6.png" alt="" />


                </div>
                <div className="card-body w-50px">
                    <p className="card-text">Mua hàng và thanh toán Online</p>
                    <p className="card-text">Mua hàng trả góp Online</p>
                    <p className="card-text">Tra thông tin đơn hàng</p>
                    <p className="card-text">Tra điểm Smember</p>
                    <h5 className="card-title">Tra cứu hoá đơn VAT điện tử</h5>
                    <p className="card-text">Trung tâm bảo hành chính hãng</p>
                    <p className="card-text">Quy định về việc sao lưu dữ liệu</p>
                    <p className="text-danger"> Dịch vụ bảo hành điện thoại</p>
                </div>
                <div className="card-body w-50px">
                    <p className="card-text">Quy chế hoạt động</p>
                    <p className="card-text">Chính sách Bảo hành</p>
                    <p className="card-text">Liên hệ hợp tác kinh doanh</p>
                    <p className="card-text">Khách hàng doanh nghiệp (B2B)</p>
                    <p className="text-danger">Ưu đãi thanh toán</p>
                    <p className="card-text">Tuyển dụng</p>

                </div>
            </div>
            
            
        </footer>
    </>
}
export default User;
import * as Yup from "yup"

export interface IProduct {
    _id: string;
    name: string;
    price: number;
    original_price: number;
    description?: string;
    categoryId: string;
    images:string,
    
}



export const signupChema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email không hợp lệ").required("Email là trường bắt buộc"),
    password: Yup.string().required("Mật khẩu là bắt buộc").min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: Yup.string().required("Mật khẩu là bắt buộc").oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
  })
  
 export type SignupFrom = Yup.InferType<typeof signupChema>


 export const loginChema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Email là trường bắt buộc"),
    password: Yup.string().required("Mật khẩu là bắt buộc").min(6, "Mật khẩu phải có ít nhất 6")
 })

 export type LoginFrom = Yup.InferType<typeof loginChema>



export const updataSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
})
 


export type updataFrom = Yup.InferType<typeof updataSchema>


export const categorySchame = Yup.object({
    name :Yup.string().required("trường dữ liệu bắt bược"),
})

export type categoryFrom = Yup.InferType<typeof categorySchame>
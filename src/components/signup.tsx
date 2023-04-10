import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signupChema,SignupFrom } from "../models";
import {yupResolver} from "@hookform/resolvers/yup"
import { signupProduct } from "../api/auth";




const Signup = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<SignupFrom>({
    resolver:yupResolver(signupChema)
  })
  const navigate = useNavigate();

  const onSubmit = async(data:SignupFrom) => {
    // console.log(data)
    try {
      const response = await signupProduct(data)
      navigate('/signin')
    } catch (error) {
      console.log(error);
    }
  }
  return <section className="vh-100 bg-#eee">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" >
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
{/* from */}
                  <form action="" className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" className="form-control" {...register('name')} />
                        <label className="form-label" >Your Name</label>
                        <p className="text-red-600 text-[10]px">
                          {errors.name && errors.name.message}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" className="form-control" {...register('email')} />
                        <label className="form-label" >Your Email</label>
                        <p className="text-red-600 text-[10]px">
                          {errors.email && errors.email.message}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" className="form-control" {...register('password')} />
                        <label className="form-label" >Password</label>
                        <p className="text-red-600 text-[10]px">
                          {errors.password && errors.password.message}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" className="form-control" {...register('confirmPassword')} />
                        <label className="form-label" >Repeat your password</label>
                        <p className="text-red-600 text-[10]px">
                          {errors.confirmPassword && errors.confirmPassword.message}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button className="btn btn-primary btn-lg">Register</button>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg"> <Link to="/signin" className="text-light no-underline ">Lognin</Link></button>
                      </div>
                    </div>


                  </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Signup;
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {yupResolver} from "@hookform/resolvers/yup"
import { loginChema, LoginFrom } from "../models"
import { useForm } from "react-hook-form"
import { login } from "../api/auth"
import { useLocalStorage } from "../pages/hooks"


const Signin = () => {
  const {register,handleSubmit} = useForm<LoginFrom>({
    resolver: yupResolver(loginChema)
  })

  const navigate= useNavigate();
  
  const [user,setUser] = useLocalStorage("user",null)


  const onSubmit = async(data:LoginFrom) => {
    try {
      const {data:{accessToken,user}} = await login(data)
      localStorage.setItem("token",accessToken)
      console.log(accessToken);
      
      
      // setUser({
      //   accessToken,
      //  ...user
      // })
      navigate("/admin")
    } catch (error) {
      console.log(error);
    }
    console.log(data)
  }
    return <section className="vh-100 p-3 mt-20">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Email"  {...register('email')}/>
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>
  
           
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Password" {...register('password')} />
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
              
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember
                </label>
              </div>
              <a href="#!" className="text-body">Forgot password?</a>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button className="btn btn-primary btn-lg"
             >Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                  <Link to ="/signup">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

}

export default Signin 
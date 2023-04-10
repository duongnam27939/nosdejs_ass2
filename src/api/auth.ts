import instance from ".";
import { LoginFrom } from "../models";
import { SignupFrom } from "../models";

export const signupProduct = (data:SignupFrom)=>{
    const uri = "/signup"
    return instance.post(uri,data)
}
 

export const login = (data:LoginFrom)=>{
    const uri = "/signin"
    return instance.post(uri,data)
}
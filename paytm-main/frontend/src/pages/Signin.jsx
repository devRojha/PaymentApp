import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signin(){
    const [Email , setEmail] = useState("")
    const [Password , setPassword] = useState("")
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-80 bg-white text-center p-2 h-max px-4 shadow-lg">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onChange={ e => setEmail(e.target.value)} label={"Email"} placeholder={"abc@gmail.com"} type="email"/>
                <InputBox onChange={ e => setPassword(e.target.value)} label={"Password"} placeholder={"******"} type="password"/>
                <div className="pt-4">
                    <Button onPress={async ()=>{
                        const response =await axios.post("http://localhost:3000/api/v1/user/signin",{
                            UserName: Email,
                            Password: Password
                        })
                        localStorage.setItem("token", response.data.token);
                        if(response.data.message == "User Login successfully"){
                            navigate("/dashboard")
                        }
                    }} label={"Sign in"} />
                </div>
                <BottomWarning label={"New User?"} linkText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}
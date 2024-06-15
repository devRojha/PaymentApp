import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export function Signup(){
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your infromation to create an account"}/>
                <InputBox onChange={ e => setFirstName(e.target.value)}label={"First Name"} placeholder={"Jhon"} type={"text"}/>
                <InputBox onChange={ e => setLastName(e.target.value)} label={"Last Name"} placeholder={"Doe"} type={"text"} />
                <InputBox onChange={ e => setEmail(e.target.value)} label={"Email"} placeholder={"abc@gmail.com"} type={"email"}/>
                <InputBox onChange={ e => setPassword(e.target.value)} label={"Password"} placeholder={"********"} type={"password"}/>
                <div className="pt-4">
                    <Button onPress={async ()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            UserName: Email,
                            FirstName: FirstName,
                            LastName: LastName,
                            Password:Password
                        });
                        localStorage.setItem("token", response.data.token);
                        // localStorage.setItem("token", "");  for delete token when logout
                        // localStorage.removeItem("token");
                        if(response.data.message == "User created successfully"){
                            navigate("/")
                        }
                        else{
                            alert(response.data.message);
                        }
                    }} label={"Signup"}/>
                </div>
                <BottomWarning label={"Allready have an account?"} linkText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
}
import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { AppBarLogin } from "../components/AppBarLogin";


export function Dashboard(){
    const [balance, setBalance] = useState(0);
    const [name, setName] = useState("PayTm")
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        const fetchdata = async ()=>{
            const token  = localStorage.getItem("token");
            if(!token){
                navigate("/signup");
                return
            }
            try{
                const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
                    headers:{
                        Authorization: "Bearer " + token
                    }
                });
                setBalance(response.data.Balance.toFixed(2))
                setName(response.data.Name)
            }
            catch(e){
                console.log(e);
            }
        };
        fetchdata();
    },[balance, name, navigate])

    if(name == "PayTm"){
        return <div className="flex flex-col justify-center">
            <AppBarLogin/>
            <div className="h-screen bg-slate-300 flex justify-center">
                <div className="flex flex-col justify-center">
                    Session Expire (Login Again)
                </div>
            </div>
        </div>
    }
    else{
        return <div>
            <AppBar name={name}/>
            <Balance amount={balance}/>
            <Users />
        </div>
    }
}
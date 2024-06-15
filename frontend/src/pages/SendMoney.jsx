import { useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { useState } from "react";
import axios from "axios";

export function SendMoney(){

    const navigate = useNavigate()

    const [searchParams] = useSearchParams()
    const id = searchParams.get("id");
    const name = searchParams.get("name"); 

    const [paisa , setPaisa] = useState("0");

    return <div className="h-screen bg-slate-300 flex justify-center">
        <div className="2-90 h-full flex flex-col justify-center">
            <div className="bg-white border border-slate-300 rounded-lg p-8">
                <div className="flex justify-center pl-10 pr-10">
                    <Heading label={"Send Money"}/>
                </div>
                <div className="pt-6 pb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-2xl text-white">{name[0].toUpperCase() }</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        name="amount" 
                        // name-> for
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        type="number"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                        onChange={(e)=>{
                            setPaisa(e.target.value);
                        }}
                    />
                    </div>
                    <button onClick={async ()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to:id,
                            amount: paisa
                        },{
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        }) 
                        if(response.data.message == "Transfer successful"){
                            setTimeout(()=>{
                                navigate("/")
                            },3000),
                            navigate("/successfull")
                        }
                    }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    </div>
}
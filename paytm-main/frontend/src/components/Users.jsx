import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";



export function Users(){
    const [users , setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    //need to update debouncy
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
        .then(res => {
            setUsers(res.data.user);
        })
    },[filter])

    return <div className="mt-6 ml-3 mr-3 mb-6">
        <div className="text-2xl font-bold">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search Users..." className="w-full border rounded border-slate-500 px-2 py-1 text-lg" onChange={e =>{setFilter(e.target.value)}}></input>
        </div>
        <div className="w-full">
            {users.map((user)=>{
                return <User key={user._id} user={user}/>
            })}
        </div>
    </div>
}

function User({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between mt-5 ">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-500 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl font-Semibold">
                    {user.FirstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.FirstName} {user.LastName}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button onPress={()=>{
                navigate("/send?id=" + user._id + "&name=" + user.FirstName)
            }} label={"Send Money"}/>
        </div>
    </div>
}
import { useNavigate } from "react-router-dom"

export function AppBarLogin(){
    const navigate = useNavigate();
    return <div className="flex justify-between h-14 shadow-md">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-blue-500">PayTM App</div>
        <div className="flex mr-4">
            <div className="flex flex-col justify-center mr-4 h-full">
                <button className="text-blue-500" onClick={()=>{
                    navigate("/signin")
                }}>Login</button>
            </div>
            <div className="flex flex-col justify-center mr-4 h-full">
                <button className="text-blue-500" onClick={()=>{
                    navigate("/signup")
                }}>signup</button>
            </div>
        </div>
    </div>
}
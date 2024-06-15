import { useNavigate } from "react-router-dom";

export function AppBar({name}){
    const navigate = useNavigate();
    return <div className="flex justify-between h-14 shadow-md">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-blue-500">PayTM App</div>
        <div className="flex mr-4">
            <div className="flex flex-col justify-center mr-4 h-full">
                <button className="text-blue-500" onClick={()=>{
                    localStorage.removeItem("token");
                    navigate("/signin");
                }}>Logout</button>
            </div>
            <div className="flex flex-col justify-center mr-4 h-full">Hello</div>
            <div className="rounded-full bg-slate-300 h-12 w-12 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-lg font-bold">{name[0].toUpperCase()}</div>
            </div>
        </div>
    </div>
}
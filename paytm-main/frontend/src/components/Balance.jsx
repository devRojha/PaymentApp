

export function Balance({amount}){
    return <div className="flex h-16 shadow-md">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-2xl">Your Balance</div>
        <div className="flex flex-col justify-center h-full ml-4 font-Semibold text-2xl">Rs {amount}</div>
    </div>
}
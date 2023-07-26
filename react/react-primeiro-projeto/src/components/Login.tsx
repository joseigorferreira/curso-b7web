import { UserContext } from "@/contexts/UserContext";
import { useContext, useState } from "react";

type Props = {
    onClick: () => void;
}

export const Login = ({ onClick }: Props) => {

    const userName = useContext(UserContext);

    return (
        <div className="w-full max-w-xl h-full max-h-72 bg-white rounded-md pl-5 pt-2 pr-5 shadow shadow-black flex justify-center flex-col">
                <div className=" font-bold text-4xl flex-2">
                    LOGIN
                </div>
                <div className="border border-black my-5 flex flex-col justify-center items-center">
                    <input value={userName?.userName} onChange={e => userName?.setUserName(e.target.value)} className=" p-3 m-5 h-10 border-black border-2 rounded-md text-black" placeholder="Usuário"></input>
                    <button onClick={onClick} className="my-5 p-3 bg-blue-700 w-32 text-white rounded-md">Logar</button>
                </div>
        </div>
    );
}
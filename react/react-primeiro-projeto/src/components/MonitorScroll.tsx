import { useEffect } from "react";

export const MonitorScroll = () => {

    useEffect(() => {
        console.log("Iniciando a Monitorar")
        
        return () => {
            console.log("Parando o monitoramento")
         }
    })

    return(
        <div className="bg-red-700 w-52 h-52"></div>
    );
}
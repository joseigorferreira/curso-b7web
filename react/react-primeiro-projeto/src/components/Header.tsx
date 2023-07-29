import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

export const Header = () => {
    const userName = useContext(UserContext);
    return(
        <header>
            <h1 className="text-7xl">{`Usuário Logado: ${userName?.userName}`}</h1>
        </header>
    );
}
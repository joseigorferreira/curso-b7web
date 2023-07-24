import { UserContextProvider } from "@/contexts/UserContext";
import { Login } from "./Login";
import { Header } from "./Header";
import { useState } from "react";

export const TelaLogin = () => {
    const [userLoged, setUserLoged] = useState(false);


    const userLogin = () => {
        setUserLoged(!userLoged)
    }
    return (
        <UserContextProvider>
            {!userLoged && <Login onClick={() => userLogin()}></Login>}
            {userLoged && <Header></Header>}
        </UserContextProvider>
    );
}
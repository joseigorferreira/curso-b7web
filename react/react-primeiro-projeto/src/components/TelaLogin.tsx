import { UserContextProvider } from "@/contexts/UserContext";
import { Login } from "./Login";
import { Header } from "./Header";
import { useState } from "react";
import { ChatSimples } from "./ChatSimples";
import { ChatProvider } from "@/contexts/ChatContext";

export const TelaLogin = () => {
    const [userLoged, setUserLoged] = useState(false);


    const userLogin = () => {
        setUserLoged(!userLoged)
    }
    return (
        <div className="flex justify-center items-center mt-10">
            <UserContextProvider>
                <ChatProvider>
                    {!userLoged && <Login onClick={() => userLogin()}></Login>}
                    {userLoged && <ChatSimples></ChatSimples>}
                </ChatProvider>
            </UserContextProvider>
        </div>
    );
}
import { ReactNode, createContext, useState } from "react";

type User = {
    userName: string;
    setUserName: (s: string) => void;
}

export const UserContext = createContext<User | null>(null);

type Props = {
    children: ReactNode;
}

export const UserContextProvider = ({children} : Props) => {
    const [userName, setUserName] = useState('');
    return(
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    );
} 
import { ReactNode, createContext, useReducer } from "react";
import { Message } from "@/types/Message";
import { chatReducer } from '../reducers/ChatReducer';

type ChatContext = {
    chat: Message[];
    addMessage: (user: string, text: string) => void
}

export const ChatContext = createContext<ChatContext | null>(null);

export const ChatProvider = ({children}: {children: ReactNode}) => {

    const [chat, dispatch] = useReducer(chatReducer, []);

    const addMessage = (user: string, text: string) => {
        dispatch(
            {
                type: 'add',
                payload: {
                    user: user,
                    text: text
                }
            }
        );
    }

    return(
        <ChatContext.Provider value={{chat,addMessage}}>{children}</ChatContext.Provider>
    );
}
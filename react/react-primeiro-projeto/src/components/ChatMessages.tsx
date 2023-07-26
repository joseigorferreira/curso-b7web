import { ChatContext } from "@/contexts/ChatContext";
import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

export const ChatMessages = () => {
    const chatCtx = useContext(ChatContext);
    const user = useContext(UserContext);

    return (
        <div className="flex flex-col gap-2">
            {
                chatCtx?.chat.map(chat =>
                    <div key={chat.id}
                        className={`border border-white/20 rounded-md p-2 text-sm
                    ${chat.user === user?.userName ?
                                'self-end bg-white/10' : 'self-start bg-white-5'
                            }
                    `}
                    >
                        <div className="font-bold">{chat.user}</div>
                        <p>{chat.text}</p>
                    </div>
                )
            }
        </div>
    );
}
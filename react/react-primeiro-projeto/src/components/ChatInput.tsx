import { ChatContext } from "@/contexts/ChatContext";
import { KeyboardEvent, useContext, useState } from "react";

export const ChatInput = ({ name }: {name : string}) => {

    const [textInput, setTextInput] = useState('');
    
    const chatCtx = useContext(ChatContext);

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === "enter") {
            if (textInput.trim() !== ''){
                chatCtx?.addMessage(name,textInput.trim());
                setTextInput('');
            }
        }
    }

    return (
    <div className=" border w-full max-w-md rounded-md ">
        <input value={textInput} onChange={e => setTextInput(e.target.value)} onKeyUp={handleKeyUpAction} className="w-full bg-transparent text-white px-3 py-2 border" placeholder={`${name} digite uma mensagem e aperte Enter`}></input>
    </div>
    );
}
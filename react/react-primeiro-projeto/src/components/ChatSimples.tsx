import { ChatContext } from "@/contexts/ChatContext";
import { UserContext } from "@/contexts/UserContext";
import { useContext, KeyboardEvent, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const ChatSimples = () => {
    const userName = useContext(UserContext);

    return (
        <div className=" flex justify-center flex-col items-center w-full max-w-md">
            <div className="flex justify-center mt-7">
                <h1 className="text-4xl">Chat Simples</h1>
            </div>
            <div className=" border w-full max-w-md rounded-t-md mt-5 h-96 overflow-y-scroll">
                <div className="m-5">
                <ChatMessages></ChatMessages>
                </div>
            </div>
            <div className=" border w-full max-w-md rounded-md ">
                <ChatInput name={userName?.userName || 'sem nome'}></ChatInput>
                <ChatInput name={'bot'}></ChatInput>
            </div>
        </div>
    );
}
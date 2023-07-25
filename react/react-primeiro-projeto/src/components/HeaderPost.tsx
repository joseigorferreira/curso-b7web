import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

export const HeaderPost = () => {

    const [titleInput, setTitleInput] = useState('');
    const [textInput, setTextInput] = useState('');

    const postsCtx = useContext(PostContext);

    const handleButtonAdd = () => {
        if (titleInput && textInput){
            postsCtx?.addPost(titleInput,textInput);
            setTitleInput('');
            setTextInput('');
        } 
    }

    return (
        <div>
            <div className="flex justify-center items-center text-5xl mt-9 border-b pb-5">
                <h1>Exercício de Posts</h1>
            </div>
            <div className="flex justify-center mt-6">
                <div className="w-full max-w-xl bg-white rounded-md pl-5 pt-2 pr-5 shadow shadow-black">
                    <div className="border-black border mt-5">
                        <input placeholder="Título do Post" type="text" className="rounded-mb bg-gray-200 text-black px-3 w-full text-xl" value={titleInput} onChange={e => setTitleInput(e.target.value)} ></input>
                    </div>
                    <div className="  mt-5 mb-5 h-44">
                        <textarea value={textInput} onChange={e => setTextInput(e.target.value)} placeholder="Texto do Post" className="border-black border rounded-mb bg-gray-200 text-black w-full h-full text-xl"></textarea>
                    </div>
                    <div className="mb-5 flex justify-center font-bold">
                        <button className="bg-blue-600 p-3 rounded-md hover:opacity-80" onClick={handleButtonAdd}>Adicionar Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { useEffect, useState } from "react";

const DARK_ACTIVE = 'darkActiveContent'

export const ExercicioDarkMode = () => {

    const [darkActive, setDarkActive] = useState(JSON.parse(localStorage.getItem(DARK_ACTIVE)|| 'false'));

    useEffect(() => {
        localStorage.setItem(DARK_ACTIVE,JSON.stringify(darkActive))
    }, [darkActive]);

    return(
        <div className={` ${darkActive ? 'bg-black text-white' : 'bg-white text-black'} w-screen h-screen `}>
            <div className="flex justify-center p-10 text-3xl mx-5 ">
                <button onClick={() => {setDarkActive(!darkActive)}} className={` ${darkActive ? 'text-white' : 'text-black'} `}>Mudar para {!darkActive ? 'dark' : 'light'}</button>
            </div>
            <div>
                <h1 className="text-4xl pb-7 mx-5 ">Título da Página</h1>
            </div>
            <div className="m-5">
                <h2>Conteúdo da Página</h2>
            </div>
            <div>
                <button className={`p-3 ${darkActive ? 'bg-white text-black font-bold border-white rounded-md' : 'bg-black text-white font-bold border-black rounded-md '} mx-5 `}>Clique Aqui</button>
            </div>
        </div>
    );
}
import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react"

export const ExercicioListaReducer = () => {
    const [list, dispath] = useReducer(listReducer, [])

    const [inputNewItem, setInputNewItem] = useState<string>('')

    const handleAddItem = () => {
        if (!inputNewItem)
            return false;

        dispath({
            type: 'add',
            payload: { text: inputNewItem }
        })
        setInputNewItem('');
    }

    const handleEditItem = (key: number) => {

        const item = list.find(it => it.id === key);

        if(!(item?.text)) return false

        const newTextitem = window.prompt("Digite o novo texto", item?.text)

        if(!newTextitem || newTextitem.trim() === '') return false;

        dispath({
            type: 'editText',
            payload: { id: key, newText: newTextitem }
        })
        setInputNewItem('');
    }

    const handleDeleteItem = (key: number) => {
        if (!window.confirm("Tem certeza que deseja Excluir?")) return false;
        
        dispath({
            type: 'remove',
            payload: { id: key }
        })
        setInputNewItem('');
    }

    const handleToggleItem = (key: number) => {
        dispath({
            type: 'toggleDone',
            payload: { id: key }
        })
    }

    return (
        <div className="w-full max-w-xl bg-white rounded-md pl-5 pt-2 pr-5 shadow shadow-black">
            <div className="flex justify-center mb-2 text-lg font-bold">
                <h1 >Lista do Exercicio</h1>
            </div>
            <div>
                <input type="text" onChange={e => setInputNewItem(e.target.value)} value={inputNewItem} className="border border-2 w-full border-black rounded-md mb-5 px-3" placeholder="Adicionar Item"></input>
            </div>
            <ul>
                {list.map((item, key) =>
                    <div key={key}>
                        <li>
                            <div className="flex flex-row mb-2 flex-row">
                                <div className="flex-1">
                                    <input type="checkbox" checked={item.done} onClick={() => { handleToggleItem(item.id) }} className="mr-2" />
                                    <span className={`
                                        ${item.done ? 'line-through' : ''}
                                    `}>
                                        {item.id}. {item.text}
                                    </span>
                                </div>
                                <button onClick={() => { handleEditItem(item.id) }} className="ml-5 px-3 bg-blue-600 text-white font-bold rounded-md hover:opacity-80">Editar</button>
                                <button onClick={() => { handleDeleteItem(item.id) }} className="ml-5 px-3 bg-red-600 text-white font-bold rounded-md hover:opacity-80">Excluir</button>
                            </div>
                        </li>
                    </div>
                )}
            </ul>
            <div className="flex justify-center border-t-2">
                <button onClick={handleAddItem} className="mt-5 rounded-md text-white text-2xl mb-5 p-3 bg-green-600 ">Adicionar Item</button>
            </div>
        </div>
    );
}
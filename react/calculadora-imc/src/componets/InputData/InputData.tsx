type Props = {
    value: number;
    placeHolder: string;
    disable: boolean;
    onChange: (event: any) => void;
}

export const InputData = ({value, placeHolder, disable, onChange} : Props) => {

    return (    <input
        className="text-black w-full px-3 py-1 mb-5 text-sm border border-b-black outline-none"
        type="number"
        placeholder="Digite o seu peso. Ex: 75.3 (em quilogramas)"
        value={value > 0 ? value : ''}
        onChange={onChange}
        disabled={disable}
    ></input>
    )
}
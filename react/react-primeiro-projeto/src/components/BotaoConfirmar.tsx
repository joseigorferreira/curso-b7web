type Props = {
    onClick: () => void;
}

export const BotaoConfirmar = ({onClick} : Props ) => {

    const handleButaoConfirma = () => {
        onClick();
    }

    return(
        <button 
        onClick={handleButaoConfirma}
        className="text-white bg-blue-800 p-3 rounded-md" 
        >
            Confirmar!
        </button>
    );
}
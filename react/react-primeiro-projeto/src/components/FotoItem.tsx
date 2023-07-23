import { foto } from "@/types/foto"

type Props = {
    foto: foto,
    onClick: () => void
}

export const FotoItem = ({foto, onClick} : Props) => {
    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${foto.url}`}></img>
        </div>
    );
}
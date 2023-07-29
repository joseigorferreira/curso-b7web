type Props = {
    varCount: number;
}

export const Contador = ({varCount}: Props) => {

    return(
        <>
            <div>
                {varCount}
            </div>
        </>
    );
}
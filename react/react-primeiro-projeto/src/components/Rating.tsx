type Props = {
    nota: number
}


export const Rating = ({ nota }: Props) => {
    let stars: string = "";

    if (nota >= 1 && nota < 2) {
        stars = "☹️"
    } else if (nota >= 2 && nota < 3) {
        stars = "🤕🤕"
    } else if (nota >= 3 && nota < 4) {
        stars = "😐😐😐"
    } else if (nota >= 4 && nota < 5) {
        stars = "🙂🙂🙂🙂"
    }
    else if (nota > 4) {
        stars = "😁😁😁😁😁"
    }


    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">Nota: {nota.toFixed(1)} </div>
            <div className="ml-20">{stars}</div>
        </div>
    );
}
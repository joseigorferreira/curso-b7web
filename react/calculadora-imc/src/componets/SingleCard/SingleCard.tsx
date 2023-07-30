import { Card } from "@/types/Card";

export const SingleCard = (card: Card) => {
    return (
        <>
            <div className={`flex justify-center items-center flex-col w-full 
        ${card.hFull ? 'h-full ' : 'h-40'}
        rounded-md`} style={{ backgroundColor: card.color }}>
                <img className="w-10 mb-5 " src={card.image} />
                <p className=" text-white text-2xl font-bold p-3">{card.text}</p>
            </div>
        </>
    );
}
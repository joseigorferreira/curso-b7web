const getWeekday = () =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
};

export const Square = () => {
    const name: string = "Igor Viana";

    return (
        <div>
            <h1>{name} - {getWeekday()}</h1>
        </div>
    );
};


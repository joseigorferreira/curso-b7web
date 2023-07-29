function getHour() {
    return new Intl.DateTimeFormat('pt-BR', {
        timeStyle:'short',
        hour12: false
    }).format();
};

function getHorario() {
    return getHour();
};

export const Horario = () => {

    return(
        <>
            <p>
                {getHorario()}
            </p>

        </>
    );
}

export const Saudacao = () => {
    let mensagem = "";

    if(getHour() >= "00" && getHour() <= "12" ){
        mensagem = "Bom Dia!!! 🌟"
    }else if(getHour() >= "13" && getHour() <= "17"){
        mensagem = "Boa Tarde!!! 🌟"
    }else {
        mensagem = "Boa Noite!!!"
    }

    return(
        <p>{mensagem}</p>
    );
}
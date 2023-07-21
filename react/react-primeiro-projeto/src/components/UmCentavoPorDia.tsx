import { useState } from "react";
import { Contador } from "./Contador";
import { BotaoConfirmar } from "./BotaoConfirmar";

export const UmCentavoPorDia = () => {
  
    const [count, setCount] = useState(0.01);
    const [quantidadeDias, setQuantidadeDias] = useState(1);
  
    const handleButtonSoma = () => {
      setCount(count * 2);
      adicionaDia();
    }
  
    const adicionaDia = () => {
      setQuantidadeDias(quantidadeDias+1);
    }
  
    return (
      <div className="p-3 w-screen h-screen flex flex-col justify-center items-center" >
        <div className="text-8xl mb-10">
          <Contador varCount={count}></Contador>
        </div>
        <div className="text-2xl mb-10 flex flex-row ">
          <div className="mr-5">Quantidade de Dias: </div> 
          <Contador varCount={quantidadeDias}></Contador>
        </div>
        <BotaoConfirmar onClick={handleButtonSoma}></BotaoConfirmar>
      </div>
    );
  }
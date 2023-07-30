'use client'

import { SingleCard } from "@/componets/SingleCard";
import { Card } from "@/types/Card";
import { useEffect, useState } from "react";
import { calcIMC, levels } from "@/utils/ImcServices";
import { InputData } from "@/componets/InputData";

const Page = () => {

  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const [showIMC, setShowIMC] = useState(false)

  const [imc, setIMC] = useState(0)

  const [cardResult, setCardResult] = useState<Card | null>(null);

  const handleCalculateButton = () => {

    if (showIMC) {
      return false;
    }

    if (heightField && weightField) {
      setIMC((weightField / (heightField * heightField)))
      setShowIMC(!showIMC);
    } else {
      alert("Digite todos os campos!!!");
    }
  }

  useEffect(() => {

    const myImc = calcIMC(weightField, heightField)

    if (myImc) {
      setCardResult({
        text: myImc?.title,
        color: myImc.color,
        image: myImc.icon
      })
    }

  }, [showIMC])

  const handleButtonBack = () => {
    setShowIMC(false);
    setWeightField(0);
    setHeightField(0);
  }

  return (
    <div className="w-screen h-screen">
      <header>
        <div className="max-w-4xl py-10 mx-auto ">
          <img src='/assets/powered.png' alt="" className="w-40"></img>
        </div>
      </header>
      <div className="flex max-w-4xl mx-auto">
        <div className="flex-1 mr-10 mt-5">
          <h1 className="m-0 text-4xl ">Calcule Seu IMC</h1>
          <p className="text-lg  mt-5">
            IMC é a sigla para Índice de Massa Corpórea,
            parâmetro adotado pela Organização Mundial de
            Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <div className=" flex flex-col gap-3  mt-5">
            <InputData placeHolder="Digite a sua altura. Ex: 1.5 (em metros)" value={heightField} disable={showIMC} onChange={e => setHeightField(parseFloat(e.target.value))} />
            <InputData placeHolder="Digite o seu peso. Ex: 75.3 (em quilogramas)" value={weightField} disable={showIMC} onChange={e => setWeightField(parseFloat(e.target.value))} />

            <button className={` text-white font-bold p-4
            ${showIMC ? ' cursor-auto bg-gray-400' : 'hover:opacity-80 bg-blue-700'}
            rounded-md `} onClick={handleCalculateButton}>Calcular</button>
          </div>
        </div>
        <div className="flex-1 ml-10 max-w-4xl mt-10 mx-auto">
          {!showIMC &&
            <div className="flex grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {
                levels.map((level, key) =>
                  <div key={key}>
                    <SingleCard hFull={showIMC} image={level.icon} text={level.title} color={level.color}></SingleCard>
                    {/* <div className={`flex justify-center items-center flex-col w-full 
                    ${showIMC ? 'h-full ' : 'h-40'}
                    rounded-md`} style={{backgroundColor: level.color}}>
                      <img className="w-10 mb-5 " src={level.icon} />
                      <p className=" text-white text-2xl font-bold p-3">{level.title}</p>
                    </div> */}
                  </div>
                )
              }
            </div>
          }
          {
            showIMC && cardResult &&
            <div className="w-full h-full flex items-center">
              <img src="/assets/leftarrow.png" className="absolute bg-blue-600 rounded-full p-3 w-20 
              cursor-pointer -ml-10" alt="back" onClick={handleButtonBack} />
              <SingleCard hFull={showIMC} image={cardResult?.image} text={cardResult.text} color={cardResult.color}></SingleCard>

            </div>
          }
        </div>
      </div>

    </div>
  )
}


export default Page;


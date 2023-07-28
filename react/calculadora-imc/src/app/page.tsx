'use client'

import { useState } from "react";

const Page = () => {

  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert("Digite todos os campos!!!");
    }
  }

  return (
    <div className="">
      <header>
        <div className="max-w-4xl mt-10 mx-auto ">
          <img src='/assets/powered.png' alt="" className="w-40"></img>
        </div>
      </header>
      <div className="flex max-w-4xl mx-auto">
        <div className="flex-1 mr-10">
          <h1 className="m-0 text-4xl ">Calcule Seu IMC</h1>
          <p className="text-lg">
            IMC é a sigla para Índice de Massa Corpórea,
            parâmetro adotado pela Organização Mundial de
            Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <div className=" flex flex-col gap-4">
            <input
              className="text-black w-full"
              type="number"
              placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}

            ></input>

            <input
              className="text-black w-full"
              type="number"
              placeholder="Digite o seu peso. Ex: 75.3 (em quilogramas)"
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
            ></input>

            <button onClick={handleCalculateButton}>Calcular</button>
          </div>
        </div>
        <div className="flex-1 ml-10">
          ...
        </div>
      </div>

    </div>
  )
}


export default Page;


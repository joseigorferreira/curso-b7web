import { Level } from "@/types/Level";

export const levels: Level[] = [
    {title: 'Magreza'   , color: '#96A3AB'  , icon: '/assets/down.png'  , imcLevel: [0,18.5]},
    {title: 'Normal'    , color: '#0EAD69' , icon: '/assets/up.png'    , imcLevel: [18.6,24.9]},
    {title: 'Sobrepeso' , color: '#E2B039', icon: '/assets/down.png'  , imcLevel: [25,29.9]},
    {title: 'Obsidade'  , color: '#C3423F'   , icon: '/assets/down.png'  , imcLevel: [30,99]}
]

export const calcIMC = (weightField: number, heightField:number ) => {
    let levelActive: Level;

    const imc = (weightField/(heightField*heightField));

    for(let level of levels){
        console.log(level)
        if(imc >= level.imcLevel[0] && imc < level.imcLevel[1]){
            levelActive = {...level}
            levelActive.myLevel = imc;
            console.log("Meu IMC "+levelActive)
            return levelActive;
          }else if(imc >= level.imcLevel[0] && imc < level.imcLevel[1]){
            levelActive = {...level}
            levelActive.myLevel = imc;
            console.log("Meu IMC "+levelActive)
            return levelActive;
          }else if(imc >= level.imcLevel[0] && imc < level.imcLevel[1]){
            levelActive = {...level}
            levelActive.myLevel = imc;
            console.log("Meu IMC "+levelActive)
            return levelActive;
          }else if(imc >= level.imcLevel[0] && imc < level.imcLevel[1]) {
            levelActive = {...level}
            levelActive.myLevel = imc;
            console.log("Meu IMC "+levelActive)
            return levelActive;
          }
    }
    console.log("Meu IMC é null")
    return null;
}
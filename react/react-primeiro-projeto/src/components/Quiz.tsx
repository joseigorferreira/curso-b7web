import { Questions } from "@/data/Questions";
import { useState } from "react";
import { CurrentQuestion } from "./CurrentQuestion";
import { Resultado } from "./Resultado";


export const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer: number) => {
        setResult([...result, answer]);

        if (Questions[currentQuestion+1]){
            setCurrentQuestion(currentQuestion+1);
        }else {
            setShowResult(true);
        }
    }

    const reloadQuiz = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setResult([])
    }

    return (
        <div className="w-full max-w-xl bg-white rounded-md pl-5 pt-2 pr-5 shadow shadow-black">
            <div className="pl-5 pt-2 pr-5">
                <div>
                    <h1 className="font-bold mb-5">Quiz de Culinária</h1>
                </div>
                <div>
                    {   
                        !showResult && 
                        <CurrentQuestion
                            item={Questions[currentQuestion]}
                            currentQuestion={currentQuestion}
                            totalQuestions={Questions.length}
                            handleAnswerQuestion={handleAnswer}
                        ></CurrentQuestion>
                    }

                    {
                        showResult && <Resultado reloadQuiz={reloadQuiz} questions={Questions} answers={result}></Resultado>
                    }

                </div>
            </div>
        </div>
    );
}
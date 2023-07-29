import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    item: Question,
    currentQuestion: number,
    totalQuestions: number,
    handleAnswerQuestion: (answer: number) => void
}

export const CurrentQuestion = ({ item, currentQuestion, totalQuestions, handleAnswerQuestion }: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    function handleSelectedQuestion(key: number) {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);
            setTimeout(() => {
                handleAnswerQuestion(key);
                setSelectedAnswer(null);
            }, 1500);
        }
    }

    return (
        <>
            <div className="text-2xl font-bold mb-5">
                {item.id}. {item.question}
            </div>
            <div>
                {item.options.map((option, key) =>
                    <div
                        key={key}
                        onClick={() => handleSelectedQuestion(key)}
                        className={`mb-4 p-3 bg-gray-300 rounded  font-bold
                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60 '}
                        ${selectedAnswer !== null && option.answersCorrect && selectedAnswer === key ?
                                'bg-green-300'
                                :
                                selectedAnswer !== null && selectedAnswer === key && 'bg-red-300'
                            }
                    `}>
                        {option.answer}
                    </div>
                )
                }
            </div>
            <div className="flex justify-center items-center">
                {currentQuestion + 1} de {totalQuestions} pergunta
            </div>
        </>
    );
}
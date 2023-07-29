import { Question } from "@/types/Question";

type Props = {
    questions: Question[],
    answers: number[],
    reloadQuiz: () => void
}

export const Resultado = ({questions, answers, reloadQuiz}: Props) => {
    console.log(answers);
    return (
        <>
            <div className="">
                {questions.map(
                    question => 
                    <div className="border-b-2 mb-5">
                        <div>
                            Pergunta {question.id}. {question.question}
                        </div>
                        <div className="mb-5">
                            Resposta: {question.options[answers[question.id-1]].answer}
                                {
                                    question.options[answers[question.id-1]].answersCorrect &&
                                    <> - Acertou!!!</>
                                } 
                                {
                                    !question.options[answers[question.id-1]].answersCorrect &&
                                    <> - Errou fon fon fon!!!</>
                                }                             
                        </div>
                    </div>
                )}
                <div className="flex justify-center items-center mb-5 ">
                    <button className="w-48 rounded-md bg-blue-600 text-white" onClick={reloadQuiz}>Zerar Quiz</button>
                </div>
            </div>
        </>
    );
}
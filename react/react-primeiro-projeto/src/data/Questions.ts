import { Question } from "@/types/Question";

export const Questions: Question[] = [
    {
        id: 1,
        question: "O que não pode Faltar?",
        options: [
            {
                id: 1,
                answer: "Farinha",
                answersCorrect: false
            },
            {
                id: 2,
                answer: "Corante",
                answersCorrect: true
            },
            {
                id: 3,
                answer: "Água",
                answersCorrect: false
            },
            {
                id: 4,
                answer: "Açúcar",
                answersCorrect: false
            }
        ]

    },
    {
        id: 2,
        question: "Qual o melhor método de cozinhar?",
        options: [
            {
                id: 1,
                answer: "Microondas",
                answersCorrect: false
            },
            {
                id: 2,
                answer: "Fogão",
                answersCorrect: false
            },
            {
                id: 3,
                answer: "Fogueira",
                answersCorrect: false
            },
            {
                id: 4,
                answer: "Lança-Chamas",
                answersCorrect: true
            }
        ]

    }
]
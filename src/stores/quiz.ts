import {defineStore} from 'pinia'
import {ref} from "vue";
import {questions} from "@/data/questions";

interface Question {
    question: string,
    answers: {
        text: string,
        isCorrect: boolean
    }[]
}

export const useQuizStore = defineStore('quiz', () => {

    const currentQuestion = ref<number>(0)

    const userAnswers = ref<string[]>([])

    const randomSort = (arr: Question[]) => {
        return arr.sort(() => Math.random() - Math.random())
    }

    const randomSortedQuestions = ref(randomSort(questions))


    const makeAnswer = (userAnswer: string) => {
        userAnswers.value[currentQuestion.value] = userAnswer;
        if (currentQuestion.value < randomSortedQuestions.value.length - 1) {
            currentQuestion.value++;
        }
    }

    return {
        currentQuestion,
        randomSortedQuestions,
        userAnswers,
        makeAnswer
    }
})

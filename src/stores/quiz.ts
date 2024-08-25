import { defineStore } from 'pinia';
import { ref } from 'vue';
import { questions } from '@/data/questions';

interface Answer {
    text: string;
    isCorrect: boolean;
}

interface Question {
    question: string;
    answers: Answer[];
}

interface UserAnswer {
    question: string;
    userAnswer: string;
    isCorrect: boolean;
}

export const useQuizStore = defineStore('quiz', () => {

    const isQuizCompleted = ref(false);

    const currentQuestion = ref<number>(0);
    const userAnswers = ref<UserAnswer[]>([]);
    const correctAnswersCount = ref<number>(0);

    const randomSort = <T>(arr: T[]): T[] => {
        return arr.sort(() => Math.random() - Math.random());
    };

    const randomizeData = (questions: Question[]): Question[] => {
        return randomSort(
            questions.map(question => ({
                ...question,
                answers: randomSort(question.answers)
            }))
        );
    };

    const randomSortedQuestions = ref(randomizeData(questions));

    const makeAnswer = (userAnswer: string) => {
        const currentQuestionData = randomSortedQuestions.value[currentQuestion.value];
        const correctAnswerText = currentQuestionData.answers.find(a => a.isCorrect)?.text || '';
        const isCorrect = userAnswer === correctAnswerText;

        if (isCorrect) {
            correctAnswersCount.value++;
        }

        userAnswers.value.push({
            question: currentQuestionData.question,
            userAnswer,
            isCorrect,
        });

        if (currentQuestion.value < randomSortedQuestions.value.length - 1) {
            currentQuestion.value++;
        }else{
            isQuizCompleted.value = true;
        }
    };

    const resetQuiz = () => {
        isQuizCompleted.value = false;
        currentQuestion.value = 0;
        userAnswers.value = [];
        correctAnswersCount.value = 0;
        randomSortedQuestions.value = randomizeData(questions);
    };

    return {
        currentQuestion,
        randomSortedQuestions,
        userAnswers,
        makeAnswer,
        isQuizCompleted,
        correctAnswersCount,
        resetQuiz
    };
});

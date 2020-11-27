export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type QuizTypes = {
    question: string
    answer: string
    options: string[]
    
}

export type PropsTypes = {
    question: string
    options: string[]
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
    Score: number
    Quiz: number
    questionNum: number
}
export type inputProps ={
    setrequest: React.Dispatch<React.SetStateAction<Boolean>>
    setDiffculty: React.Dispatch<React.SetStateAction<string>>
    difficulty: string
    setTotalQues: React.Dispatch<React.SetStateAction<number>>
    totalQues: number
    name:string
    setName: React.Dispatch<React.SetStateAction<string>>
}
export type resultProps = {
    score: number
    difficulty: string
    totalQuestion: number
    name: string
    restartHandle: (e: React.FormEvent<EventTarget>) => void
}
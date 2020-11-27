import {Quiz, QuizTypes} from "../../components/Types/Types"
const shuffleArray = (e:any)=>{
    return [...e].sort(() => Math.random() - 0.5 )
}
export const getQuizFuncation = async (totalQues: number, Diffculty: string): Promise<QuizTypes[]> => {
    const api= await fetch(`https://opentdb.com/api.php?amount=${totalQues}&category=9&difficulty=${Diffculty}&type=multiple`)
    let {results} = await api.json()
    console.log(results);
 const quiz:QuizTypes[] = results.map((obj:Quiz) => {
    return{
        question: obj.question,
        answer: obj.correct_answer,
        options: shuffleArray(obj.incorrect_answers.concat(obj.correct_answer)),
        difficulty: obj.difficulty,
    }
 })
 return quiz
}
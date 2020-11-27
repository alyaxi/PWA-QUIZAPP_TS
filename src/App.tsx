import React, {useEffect, useState} from 'react';
import './App.css';
import QScard from './components/QScard';
import {getQuizFuncation} from './components/Services/Api'
import {QuizTypes} from './components/Types/Types'
import InputText from './components/Input'
import Loader from "./components/Loader"
import Result from './components/Result'
const App = () => {
  let [startQuiz , setStartQuiz]= useState<QuizTypes[]>([])
  let [submit, setSubmit] = useState<number>(0)
  let [score, setScore] = useState<number>(0)
  let [Diffculty , setDiffculty]= useState<string>("")
  let [data, setData] = useState<Boolean>(false)
  let [request, setrequest] = useState<Boolean>(false)
  let [showResult, setShowResult] = useState<Boolean>(false)
  let [totalQues, setTotalQues] = useState<number>(0)
  let [name, setName] = useState<string>("")
  

  useEffect(() => {
    const fetchData = async () => {
      if(request){
        setData(true)
        const Question:QuizTypes[] = await getQuizFuncation(totalQues, Diffculty)
        // console.log(Question);
        setData(false)
        setStartQuiz(Question)
        
        
      }
    }
    fetchData()
    
  },[request,Diffculty,totalQues])
  const handelSubmit = ( e:React.FormEvent<EventTarget>, userAnswer: string) => {
    // console.log(userAnswer);
    console.log(submit);
    
    const currentAnswer: QuizTypes = startQuiz[submit]
    console.log("Correct Answer " + currentAnswer.answer + " userSelected " + userAnswer);
    if(userAnswer === currentAnswer.answer){
      setScore(++score)
    }
    e.preventDefault()
    if(submit !== startQuiz.length - 1){
      setSubmit(++submit)
    }else {
      setShowResult(true)
    }
    
  }
  if (data){
  return (
  <Loader/>
  )
}
const restartFunc = () => {
  if(request){
  setData(true)
  setStartQuiz([])
  setData(false)
  }
  setrequest(false)
  setShowResult(false)
  setName("")
  setDiffculty("")
  setScore(0)
  setTotalQues(0)
  setSubmit(0)

}
  return (
    <div className="App">
      <h1 className="heading">Quiz <span>⚡</span> App</h1>
      <h4 className="sub-heading">Boost Your Knowledge</h4>
      {startQuiz.length ? (
       !showResult ?(
         <QScard 
        question={startQuiz[submit].question}
        options = {startQuiz[submit].options}
        callback={handelSubmit}
        Score={score}
        Quiz = {startQuiz.length}
        questionNum= {submit}
       />
        ):(
          <Result
          restartHandle={restartFunc}
          score={score}
          difficulty={Diffculty}
          totalQuestion={startQuiz.length}
          name={name}
          />
        )
       )
      :(
         <InputText 
         setDiffculty={setDiffculty}
         setrequest={setrequest}
         difficulty={Diffculty}
         setTotalQues={setTotalQues}
         totalQues={totalQues}
         name={name}
         setName={setName}
         />
           )}
      </div>

      )}
export default App;

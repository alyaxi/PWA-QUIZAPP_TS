import React from 'react'
import { resultProps } from './Types/Types';

const Result:React.FC<resultProps> = ({score, difficulty, totalQuestion, name, restartHandle}) => {
        return (
          <div className="courses-container">
            <div className="course">
            <div className="course-preview">
              <h3 className="result-heading">Result</h3>
    
            </div>
            <div className="course-info">
            <h3>Your Name: {name}</h3>
            <h3>Your Score: {score}</h3>
            <h3>Difficulty: {difficulty}</h3>
            <h3>Total Question: {totalQuestion}</h3>
            <h3>Percantage: {(score / totalQuestion) * 100}%</h3>
            <input type="submit" value="Start Again" onClick={restartHandle} className="btn-submit-result"/>
    
            </div>
    
            </div>
          </div>
        )
      }
export default Result
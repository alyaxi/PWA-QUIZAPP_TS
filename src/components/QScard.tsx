import React, { useState } from 'react';
import { PropsTypes } from './Types/Types';
import '../App.css';
import {  FormControl,FormControlLabel,RadioGroup,Radio} from '@material-ui/core';


const QScard:React.FC<PropsTypes> = ({question, options, callback, Score, Quiz, questionNum}) => {
    const [selectAnswer,setSelectAnswer] = useState("")
    const handleChange = (e:any) => {
        setSelectAnswer(e.target.value)
        console.log(e.target.value);
        
    }

    return (
        <div className="courses-container">
        <div className="course"> 
        <div className="course-preview">
    <h6>Score: {Score} / {Quiz}</h6>
        <h5>
        <form onSubmit={(e:React.FormEvent<EventTarget>) => {callback(e, selectAnswer)}}>
            <FormControl component="fieldset">
                <RadioGroup
                aria-label="option"
                value={selectAnswer}
                onChange={handleChange}
                name="option"
                className="radio-group">
            {options.map((radio: string, index: number) => {
                // console.log(radio);
                
                return(
                    
                    <div key={index}>
                        <FormControlLabel
                        value={radio}
                        label={radio}
                        control={<Radio required={true}/>}
                        className="radio-label"/>
                    </div>
                )
            })}
            </RadioGroup>
            </FormControl>
                <input type="submit" className="btn" />
            </form>
        
        </h5>
        </div>
        <div className="course-info">
            <h6>Total Question: {questionNum} / {Quiz}</h6>
            <h3>{question}</h3>
            </div>

            </div>
        </div>
    )
}
export default QScard

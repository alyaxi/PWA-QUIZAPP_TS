import React from "react";
import { inputProps } from "../components/Types/Types";
import "../App.css";
import NativeSelect from "@material-ui/core/NativeSelect";

import { FormControl, InputLabel, TextField } from "@material-ui/core";

const InputText: React.FC<inputProps> = ({
  setDiffculty,
  setrequest,
  difficulty,
  setTotalQues,
  totalQues,
  name,
  setName
}) => {
  return (
    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          <h5 className="quiz-setup-heading"> Quiz Setup </h5>
        </div>
        <div className="course-info">
          <form
            autoComplete="off"
            onSubmit={(e: React.FormEvent<EventTarget>) => {
              e.preventDefault();
              setrequest(true);
            }}
          >
            <div className="form-input">
              <FormControl className="totalque-label" fullWidth>
              <TextField required id="standard-basic" label="Enter your name" value={name} 
              onChange={(e)=>{
                e.preventDefault()  
                setName(e.target.value)
              }} />
                  </FormControl>
                  <br />
              <FormControl
                className="totalque-label" fullWidth
              >
                <InputLabel htmlFor="ques-native-helper">Select Difficulty</InputLabel>
                <NativeSelect
                  className="select"
                  required
                  value={difficulty}
                  onChange={(e: any) => {
                    e.preventDefault()
                    setDiffculty(e.target.value);
                  }}
                  inputProps={{
                    name: "question",
                    id: "ques-native-helper",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </NativeSelect>
              </FormControl>
              <br />
              <FormControl className="totalque-label" fullWidth>
                <InputLabel htmlFor="ques-native-helper">Select Question</InputLabel>
                <NativeSelect
                  className="nativeSelect"
                  required  
                  value={totalQues}
                  onChange={(e: any) => {
                    e.preventDefault()
                    setTotalQues(e.target.value)}}
                  inputProps={{
                    name: "question",
                    id: "ques-native-helper",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                  <option value={30}>30</option>
                </NativeSelect>
              </FormControl>
              <br/>
              <input className="btn-submit" type="submit" required value="Start Quiz" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default InputText;

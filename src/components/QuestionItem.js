import React, {useState} from 'react';
import RadioBoxInput from "./RadioBoxInput";
import styled from 'styled-components';
import QuizBtn from "./QuizBtn";

const Item = styled('div')`
    span{
        margin-right: 10px;
    }
    
`;

const Button = styled('button')`
    padding: 10px 0px;
    color: #fff;
    font-size: 16px;
    background-color: #2196f3;
    width: 50%;
    margin-top: 20px;
    cursor: pointer;
    border-color: transparent;
    border-radius: 5px;
    
    &: hover{
        border-color: #2196f3;
        background-color: #fff;
        color: #2196f3;
    }
    
`;

const QuestionItem = ({title, questions, topicId, action}) => {
    //get checked value from Radio Button in each question
    const [checkedValue, setCheckedValue] = useState("");
    return(
        <Item>
            <h2>{title}</h2>
            {questions && [...questions].map((item, index) => {
                return <RadioBoxInput key={index} title={item} id={topicId} action={setCheckedValue}/>
            })}
            <Button onClick={() => action(topicId, checkedValue.target.defaultValue)}>Answer</Button>
        </Item>
    );
}

export default  QuestionItem;
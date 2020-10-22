import React from 'react';
import RadioBoxInput from "./RadioBoxInput";
import styled from 'styled-components';

const Item = styled('div')`
    
`;

const QuestionItem = ({title, questions, topicId}) => {
    return(
        <Item>
            <h2>{title}</h2>
            {questions && [...questions].map((item, index) => {
                return <RadioBoxInput key={index} title={item} id={topicId}/>
            })}
        </Item>
    );
}

export default  QuestionItem;
import React from  'react';
import styled from 'styled-components';

const Button = styled('button')`
    padding: 15px 0px;
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

const QuizBtn = () => {
    return(
        <Button>
            Answer
        </Button>
    );
};

export default QuizBtn;
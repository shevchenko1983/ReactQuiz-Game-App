import React, {useEffect, useState} from 'react';
import QuestionItem from "./QuestionItem";
import styled from 'styled-components';

const Wrapper = styled('div')`
    width: 70%;
    margin: 70px auto;
    background-color: #fff;
    border-radius: 10px;    
`;

const QuizWrapper = ({questions}) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questionItem, setQuestionItem] = useState({});

    useEffect(() => {
        if(questions){
            setQuestionItem([...questions].find((item, index) => index === questionIndex));
        }
    }, [questionIndex, questions]);
   // console.log(questionItem);
    return(
            <Wrapper className="quiz_wrapper">
                {[questionItem].map((item, index) => {
                    return <QuestionItem key={index}
                                         title={item.title}
                                         questions={item.questions}
                                         topicId={index}
                    />
                }) }
            </Wrapper>
        );
}

export default QuizWrapper;
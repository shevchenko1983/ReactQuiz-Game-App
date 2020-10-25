<<<<<<< HEAD
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

=======
import React, {useEffect, useState} from 'react';
import QuestionItem from "./QuestionItem";
import styled from 'styled-components';
import QuizFinished from "./QuizFinished";


const Wrapper = styled('div')`
    width: 50%;
    margin: auto;
    background-color: #2196f31a;
    border-radius: 10px;
    border:1px solid #222;
    padding: 20px;
    box-shadow: 0 0px 5px rgba(0,0,0,0.5);
    transform: translateY(100%);    
`;

const QuizWrapper = ({questions}) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questionItem, setQuestionItem] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState([]);

    useEffect(() => {
        if(questions){
            //get question  by it's index
            setQuestionItem([...questions].find((item, index) => index === questionIndex));
        }
    }, [questionIndex, questions]);


    const onCheckAnswer = (questionId, answer) => {
        //console.log(questionIndex, answer);
        //find the answer to current Question
        if(questionItem.correctAnswer === answer){
            setCorrectAnswers([...correctAnswers, answer]);
        }
        if(questionIndex < questions.length){
            //show next question - if it's not a finish of Quiz
            setQuestionIndex(questionIndex + 1);
        }
    };

    return(
            <Wrapper className="quiz_wrapper">
                { questionIndex <= questions.length - 1 ?
                    [questionItem].map((item, index) => {
                        return <QuestionItem key={index}
                                             title={item.title}
                                             questions={item.questions}
                                             topicId={index}
                                             action={onCheckAnswer}
                        />
                    })
                : <QuizFinished result={correctAnswers.length} totalQuestions={questions.length}/> }
            </Wrapper>
        );
}

>>>>>>> main
export default QuizWrapper;
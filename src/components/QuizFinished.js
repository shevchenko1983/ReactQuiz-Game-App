import React from 'react';

const QuizFinished = ({result, totalQuestions}) => {
    return(
      <>
        <h3>The Quiz is Finished. Thank You!!</h3>
        <p>Your result: {result} / {totalQuestions}</p>
      </>
    );
};

export default QuizFinished;
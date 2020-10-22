import React from 'react';
import * as styled from 'styled-components';

const RadioBoxInput = ({title, id}) => {
    return(
        <>
            <input type="radio" name={`topic ${id}`} value={title}/>
            <span>{title}</span>
        </>
    );
}

export default RadioBoxInput;
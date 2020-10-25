<<<<<<< HEAD
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

=======
import React from 'react';
import * as styled from 'styled-components';

const RadioBoxInput = ({title, id, action}) => {
    return(
        <>
            <input type="radio" name={`topic ${id}`} value={title} onChange={(e) => action(e)}/>
            <span>{title}</span>
        </>
    );
}

>>>>>>> main
export default RadioBoxInput;
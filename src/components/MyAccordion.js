import React, { useState } from 'react';

//props are from Accordion i.e id question and answer
const MyAccordion = ({question, answer}) => {
    // setting toggle states for the accordion
    // if true, answers show and if false, answers are hidden
    // if show is TRUE, then and only then show the answers 
    // changing the state using setShow and onClick functions
    const [show, setShow] = useState(false);
    return(
        <>
            <div className='main-heading' id='questions'>
                <h3 onClick={() => setShow(!show)}>
                    {show? '- ' : "+ "}
                     {question}
                </h3>
            </div>
            
            { show && <p id='answers'>{answer}</p> }
        </>
    )
}

export default MyAccordion;
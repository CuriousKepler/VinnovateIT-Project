import React, { useState } from 'react';
import { answers } from '../shared/answers';
import MyAccordion from './MyAccordion';

const Accordion = () => {
    const[data, setData] = useState(answers);
    return(
        <>
            <section className='main-div'>
            <h1 id='accordion-heading'>VinnovateIt Interview Questions.</h1>
                {
                    data.map((curElem) => {
                        // passing id as a variable
                        const { id } = curElem;
                        return(
                            //spread function ... to pass ques and ans
                            <MyAccordion key={id} { ...curElem } />
                        );
                    })
                }
            </section>
        </>
    )
}

export default Accordion;
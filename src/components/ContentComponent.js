import React, { Component } from 'react';
import { answers } from '../shared/answers';
import Accordion from './Accordion';


//defining the main content
class Content extends Component{
    constructor(props){
        super(props);
        this.state= {
            answers: answers
        };
    }

    render(){
        return(
            // <div className='container'>
            //     <div className='row row-content' id='content-1'>
            //         {this.state.answers.map((ans) => {
            //             return(
            //                 <>
            //                 <div>
            //                     {ans.id + '.'} {ans.question}
            //                 </div>
            //                 <div>
            //                     {"-> " + ans.answer}
            //                 </div>
            //                 <br />
            //                 </>
            //             )
            //         })} 
            //     </div>
            <div className='row row-content' id='content'>
                <Accordion />
            </div>
            // </div>
        );
    }
}

export default Content;
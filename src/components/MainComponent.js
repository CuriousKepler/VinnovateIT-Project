import React, { Component } from 'react';
import Header from './HeaderComponent';
import Content from './ContentComponent';
import Footer from './FooterComponent';
class Main extends Component{
    constructor(props){
        super(props);
   }

   render(){
       return(
           <div>
               <Header />
               <Content />
               <Footer />
           </div>
       )
   }
}

export default Main;
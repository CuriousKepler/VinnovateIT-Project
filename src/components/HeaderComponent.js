import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,
     Collapse, NavItem, Jumbotron, Button } from 'reactstrap';

class Header extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return(
            <>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'
                            id='MainHeading'>
                                <h1>Interview Answers</h1>                             
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        )
    }
}

export default Header;
import React from 'react';
import { Logo } from './Logo';
import { Form } from './Form';
import { ResultsContainer } from './ResultsContainer';

export const Container = () => {
    return (
        <div className="container">
            <div className="py-5 text-center">
                <Logo />
                <h1>Oui Sherlock</h1>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <p>Hunt down social media accounts by username across <u>more than 200</u> social networks</p>
                        <p>This is the graphical implementation of <a href="https://github.com/sherlock-project/sherlock" target="_blank" rel="noopener noreferrer">this project</a></p>
                    </div>
                </div> 
                <Form />
                <ResultsContainer />
            </div>
        </div>
    )
}

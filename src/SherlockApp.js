import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Container } from './components/ui/Container';
import { install } from 'ga-gtag';
import env from "react-dotenv";

export const SherlockApp = () => {
    install(env.GA_TAG);

    return (
        <Provider store={ store }>
            <Container />
        </Provider>
    )
}

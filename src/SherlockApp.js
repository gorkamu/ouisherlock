import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Container } from './components/ui/Container';
import { install } from 'ga-gtag';

export const SherlockApp = () => {
    install('G-H92YSXYWDD'); 

    return (
        <Provider store={ store }>
            <Container />
        </Provider>
    )
}

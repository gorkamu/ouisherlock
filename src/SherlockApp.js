import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Container } from './components/ui/Container';

export const SherlockApp = () => {
    return (
        <Provider store={ store }>
            <Container />
        </Provider>
    )
}

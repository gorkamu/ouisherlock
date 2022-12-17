import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Container } from './components/ui/Container';
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-H92YSXYWDD';

ReactGA.initialize(TRACKING_ID);

export const SherlockApp = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <Provider store={ store }>
            <Container />
        </Provider>
    )
}

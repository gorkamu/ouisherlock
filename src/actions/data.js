import { types } from '../types/types';
import { sources } from '../data/sources';

export const searchUsername = (query) => {
    return {
        type: types.SEARCH_USERNAME,
        payload: query
    }
}

export const startBulkLoad = () => {
    return async (dispatch, getState) => {
        const username = getState().data.query;

        for(let i=0; i<sources.length; i++) {
            sleep(1000);
            const e = sources[i];
            const url = e.link.trim().replace("$1", username)
            const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/check/?url=${url}`;
            console.log(endpoint);
            const resp = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })

            const body = await resp.json();         

            if(body.ok) {                
                dispatch( updateResultState({
                    service: e.name.toLowerCase(),
                    link: body.data.url,
                    status: body.data.status
                }) );
            }else{
                dispatch( updateResultState({
                    service: e.name.toLowerCase(),
                    link: '',
                    status: 404
                }) );
            }
        }

        dispatch(completed());
    }
}

const updateResultState = (item) => {
    return {
        type: types.UPDATE_RESULT,
        payload: item
    }
};

const completed = () => {
    return {
        type: types.DATA_COMPLETED
    }
}

export const cleanServices = () => {
    return {
        type: types.CLEAN_SERVICES
    }
}

const sleep = ms => new Promise(resolve => setTimeout( () => resolve(), ms))

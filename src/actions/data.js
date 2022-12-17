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
            const endpoint = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`

            fetch(endpoint)
                .then(response => {
                    if (response.ok) return response.json()                    
                })                
                .then((data) => {
                    dispatch( updateResultState({
                        service: e.name.toLowerCase(),
                        link: data.status.url,
                        status: data.status.http_code
                    }) );
                })
                .catch((err) => {
                    dispatch( updateResultState({
                        service: e.name.toLowerCase(),
                        link: '',
                        status: 500
                    }) );
                })
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

import { types } from '../types/types';

const initialState = {
    services: {

    },
    completed: false,
    query: null
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_RESULT:
            const services = state.services;

            if(!services.hasOwnProperty(action.payload.service)) {
                services[action.payload.service] = {
                    link: action.payload.link,
                    status: action.payload.status
                };
            }

            return {
                ...state
            }

        case types.DATA_COMPLETED:
            return {
                ...state,
                completed: true
            }

        case types.SEARCH_USERNAME:
            return {
                ...state,
                query: action.payload
            }

        case types.CLEAN_SERVICES:
            return {
                ...state,
                services: {},
                completed: false,
                query: null
            }
        
        default:
            return state;
    }
}
import React from 'react';
import { useSelector } from 'react-redux';

export const Result = ({ serviceName, link, status }) => {

    const data = useSelector(state => state.data);

    if( data.services && data.services.hasOwnProperty(serviceName.toLowerCase()) ) {
        return (            
            <div className="result__item-container">
                <span className="badge badge-secondary result__item-service-name">{ serviceName }</span>
                {
                    status === 404 ?
                        <span className="badge result__not-found">Not found</span>
                    :
                        <a href={ link } 
                            className="badge" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >{ link }</a>
                }                
            </div>
        )
    }

    return <>Loading...</>
}

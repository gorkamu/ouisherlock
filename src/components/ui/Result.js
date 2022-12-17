import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ResultStatus = {
    ERROR: 500,
    NOT_FOUND: 404,
    SUCCESS: 200
}

export const Result = ({ serviceName, link, status }) => {
    const data = useSelector(state => state.data);
    const [badgeClassName] = useState(() => {
        switch(status) {
            case ResultStatus.ERROR:
                return 'badge-danger'
            case ResultStatus.NOT_FOUND: 
                return 'badge-secondary'
            case ResultStatus.SUCCESS: 
                return 'badge-success'                
            default:
                return 'badge-secondary'
        }        
    })

    if( data.services && data.services.hasOwnProperty(serviceName.toLowerCase()) ) {
        return (            
            <div className="result__item-container">
                <span className={`badge ${badgeClassName} result__item-service-name`}>{ serviceName }</span>
                { 
                    status === ResultStatus.ERROR && <span className="badge result__error">Error CORS</span> 
                }
                { 
                    status === ResultStatus.NOT_FOUND && <span className="badge result__not-found">Not found</span>
                }
                {
                    status === ResultStatus.SUCCESS && <a href={ link } className="badge"  target="_blank" rel="noopener noreferrer" >{ link }</a>
                }
                {
                    !Object.values(ResultStatus).includes(status) && <span className="badge result__not-found">Not found</span>
                }
            </div>
        )
    }

    return <>Loading...</>
}

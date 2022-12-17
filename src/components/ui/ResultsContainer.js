import React, { useEffect } from 'react'
import { Result } from './Result';
import { useDispatch, useSelector } from 'react-redux';
import { startBulkLoad } from '../../actions/data';
import { Loader } from './Loader';


export const ResultsContainer = () => { 

    const dispatch = useDispatch();
    const { services, query, completed } = useSelector(state => state.data);

    useEffect(() => {
        if(query) {
            console.log("Rendering Container");
            dispatch(startBulkLoad());
        }        
    }, [dispatch, query]);
    
    return (
        <div className="row">
            <div className="col-md-8 offset-md-3 col-sm-12 mt-3 mb-3">
                {
                    Object.entries(services).map( (service, i) => {
                        return <Result serviceName={ service[0] } link={ service[1].link } status={ service[1].status} key={ i }/>
                    })
                }
            </div>
            {
                (!completed && query) && <Loader />
            }
        </div>
    )
}

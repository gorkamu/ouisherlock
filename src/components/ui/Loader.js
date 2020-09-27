import React from 'react'

export const Loader = () => {
    return (
        <>
            <div className="col-md-6 offset-md-3 loader__lds-spinner-container">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <p>Loading</p>
            </div>
        </>
    )
}

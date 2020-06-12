import React from 'react';
import {Spinner} from 'react-bootstrap';
const LoadingComponent = ({initialized, children}) => {
    if (initialized === false) {
        // return 'Loading...'
        return (<Spinner animation="border" variant="danger">
            <span className="sr-only">Loading...</span>
            </Spinner>
            );
    }
    return children;
};

export default LoadingComponent;



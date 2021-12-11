import React from "react";
import Spinner from 'react-bootstrap/Spinner'
const Loader= (props)=>{
    return (
        <div className="spinner-block">
            <Spinner animation="border" variant="primary" />
        </div>
    )
}
export {Loader}

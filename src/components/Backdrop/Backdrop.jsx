import React from 'react';
import './Backdrop.css';


const Backdrop = props => <div onClick={() => props.close()}
        style={{display: props.show?'block':'none'}} 
        className="Backdrop"></div>

export default Backdrop;
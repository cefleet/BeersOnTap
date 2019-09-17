//This is just for using electron
import React, { useState } from 'react';
import App from './App';

const ViewSetter = () => {

    const [view, setView] = useState("admin");

    window.addEventListener('changeView', e => {
        setView(e.view);
    }, false);

    return <App view={view} />
}

export default ViewSetter;
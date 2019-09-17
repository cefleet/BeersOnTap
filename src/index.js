import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ViewSetter from "./ViewSetter";


ReactDOM.render(<ViewSetter />, document.getElementById('root'));

//This needs to be added
//let viewChanged = new CustomEvent('changeView', { detail: "admin" });
//window.dispatchEvent(viewChanged);
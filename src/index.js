import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TapsContextProvider} from "./context/TapsContext";
import { BeersContextProvider} from "./context/BeersContext";
import { OnDeckContextProvider } from './context/OnDeckContext';

ReactDOM.render(<TapsContextProvider><BeersContextProvider><OnDeckContextProvider><App /></OnDeckContextProvider></BeersContextProvider></TapsContextProvider>, document.getElementById('root'));
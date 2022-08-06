// jsx porque hay codigo js y xml

import React from 'react';
import ReactDom from 'react-dom/client'
import { FirstApp } from './FirstApp';
import "./estilo.css";
import { CounterApp } from './CounterApp';
//import { HelloWorld } from './HelloWorld';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp/>
    </React.StrictMode>
)
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

import { CapstoneApp } from './CapstoneApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CapstoneApp/>
        </BrowserRouter>
    </React.StrictMode>
)
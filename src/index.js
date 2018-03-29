import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Style.css';
import App from './App';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        
        
        <Header />
    </div>
    , document.getElementById('root'));
registerServiceWorker();

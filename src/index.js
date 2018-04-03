import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Style.css';
import App from './App';
import Header from './Header';
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import './CSS/Menu.css';
import  './CSS/Menu1.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <div>
        <Header />
        <Menu1 />
        <Menu2 />
    </div>

    , document.getElementById('root'));
registerServiceWorker();

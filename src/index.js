import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Style.css';
import App from './App';
import Header from './Header.js';
import Menu1 from './Menu1.js';
import Menu2 from './Menu2.js';
import Menu3 from './Menu3.js';
import Body1 from './Body1';
import Arr_img from './Arr_img.js';
import Arr_img1 from './Arr_img1.js';
import Table from './Table';
import Footer from './Footer';
import './CSS/Menu.css';
import  './CSS/Menu1.css';
import './CSS/Body1.css';
import './CSS/Menu3.css';
import './CSS/Table.css';
import './CSS/Footer.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <div>
        {/* <App /> */}
        <Header />
        <div>
        <Menu1 />
        <Menu2 />
        </div>
        <Body1 />
        <Arr_img />
        <Menu3 />
        <Arr_img1/>
        <Table />
        <Footer />
        {/* marginRight = "25px" */}
    </div>

    , document.getElementById('root'));
registerServiceWorker();

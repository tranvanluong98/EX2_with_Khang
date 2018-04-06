import React, { Component } from 'react';

import './CSS/Style.css';
import { height } from 'window-size';

class Header extends React.Component {
    render() {
        return (

            <div>
                
                <header >
                    <div>
                        <a className="logo" title="Trang chu" href="/">
                            <img src="data:image/png;base64,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"
                                title="reactJS" />
                        </a>
                        <nav>
                            <ul className="hNav">
                                <li id="link1">
                                    <a href="https://www.facebook.com/">Register</a>
                                    &nbsp; | &nbsp;
                                </li>
                                <li id="link3">
                                    <a href="http://hocwebchuan.com/">Log in</a>
                                    &nbsp; | &nbsp;
                                </li>
                                <li id="link3">
                                    <a href="http://hocwebchuan.com/">Order Status</a>
                                    &nbsp; | &nbsp;
                                </li>
                                <li id="link4">

                                    <a href="http://nhacculeo.com/Cach-bam-hop-am-F-chan-de-dang.html">Easy Returns</a>
                                </li>

                                <img src="https://image.flaticon.com/icons/png/512/34/34067.png" alt="Gọi cho tôi ngay" className="phone_icon" />

                                <p className="phoneNum" >01656 577 666<b> World Wide Shipping</b></p>

                            </ul>

                        </nav>
                        <nav>
                            <ul className="countries">
                                <li>
                                    <a href="example.com">
                                        <img src="https://cdn3.iconfinder.com/data/icons/finalflags/256/Vietnam-Flag.png" title="VietNam" style={{ width: "25px", height: "25px", paddingRight: "5px" }} />

                                    </a>

                                </li>

                                <li>
                                    <a href="example.com">
                                        <img src="https://cdn3.iconfinder.com/data/icons/finalflags/256/China-Flag.png" title="China" style={{ width: "25px", height: "25px" }} />
                                    </a>
                                </li>

                                <li>
                                    <a href="example.com">
                                        <img src="https://cdn2.iconfinder.com/data/icons/waving-world-flags/512/USA-256.png" title="USA"  style={{ width: "25px", height: "25px", paddingLeft: "5px" }} />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <input type="text" className="search_cell" name="search" placeholder="Enter your keywords to make a search..." />
                        <button className="search_bt">SEARCH</button>
                        <img src={require('./LOGO/right-arrow  red.png')} style={{ width: "7px", height: "7px", marginLeft:"32%" ,marginBottom: "-7px"}} />
                        <div>
                            <img src="https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png" className= "shopicon" />
                            
                            <p className="view">view</p>
                            <p style={{ fontSize: "15px", marginLeft: "74%", marginTop: "-3%" }}>My Basket</p>
                        </div>
                        <hr style={{ textAlign: "center",marginLeft: "69%", width: "322px"}} />
   
    
   
                        <div className = "item">
                            <p className="item2">Item: 0</p>
                            <p className= "item3">$ Total</p>
                        </div>
                    </div>
                </header>
            </div>

        );
    }
}
export default Header;
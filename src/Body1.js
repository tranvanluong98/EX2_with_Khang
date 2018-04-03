import React, { Component } from 'react';
class Body1 extends React.Component {
    render() {
        return (
            <div className="body1">
                <h1 className="h1" style={{ color: "rgb(0,0,255)" }}>
                    WILDERNESS SYSTEM TSUNAMI SP
                </h1>
                <p className="p1">
                    You probably build websites and think your shit is special.
                     You think your 13 megabyte parallax-ative home page is going to get you some fucking Awwward banner you can glue to the top corner of your site. You think your 40-pound jQuery file and 83 polyfills give IE7 a boner because it finally has box-shadow. Wrong, motherfucker. Let me describe your perfect-ass website:
                </p>
                <img src="http://www.kinyu-z.net/data/wallpapers/48/868525.jpg" className="img1" />

                <h2 className="h1 p1" style={{ color: "rgb(0,0,255)" }}>
                    MAIN FEATURES:
                <hr />
                </h2>
                <span className="ul_mainFeatures">
                    <ul>
                        <li>
                            Some features here item
                        </li>
                        <br />
                        <li>
                            Another features in this position right here
                        </li>
                        <br />
                       
                        <li>
                            Filler dummy text
                        </li>
                        <br />
                        <li>
                            Item main feature
                        </li>
                    </ul>

                </span>
                <button className="detail_button">
                    DETAIL
                </button>

            </div>
        );

    }
}
export default Body1;
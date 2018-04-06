import React from 'react';
import './CSS/Arr_img.css';

class Arr_img extends React.Component {
    render() {
        return (

            <div id="content" style={{marginLeft:"15px"}}>
                <div>

                </div>

                <span >
                    {/* <a>
                        <img src="http://pixsector.com/cache/852dce6a/avb91899cb3246210ca63.png" style={{ width: "32px", height: "32px" }} className="leftArrow" />
                    </a> */}
                        <a href="#" className = "hrefImg">
                                <img src="https://1.bp.blogspot.com/-huI0iFW5OwQ/U5OKQeeenkI/AAAAAAAAf_o/9WJf9n_qc3I/s1600/comunismo_digital_fiestoforo.jpg" title="Product 1" alt="Georges" className="size" style={{ paddingLeft: "72px" }} />
                              
                        </a>
                        <a href="#">
                            <img src="https://1.bp.blogspot.com/-huI0iFW5OwQ/U5OKQeeenkI/AAAAAAAAf_o/9WJf9n_qc3I/s1600/comunismo_digital_fiestoforo.jpg" title="Product 2" alt="Gers" className="size" />
                        </a>
                        <a href="#">
                            <img src="https://1.bp.blogspot.com/-huI0iFW5OwQ/U5OKQeeenkI/AAAAAAAAf_o/9WJf9n_qc3I/s1600/comunismo_digital_fiestoforo.jpg" title="Product 3" alt="Providence" className="size" />
                        </a>
                    {/* <a>
                        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/61543-200.png" style={{ width: "32px", height: "32px", marginLeft: "37px " }} className="leftArrow" />
                    </a> */}
                </span>

            </div>
        );
    }
}
export default Arr_img;
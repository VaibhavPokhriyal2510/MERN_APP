import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';

const WhoMakesit = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "grey", fontFamily: "Courier New" }}>Who Makes It ?</h1>
                            <hr className="w-25 mx-auto" />
                            <img src={'https://www.starbucks.in/media/Who_Makes_It_tcm87-14661_w1024_n.jpg'} alt="About"
                                className="w-75 mt-5" Width="100px" />
                            <p className="lead mb-4" style={{ color: "black", textAlign: "justify", fontFamily: "Courier New" }}><br /><br />
                                It’s the passion and dedication of our extensively trained baristas that determines whether your coffee is just good, or if it is perfect. It’s a sentiment instilled from the very beginning of their training under the mantra “the last 10 feet is in our hands.” This reminds us that no matter how good our beans, how dark the roast, or how great the tools, it’s up to us to make sure your cup is made just the way you like it. And please don’t be shy, just let us know if it’s not and we’ll make it again for you.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WhoMakesit;
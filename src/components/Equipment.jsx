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

const Equipments = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "grey", fontFamily: "Courier New" }}>The Ingredients</h1>
                            <hr className="w-25 mx-auto" />
                            <img src={'https://www.starbucks.in/media/coffee-espresso-equipment_tcm87-3607_w1024_n.jpg'} alt="About"
                                className="w-75 mt-5" Width="100px" />
                            <p className="lead mb-4" style={{ color: "black", textAlign: "justify", fontFamily: "Courier New" }}><br /><br />
                                To craft the perfect cup, our baristas need the best equipment. None is more important than our custom-designed espresso machines. With unerring accuracy, they grind and pour shots to the precise time required for the peak flavor. This allows our baristas to concentrate on crafting your drink exactly the way you like it.

                                We’ve also launched new innovative milk pitchers, specially designed by us. It helps our baristas turn cold milk into sweet, creamy steamed milk with the thick, velvety foam that just tastes best.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Equipments;
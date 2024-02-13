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

const Ingredients = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "grey", fontFamily: "Courier New" }}>The Ingredients</h1>
                            <hr className="w-25 mx-auto" />
                            <img src={'https://www.starbucks.in/media/coffee-espresso-the-ingredients_tcm87-3608_w1024_n.jpg'} alt="About"
                                className="w-75 mt-5" Width="100px" />
                            <p className="lead mb-4" style={{ color: "black", textAlign: "justify", fontFamily: "Courier New" }}><br/><br/>
                                The perfect espresso drink always starts with the highest-quality Arabica beans perfectly roasted to our specifications. Since we developed our Espresso Roast more than 30 years ago, we’ve continued to perfect the roasting and blending to ensure this darker roast delivers a caramelly sweetness, soft acidity, and depth. To keep that flavor, we freshly grind beans for each shot.

                                And our espresso beans are always ethically sourced and 100% Fairtrade. So they don’t just taste good – they do good too.

                                But espresso beans are just the beginning. A good espresso beverage needs good milk. It takes skill and time to steam milk into a velvety foam of tiny bubbles. It’s this microfoam that tastes sweetest and creamiest.

                                The barista’s challenge is to blend the steamed milk with espresso in less than 10 seconds. After that, the rich foam layer on top of a freshly poured espresso begins to break down and the flavor changes. So a barista must have perfect timing to make your cup perfect.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ingredients;
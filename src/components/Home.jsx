import React from 'react';
import About from './About';
import Booking from './Booking';
import Brands from './Brands';
import Cart from './Cart';
import Contact from './Contact';
import Menu from './Menu';
import Policies from './Policies';
import Reviews from './Reviews';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div align="right" className="row">
                        <div align="right" className="col-md-12 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 fs-10" style={{ padding: "10px 20px", color: "dark brown", fontFamily: "Herculanum" }}>TASTE IT & SEE IT<br /> YOURSELF !!</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Brands />
            <Reviews />
            <Cart/>
           
        </div>
    );
}


export default Home;
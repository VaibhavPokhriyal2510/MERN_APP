import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={'./img/bg.jpeg'} alt="About"
                                className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h1 className="fs-5 mb-2"><b>Who are we ?</b></h1>
                            <hr />
                            <p className="lead mb-4" style={{ color: "black",textAlign:"justify" }}>
                                Taste and See Coffee Shop and Gallery offers a unique coffee house environment unlike any other in Macon. We are not only a place to drop in and get your morning cup of coffee,we are a place where you can sit down and enjoy that tailor-made cup of coffee.If you need to work, we have a seating area created specifically for you. All of our sauces & syrups are made in-house with all natural ingredients (no chemicals or preservatives) ensuring you the highest quality in taste & health.  You can complete your coffee with one of our delicious sweet treats made by our very own baker. We look forward to serving you at Taste & See Coffee Shop and Gallery!</p>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2">Get Started</button>
                            <a href="/contact">
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default About;



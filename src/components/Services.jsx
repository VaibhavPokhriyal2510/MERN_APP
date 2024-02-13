import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0" style={{textAlign: "center",fontFamily: "Impact"}}>Services</h3>
                            <h1 className="display-6 text-center mb-4" style={{textAlign: "center",fontFamily: "Bradley Hand"}}>Our <b>Awesome</b> Services</h1>
                            <hr className="w-25 mx-auto" />

                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold" style={{textAlign: "center",fontFamily: "Verdana"}}>Being Available</h5>
                                    <p class="card-text lead" style={{textAlign: "center",fontSize: 20,fontFamily: "Lucida Console"}}>Just by being visible, you make customers feel they are having a better experience as we are available to help.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class="card p-3">
                                <div class="card-body text-center ">
                                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold" style={{textAlign: "center",fontFamily: "Verdana"}}>Deliver On Promise</h5>
                                    <p class="card-text lead " style={{textAlign: "center",fontSize: 20,fontFamily: "Lucida Console"}}>One key factor in keeping your guests engaged and coming back is to deliver as you promise. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold" style={{textAlign: "center",fontFamily: "Verdana"}}>Being Exceptional</h5>
                                    <p class="card-text lead" style={{textAlign: "center",fontSize: 20,fontFamily: "Lucida Console"}}>What will set your restaurant apart is the degree to which you are willing to go above and beyond to be exceptional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-file-code-o fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold" style={{textAlign: "center",fontFamily: "Verdana"}}>Let Them Vent</h5>
                                    <p class="card-text lead" style={{textAlign: "center",fontSize: 20,fontFamily: "Lucida Console"}}>Giving customers an outlet for telling about their experiences that could help us in improvement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-star-half-o fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold" style={{textAlign: "center",fontFamily: "Verdana"}}>Customer Expectations</h5>
                                    <p class="card-text lead" style={{textAlign: "center",fontSize: 20,fontFamily: "Lucida Console"}}>Satisfied customers are looking for a memorable experience and dynamic service where it counts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold" style={{textAlign: "center",fontFamily: "Verdana"}}>Happiness and Loyalty</h5>
                                    <p class="card-text lead" style={{textAlign: "center",fontSize: 20,fontFamily: "Lucida Console"}}>Happy customers are loyal customers. Not only it's important to provide stellar service, but awesome products as well.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Services;
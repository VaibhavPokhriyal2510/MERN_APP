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

const Menu = () => {
    
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="fs-5 text-center mb-0" style={{ padding: "10px 20px", textAlign: "center", color: "black", fontFamily: "Courier" }}>Menu</h1>
                            <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "grey", fontFamily: "Courier New" }}>Food Is What Makes You Smile</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "green", fontFamily: "Brush Script MT" }}>Vegetarian</h1>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food1.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Veg Pizza<br />Rs-129</p>
                                <button >+</button>
                                <a href=""><button class="btn btn-primary">Add to Cart</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food2.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Veg Patty Burger</p>
                                <li class="list-group-item">Rs-60</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food3.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>French Fries-King</p>
                                <li class="list-group-item">Rs-80</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food4.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Spring Rolls</p>
                                <li class="list-group-item">Rs-99</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food5.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Veggie Momos</p>
                                <li class="list-group-item">Rs-80</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "red", fontFamily: "Brush Script MT" }}>Non-Vegetarian</h1>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food6.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Chicken Momos</p>
                                <li class="list-group-item">Rs-100</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food7.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Chicken Burger</p>
                                <li class="list-group-item">Rs-90</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food8.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Chicken Nuggets</p>
                                <li class="list-group-item">Rs-100</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food9.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Chicken 65</p>
                                <li class="list-group-item">Rs-110</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food10.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Chicken Wings</p>
                                <li class="list-group-item">Rs-150</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "brown", fontFamily: "Brush Script MT" }}>Tea & Coffee</h1>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food11.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Cappuccino Coffee</p>
                                <li class="list-group-item">Rs-129</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food12.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Black Coffee</p>
                                <li class="list-group-item">Rs-99</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food13.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Cold Coffee</p>
                                <li class="list-group-item">Rs-119</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food14.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Lemon Tea</p>
                                <li class="list-group-item">Rs-99</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food15.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Tea</p>
                                <li class="list-group-item">Rs-49</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "black", fontFamily: "Brush Script MT" }}>Bevarages</h1>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food16.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Virgin Mojito<br /> (350 ml)</p>
                                <li class="list-group-item">Rs-99</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food17.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Blueberry Ice-cream Shake</p>
                                <li class="list-group-item">Rs-109</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food18.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Oreo Ice-cream Shake<br />Rs-99</p>
                                <li class="list-group-item">Add to Cart</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food19.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Belgium Ice-cream Shake</p>
                                <li class="list-group-item">Rs-119</li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div class="card bg-dark text-white p-2">
                            <div class="card-body text-center">
                                <img src="./img/food20.jpeg" class="card-img-top" alt="..." />
                                <i className="fa fa-4x mb-4 text-primary"></i><br /><br />
                                <p class="card-text lead fw-bold" style={{ textAlign: "center", color: "white", fontFamily: "Optima" }}>Black Current Ice-cream Shake</p>
                                <li class="list-group-item">Rs-109</li>
                            </div>
                        </div>
                    </div>
                </div><br />
                <hr />
                <h1 className="display-6 text-center mb-4" style={{ padding: "10px 20px", textAlign: "center", color: "dark brown", fontFamily: "Brush Script MT" }}>Visit Nearest Store ASAP To Enjoy The Feast!!</h1>
                <hr />

            </section>
        </div>

    );
}

export default Menu;
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

const Brands = () => {
    return (
            <div>
                <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0" style={{textAlign: "center",fontFamily: "Impact"}}>People in Change</h3>
                            <h1 className="display-6 text-center mb-4" style={{textAlign: "center",fontFamily: "Bradley Hand"}}>Our Honorable Partner's</h1>
                            <hr className="w-25 mx-auto" />

                        </div>
                    </div>

                </div>
                <MDBFooter className='text-center text-white' style={{ backgroundColor: 'white' }}>
            <MDBContainer className='p-6'>
                <section className='text-center'>
                    <MDBRow>
                        <MDBCol lg='2' md='10' className='mb-4 mb-md-0  text-center'>
                            <MDBRipple rippleColor='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                                <a href='https://www.coca-colaindia.com/homepage'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}>
                                         <img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/1024px-Coca-Cola_bottle_cap.svg.png?auto=format&q=60&fit=max&w=930' className='w-100' />
                                    </div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple rippleColor='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                                <a href='https://www.starbucks.in'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}>
                                        <img src='https://www.webdesignerdepot.com/cdn-origin/uploads/circular_logos/starbucks.jpg' className='w-100' />
                                    </div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple rippleColor='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                                <a href='https://in.pinterest.com/pinterest/'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}>
                                            <img src='./img/1.png' className='w-100' />
                                        </div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple rippleColor='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                                <a href='https://open.spotify.com'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}>
                                            <img src='./img/5.png' className='w-100' />
                                        </div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                            <MDBRipple rippleColor='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                                <a href='http://www.pepsicoindia.co.in'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TKdzOe5fR68CznZ9sBGdm_pQgr2tZ5jDkN3FvQU6LAKlC9V8qfDMWT88yRwIyePxpO4&usqp=CAU' className='w-100' />
                                        </div>
                                </a>
                            </MDBRipple>
                        </MDBCol>
                        <MDBCol lg='2' md='10' className='mb-4 mb-md-0'>
                            <MDBRipple rippleColor='light' className='bg-image hover-overlay shadow-1-strong rounded'>
                                <a href='https://www.burgerking.in'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}>
                                    <img src='./img/4.png' className='w-100' />
                                    </div>
                                </a>
                            </MDBRipple>
                        </MDBCol>

                        </MDBRow>

                </section>

                </MDBContainer>
                </MDBFooter>
                </section>
            </div>
    );
}
        
export default Brands;
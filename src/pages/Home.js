import React from 'react';
import { Link } from 'react-router-dom';
import '../components/footer-styles/home.css'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-1'>
                <img
                  src='/images/homebanner1.png'
                  className='new img-fluid rounded-3'
                  alt='mainbanner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>LOREM IPSUM NEW PRODUCT</h4>
                  <h5>Dairy products</h5>
                  <p>from $12 - $999</p>
                  <Link className='button'>SHOP NOW</Link>
                </div>
              </div>
            </div>
            <div className='small-banner-div col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative p-1'>
                  <img
                    src='/images/homecat5.png'
                    className='new img-fluid rounded-3'
                    alt='mainbanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>LOREM IPSUM NEW PRODUCT</h4>
                    <h5>Dairy products</h5>
                    <p>from $12 - $999</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-1'>
                  <img
                    src='/images/homecat2.png'
                    className='new img-fluid rounded-3'
                    alt='mainbanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>LOREM IPSUM NEW PRODUCT</h4>
                    <h5>Flavoured Milks</h5>
                    <p>from $12 - $999</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-1'>
                  <img
                    src='/images/homecat3.png'
                    className='new img-fluid rounded-3'
                    alt='mainbanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>LOREM IPSUM NEW PRODUCT</h4>
                    <h5>Ice Creams</h5>
                    <p>from $12 - $999</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-1'>
                  <img
                    src='/images/homecat4.png'
                    className='new img-fluid rounded-3'
                    alt='mainbanner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>LOREM IPSUM NEW PRODUCT</h4>
                    <h5>Premium Ice creams</h5>
                    <p>from $12 - $999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='services-div col-12 '>
              <div className='services align-items-center justify-content-between d-flex'>
                <div className="service-class d-flex align-items-center gap-10">
                  <img src='/images/service.png' alt='servic1' />
                  <div>
                    <h6> Free Shipping</h6>
                    <p className='mb-0'>From all orders over $30</p>
                  </div>
                </div >
                <div className="service-class d-flex align-items-center gap-15">
                  <img src='/images/service-02.png' alt='service2' />
                  <div >
                    <h6>Daily Suprise offers</h6>
                    <p className='mb-0'> save 22% off</p>
                  </div>
                </div>
                <div className="service-class1 d-flex align-items-center gap-15">
                  <img src='/images/service-03.png' alt='service3' />
                  <div>
                    <h6>support</h6>
                    <p className='mb-0'>24/7</p>
                  </div>
                </div>
                <div className="service-class2 d-flex align-items-center gap-15">
                  <img src='/images/service-04.png' alt='service4' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get a new offers in bulk</p>
                  </div>
                </div>
                <div className="service-class3 d-flex align-items-center gap-15">
                  <img src='/images/service-05.png' alt='service5' />
                  <div>
                    <h6>Cash on Delivery</h6>
                    <p className='mb-0'>Pay after receiving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
           <div className='col-12'>
            <div className='categories d-felx justify-content-between align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6 >Dairy_Products</h6>
                  <p>11 items </p>
                </div>
                <img src='/images/dairy.png' alt='cam'/>
                <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Milk_Products</h6>
                  <p>8 items</p>
                </div>
                <img src='/images/milk.png' alt='cam'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Juice_and_Nectars</h6>
                  <p>36 items</p>
                </div>
                <img src='/images/juice.png' alt='cam'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Premium_Ice_Creams</h6>
                  <p>55 items</p>
                </div>
                <img src='/images/icecream.png' alt='cam'/>
              </div>
              
              </div>
           </div>
           </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
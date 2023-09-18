import React from 'react'
import { Link } from 'react-router-dom'
import '../components/footer-styles/home.css'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img 
              src='/images/homebanner1.png' 
              className='new img-fluid rounded-3' 
              alt='mainbanner'
              />
              <div className='main-banner-content position-absolute'>
                <h4>LOREM IPSUM NEW PRODUCT</h4>
                <h5>Dairy products</h5>
                <p>from $12 - $999</p>
                <Link>SHOP NOW</Link>
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
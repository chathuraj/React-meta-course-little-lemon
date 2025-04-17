import React from 'react'
import logo from '../../../../assets/greek_salad.jpg';
import './style.css'
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className='callToActionContinor'>
 <div className='continor-flex '>
        <div className='d-flex gap-50'>
            <div className='d-flex flex-col '>
                <div className='right-Side'>
                <div className='title'>
                    <h2>Little Lemon</h2>
                    <p>Chicago</p>
                </div>
                <div className='discription'>
                    <p>Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.</p>
                </div>
                <Link to="/booking"><button className='callToAction' >Reserve a Table</button></Link>
                </div>
            </div>
            <div className='left-Side'>
                <img src={logo} alt='Little Lemon' />
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default CallToAction

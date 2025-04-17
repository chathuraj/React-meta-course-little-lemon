import React from 'react'
import CallToAction from './CallToAction/CallToAction' 
import Specials from './Specials/Specials'
import Testimonials from './Testimonials/Testimonials'
import OurStory from './OurStory/OurStory'
import './style.css'

const HomePage = () => {
    return (
        <>
        <CallToAction/>
        <Specials/>
        <Testimonials/>
        <OurStory/>
        </>
    )
}

export default HomePage

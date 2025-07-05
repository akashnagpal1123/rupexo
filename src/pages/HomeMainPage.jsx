import React from 'react'
import Hero from '../components/HomePage/Hero'
import Section1 from '../components/HomePage/Section1'
import Section2 from '../components/HomePage/Section2'
import Section3 from '../components/HomePage/Section3'

const HomeMainPage = () => {
    return (
        <div>  <Hero />
            <Section1 /><Section3/>
            <Section2 />
            </div>
    )
}

export default HomeMainPage
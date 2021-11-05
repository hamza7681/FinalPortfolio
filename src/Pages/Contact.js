import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Comments from '../Components/Comments/Comments'
import CopyrightDiv from '../Components/Footer/CopyrightDiv'
import ContactUs from '../Components/Contact/ContactUs'

const Contact = () => {
    return (
        <>
        <Navbar/>
        <ContactUs/>
          <Comments/>
          <CopyrightDiv/>
        </>
    )
}

export default Contact

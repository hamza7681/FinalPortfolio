import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Introduction from '../Components/Introduction/Introduction'
import ProgressMain from '../Components/Progress/ProgressMain'
import Work from '../Components/Work/Work'
import Github from '../Components/Github/Github'
import AwardsData from '../Components/Awards/AwardsData'
import Comments from '../Components/Comments/Comments'
import CopyrightDiv from '../Components/Footer/CopyrightDiv'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Introduction/>
            <ProgressMain/>
            <Work/>
            <Github/>
            <AwardsData/>
            <Comments/>
            <CopyrightDiv/>
        </>
    )
}

export default Home

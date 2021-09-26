import React from 'react';
import LandingBody from 'components/Home/LandingBody';
import LandingHeader from 'components/Home/LandingHeader';
import LandingNavBar from 'components/Home/landingNavbar';

import { Helmet } from 'react-helmet';


const Home = ()=> {
    return (
        <>
            <Helmet>
                <title>CriptoADVISER</title>
                <meta name="description" content="CriptoADVISER es un proyecto creado para fomentar en a comunidad cubana el uso de criptoativos." />
            </Helmet>
            <LandingNavBar/>
            <LandingHeader/>
            <LandingBody/>
            
            
      
        </>
    )
}

export default Home;

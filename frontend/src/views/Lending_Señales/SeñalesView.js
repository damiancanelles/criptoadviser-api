import React from 'react';
import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import SeñalesBody from 'components/Señales/SeñalesBody';
import SeñalesHeader from 'components/Señales/SeñalesHeader';

import { Helmet } from 'react-helmet';
const SeñalesView = ()=> {
    return (
        <>
            <Helmet>
                <title>Señales</title>
                <meta name="description" content="Obten informacion de primera sobre los mercados justo en el momento que lo necesitas." />
            </Helmet>
            <LandingNavBar/>
            <SeñalesHeader></SeñalesHeader>
            <SeñalesBody></SeñalesBody>
            <LandingFooter></LandingFooter>
            
        </>
    )
}

export default SeñalesView;

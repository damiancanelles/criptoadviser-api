import React from 'react';
import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import LendingBody from 'components/Lending/LendingBody';
import LendingHeader from 'components/Lending/LendingHeader';

import { Helmet } from 'react-helmet';
const LendingView = ()=> {
    return (
        <>
            <Helmet>
                <title>Lending</title>
                <meta name="description" content="Invierte con nosotros firma un contrato y opten mas de un 20% de ganancias mensuales." />
            </Helmet>
            <LandingNavBar/>
            <LendingHeader></LendingHeader>
            <LendingBody></LendingBody>
            <LandingFooter></LandingFooter>
            
        </>
    )
}

export default LendingView;

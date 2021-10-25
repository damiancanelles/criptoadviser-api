import React from 'react';
import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import FreelancersBody from 'components/Freelancers/FreelancersBody';
import FreelancersHeader from 'components/Freelancers/FreelancersHeader';

import { Helmet } from 'react-helmet';

const FreelancersView = ()=> {
    return (
        <>
            <Helmet>
                <title>Freelancers</title>
                <meta name="description" content="Nuestra red de freelancers confirmados con KYC todo lo que puedas imaginar al alcance de tu mano." />
            </Helmet>
            <LandingNavBar/>
            <FreelancersHeader></FreelancersHeader>
            <FreelancersBody></FreelancersBody>
            <LandingFooter></LandingFooter>
            
        </>
    )
}

export default FreelancersView;

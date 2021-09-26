import React from 'react';

import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import NosotrosHeader from 'components/Nosotros/NosotrosHearer';
import NosotrosBody from 'components/Nosotros/NosotrosBody';

import { Helmet } from 'react-helmet';

const Nosotros = ()=> {
    return (
        <>
            <Helmet>
                <title>Nosotros</title>
                <meta name="description" content="CriptoADVISER es un proyecto creado para fomentar en a comunidad cubana el uso de criptoativos." />
            </Helmet>
            <LandingNavBar/>
            <NosotrosHeader></NosotrosHeader>
            <NosotrosBody></NosotrosBody>
            <LandingFooter></LandingFooter>
            
            
      
        </>
    )
}

export default Nosotros;

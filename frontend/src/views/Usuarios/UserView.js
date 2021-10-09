import React from 'react';

import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import VistaUser from 'components/UserDetail/VistaUser';
import { Helmet } from 'react-helmet';





export const UserView = () => {
    return (
        <>
            <Helmet>
                <title>Perfil de Usuario</title>
                <meta name="description" content="CriptoADVISER es un proyecto creado para fomentar en a comunidad cubana el uso de criptoativos." />
            </Helmet>
            <LandingNavBar/>
                <VistaUser/>
            <LandingFooter/>
        </>
    )
}

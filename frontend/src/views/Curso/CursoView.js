import React from 'react';
import LandingNavBar from 'components/Home/landingNavbar';
import LandingFooter from 'components/Home/LandingFooter';
import CursoHeader from 'components/Curso/CursoHeader';
import CursoBody from 'components/Curso/CursoBody';

import { Helmet } from 'react-helmet';
const CursoView = ()=> {
    return (
        <>
            <Helmet>
                <title>Curso de Traiding</title>
                <meta name="description" content="Un curso de te introducira en el mundo de las criptomonedas y te ayudara a encaminarte hacia esa independencia economica que tanto deseas." />
            </Helmet>
            <LandingNavBar/>
            <CursoHeader></CursoHeader>
            <CursoBody></CursoBody>
            <LandingFooter></LandingFooter>
            
        </>
    )
}

export default CursoView;
